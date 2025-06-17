"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { LanguageSwitcher } from "./language-switcher";
import { useTranslations } from "next-intl";
import { useLanguage } from "./language-provider";

export default function Header() {
    const { language, setLanguage } = useLanguage();

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const t = useTranslations("navigation");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        // { href: "/", label: t("home") },
        { href: "/" +language + "#services", label: t("services") },
        { href: "/" +language + "#products", label: t("products") },
        // { href: "#offices", label: t("offices") },
        { href: "/" +language + "/jobs", label: t("jobs") },
        { href: "/" +language + "#contact", label: t("contact") },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? "bg-white shadow-md" : "bg-transparent"
            }`}
        >
            <Container>
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="relative h-12 w-48">
                        <Image
                            src="/logo_header.png"
                            alt="VerseHub"
                            fill
                            className="object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm font-medium transition-colors ${
                                    pathname === item.href
                                        ? "text-primary"
                                        : "text-muted-foreground hover:text-primary"
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <LanguageSwitcher />
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <nav className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-100">
                        <div className="flex flex-col space-y-4 p-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`text-base font-medium transition-colors py-2 ${
                                        pathname === item.href
                                            ? "text-primary"
                                            : "text-gray-700 hover:text-primary"
                                    }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-gray-100">
                                <LanguageSwitcher />
                            </div>
                        </div>
                    </nav>
                )}
            </Container>
        </header>
    );
}