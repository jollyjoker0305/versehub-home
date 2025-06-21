"use client";

import { Container } from "./ui/container";
import { ScrollReveal } from "./animations/scroll-reveal";
import { HoverScale } from "./animations/hover-scale";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLanguage } from "./language-provider";

export default function ServicesSection() {
    const t = useTranslations("services");
    const { language, setLanguage } = useLanguage();
    const services = [
        {
            key: "outsourcing",
            link: `/${language}/software-outsourcing`,
        },
        {
            key: "gamify",
        },
        {
            key: "web3",
        },
        {
            key: "ai",
        },
        {
            key: "enterprise",
        },
    ];

    return (
        <div className="bg-white py-20" id="services">
            <Container maxWidth="xl">
                <div className="flex flex-col md:flex-row">
                <ScrollReveal direction="up">
                    <div className="mb-12 mr-8">
                        <motion.h3
                            className="section-subtitle whitespace-nowrap"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                         {t("our")}
                        </motion.h3>
                        <motion.h2
                            className="whitespace-nowrap section-title text-5xl md:text-6xl font-bold text-primary"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                             {t("service")}
                            </motion.h2>
                    </div>
                </ScrollReveal>
                    <div className="md:w-3/3 space-y-12">
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
                                        {t(`items.${service.key}.title`)}
                                    </div>
                                    <div className="text-muted-foreground">
                                        {t(`items.${service.key}.description`)}
                                        {service.link && (
                                            <HoverScale>
                                                <a
                                                    href={service.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-primary ml-1 hover:underline"
                                                >
                                                    {t(`items.${service.key}.link`)}
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
