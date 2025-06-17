"use client";

import { Container } from "./ui/container";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "./animations/scroll-reveal";
import { HoverScale } from "./animations/hover-scale";
import { useTranslations } from "next-intl";

export default function JoinSection() {
    const t = useTranslations("join");

    return (
        <div className="relative py-20 bg-primary">
            <div className="absolute inset-0 bg-[url('https://ext.same-assets.com/422046658/93490173.png')] bg-cover bg-center opacity-10" />

            <Container maxWidth="xl" className="relative z-10">
                <ScrollReveal direction="up" className="max-w-3xl mx-auto text-center">
                    <motion.p
                        className="uppercase font-medium tracking-wide text-xl mb-4 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {t("title")}
                    </motion.p>
                    <motion.p
                        className="text-lg md:text-xl mb-8 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {t("description")}
                    </motion.p>
                    <HoverScale scale={1.1}>
                        <Link href="/jobs">
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-transparent border-white text-white hover:bg-white/10"
                            >
                                {t("cta")}
                            </Button>
                        </Link>
                    </HoverScale>
                </ScrollReveal>
            </Container>
        </div>
    );
}
