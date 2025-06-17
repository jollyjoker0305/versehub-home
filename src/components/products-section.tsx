"use client";

import { Container } from "./ui/container";
import { ScrollReveal } from "./animations/scroll-reveal";
import { motion } from "framer-motion";

const products = [
    {
        name: "BeFitter",
        logo: "/images/products/befitter.png",
        link: "https://befitter.io/",
    },
    {
        name: "NextVerse",
        logo: "/images/products/nextverse.png",
        link: "http://nextverse.org",
    },
    {
        name: "CowItUp",
        logo: "/images/products/cowitup.png",
        link: "/cowItUp",
    },
    {
        name: "VerseHub Network Scan",
        logo: "/images/products/network-scan.png",
        link: "https://blockscout.versehub.io/",
    },
    {
        name: "VerseHub Network Bridge",
        logo: "/images/products/network-bridge.png",
        link: "http://Bridge.versehub.io",
    },
    {
        name: "Penpal NFT Collection",
        logo: "/images/products/penpal.png",
        link: "http://penpalnft.com",
    },
];

export default function ProductsSection() {
    return (
        <div className="bg-[#f4f9fb] py-20" id="products">
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
                            PRODUCTS
                        </motion.h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <ScrollReveal key={index} direction="up" delay={0.1 * index}>
                            <motion.a
                                href={product.link}
                                target="_blank"
                                rel="noreferrer"
                                className="product-logo rounded-md transition-all hover:shadow-md"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <img
                                    src={product.logo}
                                    alt={product.name}
                                    className="max-h-16 max-w-full"
                                />
                            </motion.a>
                        </ScrollReveal>
                    ))}
                </div>
            </Container>
        </div>
    );
}
