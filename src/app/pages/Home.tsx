import { About } from "../components/About";
import { Hero } from "../components/Hero";
import { Portfolio } from "../components/Portfolio";
import { Services } from "../components/Services";
import { TechStack } from "../components/TechStack";
import { HomeExperience } from "../components/homepage/HomeExperience";
import { Partnerships } from "../components/homepage/Partnerships";

export function Home() {
    return (
        <HomeExperience>
            <Hero />
            <Partnerships />
            <About />
            <Services />
            <TechStack />
            {/* <StorePreviewSection /> */}
            <Portfolio />
        </HomeExperience>
    );
}
