"use client";

import { ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

interface HoverScaleProps extends MotionProps {
    children: ReactNode;
    scale?: number;
    className?: string;
}

export function HoverScale({
                               children,
                               scale = 1.05,
                               className = "",
                               ...props
                           }: HoverScaleProps) {
    return (
        <motion.div
            whileHover={{ scale }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}
