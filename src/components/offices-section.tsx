"use client";

import { Container } from "./ui/container";
import { ScrollReveal } from "./animations/scroll-reveal";
import { motion } from "framer-motion";

const offices = [
    {
        country: "Hanoi Headquarter",
        status: "Vietnam",
        image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='150' viewBox='0 0 300 150'%3E%3Cpath fill='%23c0aae2' d='M20,20 L280,20 L280,130 L20,130 Z'%3E%3C/path%3E%3Cpath fill='none' stroke='%236f42c1' stroke-width='1' d='M20,20 L50,10 L310,10 L280,20 M280,130 L310,120 L310,10 M20,130 L50,120 L310,120'%3E%3C/path%3E%3Cpath fill='none' stroke='%236f42c1' stroke-width='1' d='M50,40 L100,40 L100,90 L50,90 Z M125,40 L175,40 L175,90 L125,90 Z M200,40 L250,40 L250,90 L200,90 Z'%3E%3C/path%3E%3Ccircle fill='none' stroke='%236f42c1' stroke-width='1' cx='150' cy='30' r='8'%3E%3C/circle%3E%3C/svg%3E",
    },
    {
        country: "HCM city branch",
        status: "Vietnam",
        image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='150' viewBox='0 0 300 150'%3E%3Cpath fill='%23c0aae2' d='M20,20 L280,20 L280,130 L20,130 Z'%3E%3C/path%3E%3Cpath fill='none' stroke='%236f42c1' stroke-width='1' d='M120,130 L120,50 L180,50 L180,130 M140,50 L140,30 L160,30 L160,50'%3E%3C/path%3E%3Cpath fill='none' stroke='%236f42c1' stroke-width='1' d='M190,130 L190,80 L230,40 L270,80 L270,130'%3E%3C/path%3E%3Cpath fill='none' stroke='%236f42c1' stroke-width='1' d='M30,130 L30,60 L100,60 L100,130 M40,80 L90,80 M40,100 L90,100'%3E%3C/path%3E%3Crect fill='none' stroke='%236f42c1' stroke-width='1' x='230' y='100' width='10' height='10'%3E%3C/rect%3E%3C/svg%3E",
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
