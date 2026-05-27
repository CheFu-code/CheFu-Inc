import type { FormEvent } from "react";
import { AccountAuthScreen } from "./AccountAuthScreen";

const LoginUI = ({
    onSubmit,
    email,
    setEmail,
    password,
    setPassword,
    isSubmitting,
    appName,
    registerHref,
}: {
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    isSubmitting: boolean;
    appName: string;
    registerHref: string;
}) => {
    return (
        <AccountAuthScreen
            alternateHref={registerHref}
            appName={appName}
            email={email}
            isSubmitting={isSubmitting}
            mode="login"
            onSubmit={onSubmit}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
        />
    );
};

export default LoginUI;
