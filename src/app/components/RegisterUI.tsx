import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Toaster } from "./ui/sonner";
import { Button } from "./ui/button";
import { Loader2, Lock, Mail } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Link } from "react-router";

const RegisterUI = ({
    onSubmit,
    email,
    setEmail,
    password,
    setPassword,
    isSubmitting,
}: {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    isSubmitting: boolean;
}) => {
    return (
        <section className="pt-32 pb-20 bg-slate-950 min-h-screen">
            <Toaster richColors theme="dark" position="top-right" />
            <div className="container mx-auto px-6">
                <div className="mx-auto max-w-md">
                    <Card className="border-slate-800 bg-slate-900/90 text-slate-100 shadow-xl">
                        <CardHeader className="space-y-2">
                            <CardTitle className="text-3xl font-bold text-white">
                                Register
                            </CardTitle>
                            <CardDescription className="text-slate-400">
                                Sign up to continue.
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <form onSubmit={onSubmit} className="space-y-5">
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-slate-300">
                                        Email
                                    </Label>
                                    <div className="relative">
                                        <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
                                        <Input
                                            id="email"
                                            type="email"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                            placeholder="you@example.com"
                                            className="border-slate-700 bg-slate-950 pl-10 text-slate-100 placeholder:text-slate-500"
                                            autoComplete="email"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="password" className="text-slate-300">
                                        Password
                                    </Label>
                                    <div className="relative">
                                        <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
                                        <Input
                                            id="password"
                                            type="password"
                                            value={password}
                                            onChange={(event) => setPassword(event.target.value)}
                                            placeholder="Your password"
                                            className="border-slate-700 bg-slate-950 pl-10 text-slate-100 placeholder:text-slate-500"
                                            autoComplete="current-password"
                                        />
                                    </div>
                                </div>
                                <div className="items-center justify-end flex gap-2 text-sm">
                                    <span>Already have an account?</span>
                                    <Link to={'/login'}>
                                        <span className="text-cyan-400 hover:text-cyan-300">
                                            Sign in
                                        </span>
                                    </Link>
                                </div>


                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-linear-to-r from-cyan-500 to-violet-600 text-white hover:opacity-90"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="size-4 animate-spin" />
                                            Signing up...
                                        </>
                                    ) : (
                                        "Sign Up"
                                    )}
                                </Button>
                            </form>

                            <p className="mt-6 text-center text-sm text-slate-400">
                                Need help?{" "}
                                <Link
                                    to="/contact"
                                    className="text-cyan-400 hover:text-cyan-300"
                                >
                                    Contact support
                                </Link>
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default RegisterUI;
