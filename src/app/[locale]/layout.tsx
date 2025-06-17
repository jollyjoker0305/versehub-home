import { Inter } from "next/font/google";
import "../globals.css";
import { LanguageProvider } from "@/components/language-provider";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import type { Metadata } from 'next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'VerseHub',
  description: 'VerseHub - Technology Solutions Provider',
  icons: {
    icon: '/versehub_favicon.png',
    shortcut: '/versehub_favicon.png',
    apple: '/versehub_favicon.png',
  },
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "vi" }];
}

export default async function RootLayout({children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    // <html lang={locale}>
    //   <head>

    //   </head>
      // <body suppressHydrationWarning className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </NextIntlClientProvider>
      // </body>
    // </html>
  );
} 