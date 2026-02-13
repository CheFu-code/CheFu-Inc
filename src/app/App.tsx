import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { AboutPage } from "./pages/AboutPage";
import { BlogPage } from "./pages/BlogPage";
import { CareersPage } from "./pages/CareersPage";
import { ContactPage } from "./pages/ContactPage";
import { FAQPage } from "./pages/FAQPage";
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { AIServicePage } from "./pages/services/AIServicePage";
import { MusicServicePage } from "./pages/services/MusicServicePage";
import { SoftwareServicePage } from "./pages/services/SoftwareServicePage";
import { ServicesPage } from "./pages/ServicesPage";
import { TermsOfService } from "./pages/TermsOfService";
import { RegisterPage } from "./pages/RegisterPage";
import { auth } from "../config/firebaseConfig";
import { toast, Toaster } from "sonner";
import { sendEmailVerification } from "firebase/auth";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default function App() {
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user && !user.emailVerified) {
                toast.warning("Please verify your email", {
                    action: {
                        label: "Verify",
                        onClick: () => {
                            sendEmailVerification(user)
                                .then(() => toast.success("Verification email sent"))
                                .catch((err) =>
                                    toast.error("Failed to send verification email:", {
                                        description: err.message,
                                    }),
                                );
                        },
                    },
                });
            }


        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <>
            <Toaster position="top-right" />
            <BrowserRouter>
                <ScrollToTop />
                <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-100 flex flex-col">
                    <Navbar />
                    <main className="grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/services/music" element={<MusicServicePage />} />
                            <Route
                                path="/services/software"
                                element={<SoftwareServicePage />}
                            />
                            <Route path="/services/ai" element={<AIServicePage />} />
                            <Route path="/portfolio" element={<PortfolioPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/register" element={<RegisterPage />} />
                            <Route path="/careers" element={<CareersPage />} />
                            <Route path="/blog" element={<BlogPage />} />
                            <Route path="/faq" element={<FAQPage />} />
                            <Route path="/privacy" element={<PrivacyPolicy />} />
                            <Route path="/terms" element={<TermsOfService />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
        </>
    );
}
