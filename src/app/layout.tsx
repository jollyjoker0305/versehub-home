import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "VerseHub - Bringing Digital Technology to Lives and Businesses",
    description: "We bring Digital technology into individual lives and businesses",
    keywords: ["technology", "versehub", "digital", "web3", "banking", "crypto"],
    icons: {
        icon: "/favicon.ico",
    },
    openGraph: {
        title: "VerseHub - Bringing Digital Technology to Lives and Businesses",
        description: "We bring digital technology into individual lives and businesses",
        url: "https://VerseHub.io", // optional
        siteName: "VerseHub",
        images: [
            {
                url: "/og-image.jpg", // path relative to /public
                width: 1200,
                height: 630,
                alt: "VerseHub Open Graph Image",
            },
        ],
        type: "website",
    },
};
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} scroll-smooth`}>
        <body suppressHydrationWarning className="antialiased">
        {children}
        </body>
        </html>
    );
}
