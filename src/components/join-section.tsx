"use client";

import { Container } from "./ui/container";
import { Button } from "./ui/button";
import Link from "next/link";
import { ScrollReveal } from "./animations/scroll-reveal";
import { HoverScale } from "./animations/hover-scale";
import { motion } from "framer-motion";

export default function JoinSection() {
    return (
        <div className="py-20 bg-primary text-white overflow-hidden relative">
            {/* Animated background particles */}
            <div className="absolute inset-0 z-0">
                {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white/10"
                        suppressHydrationWarning
                        style={{
                            width: Math.random() * 30 + 10,
                            height: Math.random() * 30 + 10,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, Math.random() * 20 - 10, 0],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <Container maxWidth="xl" className="relative z-10">
                <ScrollReveal direction="up" className="max-w-3xl mx-auto text-center">
                    <motion.p
                        className="uppercase font-medium tracking-wide text-xl mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        JOIN OUR JOURNEY
                    </motion.p>
                    <motion.p
                        className="text-lg md:text-xl mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Excellent products need excellent people. Our pioneering team is looking
                        for new members to join the fleet.
                    </motion.p>
                    <HoverScale scale={1.1}>
                        <Link href="/jobs">
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-transparent border-white text-white hover:bg-white/10"
                            >
                                APPLY NOW
                            </Button>
                        </Link>
                    </HoverScale>
                </ScrollReveal>
            </Container>
        </div>
    );
}
