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
    {
        name: "Game Tết 2024 for TPBank",
        logo: "/images/products/rongvut.png",
        link: "https://www.youtube.com/watch?v=_Gyzpl7Kp6o",
    },    {
        name: "Vòng quay độc đắc for TPBank",
        logo: "/images/products/vqdd.png",
        link: "https://www.facebook.com/reel/543267211754552",
    },    {
        name: "Game Tết 2025 for TPBank",
        logo: "/images/products/ransanqua.png",
        link: "https://tpb.vn/wps/portal/vni/khuyen-mai/detail-promotions/!ut/p/z1/jVLRUsIwEPyaPpa7thQ6vhUQFLGiUKF5YVIMpdImJQ2t_L1BZxwFETNzM5dk93YvFyAwB8JplSZUpYLTTO8j0lq0B1bTttAKHibXFvr9kf_YHXRsHCPMjgG3XfQDp98KXZ2Mm0D-w8czy8dL_GeIOhBVbn23T07NHKPJ31ozIEd6ntPTFR4H02AYOL2RewI47feSSKRNts-adC2YVSmrIeRC5noCE4i6Xw3eIAwvvYgeWfq63RIfyFJwxd4UzFURU75ZvFBFF4UUuTiM18CSmjWLy1Sxj_zbTaWDHTgpTwxMaM5MxZRpo-2aknKz1LHd0YObJBPx50_xeex4CRDJVkwy2dhJfbxWqiivDDQwa6zoksVCbBpLkRv4G2UtSm33JxKKPAz53tw8efXUu1fe3smSd_ecsA4!/dz/d5/L2dBISEvZ0FBIS9nQSEh/?fbclid=IwY2xjawLGD5dleHRuA2FlbQIxMABicmlkETFaQ1dYZjV0WERwbWZpVHBVAR7GTztyLqqlHehwqodNKNWFlwZ5WGqdWLCQYeTqhJEoXz1K67n04-GTl_QNtA_aem_jVWaqyeeC0i1TrxcHlBw6g",
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
