"use client";

import { Canvas } from "@react-three/fiber";
import { useScroll } from "motion/react";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { AudioScene } from "../hero/AudioScene";

type HomeExperienceProps = {
    children: ReactNode;
};

function useScenePreferences() {
    const [preferences, setPreferences] = useState({
        reducedMotion: false,
        mobile: false,
        enabled: false,
    });

    useEffect(() => {
        const reducedMotionQuery = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        );
        const mobileQuery = window.matchMedia(
            "(max-width: 767px)",
        );

        const update = () => {
            setPreferences({
                reducedMotion: reducedMotionQuery.matches,
                mobile: mobileQuery.matches,
                enabled:
                    !reducedMotionQuery.matches &&
                    (navigator.hardwareConcurrency ?? 4) > 2,
            });
        };

        update();
        reducedMotionQuery.addEventListener("change", update);
        mobileQuery.addEventListener("change", update);

        return () => {
            reducedMotionQuery.removeEventListener(
                "change",
                update,
            );
            mobileQuery.removeEventListener("change", update);
        };
    }, []);

    return preferences;
}

export function HomeExperience({ children }: HomeExperienceProps) {
    const { scrollYProgress } = useScroll();
    const { reducedMotion, mobile, enabled } =
        useScenePreferences();

    return (
        <div className="relative isolate overflow-clip bg-slate-950">
            <div
                aria-hidden="true"
                className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_18%,rgba(34,211,238,0.08),transparent_34%),radial-gradient(circle_at_80%_65%,rgba(139,92,246,0.07),transparent_30%),#020617]"
            >
                {enabled && (
                    <Canvas
                        camera={{
                            position: [0, 0, 7],
                            fov: 45,
                            near: 0.1,
                            far: 100,
                        }}
                        dpr={mobile ? [1, 1.25] : [1, 1.75]}
                        frameloop="always"
                        gl={{
                            antialias: !mobile,
                            alpha: true,
                            powerPreference: "high-performance",
                        }}
                        fallback={null}
                    >
                        <AudioScene
                            scrollProgress={scrollYProgress}
                            reducedMotion={reducedMotion}
                            mobile={mobile}
                        />
                    </Canvas>
                )}
            </div>

            <div className="relative z-[1]">{children}</div>
        </div>
    );
}