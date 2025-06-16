"use client";

import { ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

interface FadeInProps extends MotionProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}

export function FadeIn({
                           children,
                           delay = 0,
                           duration = 0.5,
                           className = "",
                           ...props
                       }: FadeInProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration,
                delay,
                ease: "easeInOut",
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}
