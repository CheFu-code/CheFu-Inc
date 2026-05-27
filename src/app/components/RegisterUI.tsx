import type { FormEvent } from "react";
import { AccountAuthScreen } from "./AccountAuthScreen";

const RegisterUI = ({
    onSubmit,
    email,
    setEmail,
    password,
    setPassword,
    isSubmitting,
    appName,
    loginHref,
}: {
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    isSubmitting: boolean;
    appName: string;
    loginHref: string;
}) => {
    return (
        <AccountAuthScreen
            alternateHref={loginHref}
            appName={appName}
            email={email}
            isSubmitting={isSubmitting}
            mode="register"
            onSubmit={onSubmit}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
        />
    );
};

export default RegisterUI;
