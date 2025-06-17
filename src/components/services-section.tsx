"use client";

import { Container } from "./ui/container";
import { ScrollReveal } from "./animations/scroll-reveal";
import { motion } from "framer-motion";
import { useLanguage } from "./language-provider";

export default function ServicesSection() {
    const { language } = useLanguage();
    const services = [
        {
            title: "Mobile App Development",
            description: "We develop native and cross-platform mobile applications for iOS and Android using the latest technologies and best practices.",
            icon: "📱",
        },
        {
            title: "Website Development",
            description: "We create responsive, modern, and user-friendly websites using the latest web technologies and frameworks.",
            icon: "🌐",
        },
        {
            title: "Blockchain Development",
            description: "We build decentralized applications (dApps) and smart contracts using blockchain technologies.",
            icon: "⛓️",
        },
        {
            title: "UI/UX Design",
            description: "We design beautiful and intuitive user interfaces that provide the best user experience.",
            icon: "🎨",
        },
        {
            title: "DevOps",
            description: "We help you set up and maintain your development and deployment infrastructure.",
            icon: "🔄",
        },
        {
            title: "Quality Assurance",
            description: "We ensure your software meets the highest quality standards through comprehensive testing.",
            icon: "✅",
        },
    ];

    return (
        <div className="bg-white py-20" id="services">
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
                            SERVICES
                        </motion.h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ScrollReveal key={index} direction="up" delay={0.1 * index}>
                            <motion.div
                                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </Container>
        </div>
    );
}
