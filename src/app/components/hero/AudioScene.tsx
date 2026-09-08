"use client";

import { Line } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type AudioSceneProps = {
    scrollProgress?: number;
};

type WaveProps = {
    scrollProgress: number;
};

function seededRandom(seed: number) {
    const value = Math.sin(seed * 12.9898) * 43758.5453;
    return value - Math.floor(value);
}

function AudioWave({ scrollProgress }: WaveProps) {
    const groupRef = useRef<THREE.Group>(null);

    const {
        wave,
        particles,
        particleColors,
    } = useMemo(() => {
        const waveCount = 4;
        const pointsPerWave = 180;

        const wave = Array.from({ length: waveCount }, (_, waveIndex) => {
            const points: THREE.Vector3[] = [];

            for (let i = 0; i < pointsPerWave; i++) {
                const t = i / (pointsPerWave - 1);

                const x = (t - 0.5) * 15;

                const envelope =
                    0.25 +
                    Math.pow(
                        Math.sin(t * Math.PI),
                        1.4
                    ) * 1.15;

                const primary =
                    Math.sin(
                        t * Math.PI * 8 +
                            waveIndex * 0.7
                    ) * 0.55;

                const secondary =
                    Math.sin(
                        t * Math.PI * 17 -
                            waveIndex * 0.4
                    ) * 0.18;

                const y =
                    (primary + secondary) *
                    envelope;

                const z =
                    (waveIndex - 1.5) * 0.55 +
                    Math.sin(t * Math.PI * 4) *
                        0.15;

                points.push(
                    new THREE.Vector3(x, y, z)
                );
            }

            return points;
        });

        const particleCount = 900;

        const particles = new Float32Array(
            particleCount * 3
        );

        const particleColors = new Float32Array(
            particleCount * 3
        );

        const cyan = new THREE.Color("#22d3ee");
        const violet = new THREE.Color("#8b5cf6");
        const color = new THREE.Color();

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;

            const radius =
                seededRandom(i * 4) * 7 + 1;

            const angle =
                seededRandom(i * 4 + 1) * Math.PI * 2;

            particles[i3] =
                Math.cos(angle) * radius;

            particles[i3 + 1] =
                (seededRandom(i * 4 + 2) - 0.5) *
                5;

            particles[i3 + 2] =
                (seededRandom(i * 4 + 3) - 0.5) *
                7;

            color.lerpColors(
                cyan,
                violet,
                seededRandom(i * 4 + 4)
            );

            particleColors[i3] = color.r;
            particleColors[i3 + 1] = color.g;
            particleColors[i3 + 2] = color.b;
        }

        return {
            wave,
            particles,
            particleColors,
        };
    }, []);

    useFrame((state) => {
        if (!groupRef.current) return;

        /*
         * Gentle autonomous movement.
         * Scroll adds the major cinematic movement.
         */

        const time = state.clock.elapsedTime;

        groupRef.current.rotation.y =
            THREE.MathUtils.lerp(
                groupRef.current.rotation.y,
                scrollProgress * 0.65 +
                    Math.sin(time * 0.25) * 0.04,
                0.045
            );

        groupRef.current.rotation.x =
            THREE.MathUtils.lerp(
                groupRef.current.rotation.x,
                scrollProgress * 0.45,
                0.045
            );

        groupRef.current.position.z =
            THREE.MathUtils.lerp(
                groupRef.current.position.z,
                scrollProgress * -3.2,
                0.045
            );

        groupRef.current.position.y =
            THREE.MathUtils.lerp(
                groupRef.current.position.y,
                scrollProgress * 1.1,
                0.045
            );
    });

    return (
        <group ref={groupRef}>
            {/* =============================================
                MAIN AUDIO WAVES
            ============================================== */}

            {wave.map((points, index) => {
                return (
                    <Line
                        key={index}
                        points={points}
                        color={
                            index % 2 === 0
                                ? "#22d3ee"
                                : "#8b5cf6"
                        }
                        transparent
                        opacity={
                            0.35 +
                            (index === 1 ? 0.3 : 0)
                        }
                        lineWidth={1}
                        blending={THREE.AdditiveBlending}
                        depthWrite={false}
                    />
                );
            })}

            {/* =============================================
                PARTICLE FIELD
            ============================================== */}

            <points>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[
                            particles,
                            3,
                        ]}
                    />

                    <bufferAttribute
                        attach="attributes-color"
                        args={[
                            particleColors,
                            3,
                        ]}
                    />
                </bufferGeometry>

                <pointsMaterial
                    size={0.025}
                    vertexColors
                    transparent
                    opacity={0.6}
                    depthWrite={false}
                    blending={
                        THREE.AdditiveBlending
                    }
                    sizeAttenuation
                />
            </points>

            {/* =============================================
                CENTRAL ENERGY CORE
            ============================================== */}

            <mesh position={[0, 0, 0]}>
                <sphereGeometry
                    args={[0.12, 16, 16]}
                />

                <meshBasicMaterial
                    color="#67e8f9"
                    transparent
                    opacity={0.9}
                />
            </mesh>

            <pointLight
                position={[0, 0, 0]}
                color="#22d3ee"
                intensity={8}
                distance={7}
                decay={2}
            />
        </group>
    );
}

function CameraRig({
    scrollProgress,
}: {
    scrollProgress: number;
}) {
    useFrame(({ camera }) => {
        /*
         * The camera physically travels into
         * the audio field as the user scrolls.
         */

        const targetZ = THREE.MathUtils.lerp(
            7,
            3.2,
            scrollProgress
        );

        const targetX = THREE.MathUtils.lerp(
            0,
            -1.1,
            scrollProgress
        );

        const targetY = THREE.MathUtils.lerp(
            0,
            0.5,
            scrollProgress
        );

        camera.position.x = THREE.MathUtils.lerp(
            camera.position.x,
            targetX,
            0.05
        );

        camera.position.y = THREE.MathUtils.lerp(
            camera.position.y,
            targetY,
            0.05
        );

        camera.position.z = THREE.MathUtils.lerp(
            camera.position.z,
            targetZ,
            0.05
        );

        camera.lookAt(
            0,
            scrollProgress * 0.4,
            0
        );
    });

    return null;
}

function Scene({
    scrollProgress,
}: AudioSceneProps) {
    return (
        <>
            <CameraRig
                scrollProgress={scrollProgress ?? 0}
            />

            <AudioWave
                scrollProgress={scrollProgress ?? 0}
            />

            <ambientLight intensity={0.08} />
        </>
    );
}

export function AudioScene({
    scrollProgress = 0,
}: AudioSceneProps) {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
        >
            <Canvas
                camera={{
                    position: [0, 0, 7],
                    fov: 45,
                    near: 0.1,
                    far: 100,
                }}
                dpr={[1, 1.75]}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference:
                        "high-performance",
                }}
                fallback={null}
            >
                <Scene
                    scrollProgress={
                        scrollProgress
                    }
                />
            </Canvas>
        </div>
    );
}