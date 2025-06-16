"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Jobs", href: "/jobs" },
    { label: "Get in touch", href: "#contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
            }`}
        >
            <Container>
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center">
                        <img
                            src="https://ext.same-assets.com/422046658/919375268.png"
                            alt="VerseHub Logo"
                            className="h-14 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-foreground hover:text-primary/80 font-medium transition-colors relative group"
                            >
                                {link.label}
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="open drawer"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>
            </Container>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed inset-0 bg-white z-40 pt-20 md:hidden">
                    <Container>
                        <div className="flex flex-col space-y-4 py-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-foreground hover:text-primary font-medium text-lg py-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </Container>
                </div>
            )}
        </header>
    );
}