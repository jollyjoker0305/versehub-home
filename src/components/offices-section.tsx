"use client";

import { Container } from "./ui/container";
import { ScrollReveal } from "./animations/scroll-reveal";
import { motion } from "framer-motion";

const offices = [
    {
        country: "Hanoi Headquarter",
        status: "Vietnam",
        image: "/images/vn.png",
    },
    {
        country: "HCM city branch",
        status: "Vietnam",
        image: "/images/vn.png",
    },
];

export default function OfficesSection() {
    return (
        <div className="bg-white py-20">
            <Container maxWidth="xl">
                <ScrollReveal direction="up">
                    <div className="mb-12">
                        <motion.h3
                            className="section-subtitle"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            OUR
                        </motion.h3>
                        <motion.h2
                            className="section-title text-5xl md:text-6xl font-bold text-primary"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            OFFICES
                        </motion.h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {offices.map((office, index) => (
                        <ScrollReveal
                            key={index}
                            direction={index % 2 === 0 ? "left" : "right"}
                            delay={0.3 * index}
                        >
                            <motion.div
                                className="flex flex-col items-center"
                                whileHover={{ y: -10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="w-full max-w-xs mb-6 overflow-hidden rounded-lg">
                                    <motion.img
                                        src={office.image}
                                        alt={office.country}
                                        className="w-full"
                                        initial={{ scale: 1 }}
                                        whileHover={{
                                            scale: 1.1,
                                            transition: { duration: 1.2 }
                                        }}
                                    />
                                </div>
                                <motion.p
                                    className="text-xl font-medium text-foreground"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.4 + 0.2 * index }}
                                >
                                    {office.country}
                                </motion.p>
                                <motion.p
                                    className="text-muted-foreground"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.5 + 0.2 * index }}
                                >
                                    {office.status}
                                </motion.p>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </Container>
        </div>
    );
}
