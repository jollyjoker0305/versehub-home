"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView, Variant } from "framer-motion";

type ScrollRevealProps = {
    children: ReactNode;
    direction?: "up" | "down" | "left" | "right";
    duration?: number;
    delay?: number;
    once?: boolean;
    className?: string;
};

const variants = {
    hidden: {
        opacity: 0,
        x: 0,
        y: 0,
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
    },
};

const getDirectionVariant = (
    direction: ScrollRevealProps["direction"]
): { hidden: Variant } => {
    switch (direction) {
        case "up":
            return { hidden: { ...variants.hidden, y: 50 } };
        case "down":
            return { hidden: { ...variants.hidden, y: -50 } };
        case "left":
            return { hidden: { ...variants.hidden, x: -50 } };
        case "right":
            return { hidden: { ...variants.hidden, x: 50 } };
        default:
            return { hidden: { ...variants.hidden, y: 50 } };
    }
};

export function ScrollReveal({
                                 children,
                                 direction = "up",
                                 duration = 0.5,
                                 delay = 0,
                                 once = true,
                                 className = "",
                             }: ScrollRevealProps) {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: 0.3 });
    const directionVariant = getDirectionVariant(direction);

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else if (!once) {
            controls.start("hidden");
        }
    }, [controls, isInView, once]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { ...directionVariant.hidden },
                visible: {
                    ...variants.visible,
                    transition: {
                        duration,
                        delay,
                        ease: "easeOut",
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
