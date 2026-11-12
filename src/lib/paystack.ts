type PaystackCallbacks = {
    onSuccess: (transaction: { reference: string }) => void;
    onCancel: () => void;
    onError: (error: { message?: string }) => void;
};
type PaystackPopup = { resumeTransaction: (accessCode: string, callbacks: PaystackCallbacks) => unknown };
type PaystackConstructor = new () => PaystackPopup;

declare global {
    interface Window { PaystackPop?: PaystackConstructor }
}

let loader: Promise<PaystackConstructor> | null = null;

export function loadPaystack(): Promise<PaystackConstructor> {
    if (typeof window === "undefined") return Promise.reject(new Error("Payments require a browser."));
    if (window.PaystackPop) return Promise.resolve(window.PaystackPop);
    if (loader) return loader;

    loader = new Promise<PaystackConstructor>((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "https://js.paystack.co/v2/inline.js";
        script.async = true;
        const fail = () => {
            window.clearTimeout(timeout);
            script.remove();
            loader = null;
            reject(new Error("Paystack could not load. Check your connection and try again."));
        };
        const timeout = window.setTimeout(fail, 15_000);
        script.onerror = fail;
        script.onload = () => {
            window.clearTimeout(timeout);
            if (window.PaystackPop) resolve(window.PaystackPop);
            else fail();
        };
        document.head.appendChild(script);
    });
    return loader;
}
