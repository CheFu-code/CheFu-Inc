import { About } from "../components/About";
import { Hero } from "../components/Hero";
import { Portfolio } from "../components/Portfolio";
import { Services } from "../components/Services";
import { TechStack } from "../components/TechStack";
import { HomeExperience } from "../components/homepage/HomeExperience";

export function Home() {
    return (
        <HomeExperience>
            <Hero />
            <About />
            <Services />
            <TechStack />
            {/* <StorePreviewSection /> */}
            <Portfolio />
        </HomeExperience>
    );
}
