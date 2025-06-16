"use client";

import { Container } from "./ui/container";
import { ScrollReveal } from "./animations/scroll-reveal";
import { HoverScale } from "./animations/hover-scale";
import { motion } from "framer-motion";

const services = [
    {
        title: "Software outsourcing service",
        description:
            "Our software solution is tailored specifically to your demand, which is applicable for both traditional and blockchain practices.",
        link: "/software-outsourcing",
        linkText: "View our Portfolio",
    },
    {
        title: "Gamify & Metaverse",
        description:
            "Unlock new engagement with gamification in banking and loyalty programs. Combining metaverse experiences with real-world utility, we bring immersive, creative ecosystems that drive customer interaction and long-term value.",
    },
    {
        title: "Decentralized Financial Solution & Web3",
        description:
            "All-in-one crypto platform for communication, asset management, and idea sharing. We actively support Web3 innovation to make decentralized tech more practical and impactful.",

    },
    {
        title: "AI Integration & Customization",
        description:
            "Smart, customizable AI to automate tasks, deliver insights, and enhance digital experiences across all of your ecosystem.",
    },
    {
        title: "Core Banking Advisory & Optimization",
        description:
            "We support banks in modernizing their core systems to enhance operational efficiency and agility. Our advisory services provide expert guidance to streamline processes, increase throughput, reduce costs, and strengthen security.",
    },
];

export default function ServicesSection() {
    return (
        <div className="bg-white py-20" id="services">
            <Container maxWidth="xl">
                <div className="flex flex-col md:flex-row">
                    <ScrollReveal direction="left" className="md:w-1/3 mb-10 md:mb-0">
                        <div>
                            <motion.h3
                                className="section-subtitle"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                WHAT WE
                            </motion.h3>
                            <motion.h2
                                className="section-title text-5xl md:text-6xl font-bold text-primary"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                PROVIDE
                            </motion.h2>
                        </div>
                    </ScrollReveal>

                    <div className="md:w-2/3 grid grid-cols-1 gap-10">
                        {services.map((service, index) => (
                            <ScrollReveal
                                key={index}
                                direction="right"
                                delay={0.1 * index}
                            >
                                <motion.div
                                    className="border-t pt-6"
                                    whileHover={{
                                        backgroundColor: "rgba(192, 170, 226, 0.05)",
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <div className="text-xl font-semibold text-primary mb-2">
                                        {service.title}
                                    </div>
                                    <div className="text-muted-foreground">
                                        {service.description}
                                        {service.link && (
                                            <HoverScale>
                                                <a
                                                    href={service.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-primary ml-1 hover:underline"
                                                >
                                                    {service.linkText}
                                                </a>
                                            </HoverScale>
                                        )}
                                    </div>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}
