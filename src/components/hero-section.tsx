"use client";

import { Container } from "./ui/container";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "./animations/scroll-reveal";
import { HoverScale } from "./animations/hover-scale";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/homepage-video-bg.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <Container className="relative z-10 py-20 md:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal direction="up" delay={0.3} duration={0.8}>
            <h1 className="text-left text-4xl max-w-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t("title")}
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.5}>
            <HoverScale>
              <Link href="#contact"  className="mt-12" >
                <Button size="lg" className="mt-12 bg-primary hover:bg-primary/90 text-white">
                  {t("cta")}
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
