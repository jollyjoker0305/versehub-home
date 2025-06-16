"use client";

import { Button } from "./ui/button";
import { Container } from "./ui/container";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "./animations/fade-in";
import { ScrollReveal } from "./animations/scroll-reveal";
import { HoverScale } from "./animations/hover-scale";
import { useEffect, useState } from "react";

const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 0.5,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export default function HeroSection() {
    const [mouseMoveEnabled, setMouseMoveEnabled] = useState(true);

    useEffect(() => {
        // Disable mouse move effect on mobile devices
        const handleResize = () => {
            setMouseMoveEnabled(window.innerWidth >= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="relative min-h-screen flex items-center bg-white gradient-bg overflow-hidden">
            {/* Animated grid background */}
            <div className="absolute inset-0 z-0 opacity-30">
                <motion.div
                    className="w-full h-full grid grid-cols-12 grid-rows-10"
                    variants={gridVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {Array.from({ length: 120 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="border border-primary/20"
                            variants={itemVariants}
                        />
                    ))}
                </motion.div>
            </div>

            {/* Floating blockchain elements */}
            {mouseMoveEnabled && (
                <>
                    <motion.div
                        className="absolute w-40 h-40 rounded-lg border border-primary/20 top-1/4 left-1/4 z-0"
                        animate={{
                            x: [0, 20, 0],
                            y: [0, -20, 0],
                            rotate: [0, 5, 0],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            repeatType: "mirror",
                        }}
                    />
                    <motion.div
                        className="absolute w-60 h-60 rounded-lg border border-primary/20 bottom-1/4 right-1/3 z-0"
                        animate={{
                            x: [0, -30, 0],
                            y: [0, 20, 0],
                            rotate: [0, -5, 0],
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            repeatType: "mirror",
                        }}
                    />
                </>
            )}

            <Container className="relative z-10 py-20 md:py-32">
                <div className="max-w-3xl mx-auto text-center">
                    <FadeIn delay={0.3} duration={0.8}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                            Bring <span className="text-primary">digital technology</span> <br />
                            into individual lives and businesses.
                        </h1>
                    </FadeIn>

                    <ScrollReveal direction="up" delay={0.5}>
                        <HoverScale>
                            <Link href="#contact">
                                <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-white">
                                    START YOUR PROJECT
                                </Button>
                            </Link>
                        </HoverScale>
                    </ScrollReveal>

                    <motion.div
                        className="mt-12 flex justify-center"
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <img
                            src="https://ext.same-assets.com/422046658/93490173.png"
                            alt="Scroll down"
                            className="w-8 h-12"
                        />
                    </motion.div>
                </div>
            </Container>
        </div>
    );
}
