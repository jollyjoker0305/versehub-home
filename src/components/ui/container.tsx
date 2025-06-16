import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
    disableGutters?: boolean;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
    ({ className, children, maxWidth = "xl", disableGutters = false, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "mx-auto w-full",
                    {
                        "px-4 sm:px-6 lg:px-8": !disableGutters,
                        "max-w-screen-sm": maxWidth === "sm",
                        "max-w-screen-md": maxWidth === "md",
                        "max-w-screen-lg": maxWidth === "lg",
                        "max-w-screen-xl": maxWidth === "xl",
                        "max-w-screen-2xl": maxWidth === "2xl",
                        "max-w-full": maxWidth === "full",
                    },
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Container.displayName = "Container";

export { Container };
