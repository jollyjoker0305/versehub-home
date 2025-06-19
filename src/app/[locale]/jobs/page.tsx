"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import { useLanguage } from "@/components/language-provider";

export default function JobsPage() {
    const t = useTranslations('jobs');
const {language} = useLanguage();
    const jobs = [
        {
            title: t('positions.blockchain.title'),
            type: t('positions.blockchain.type'),
            location: t('positions.blockchain.location'),
            description: t('positions.blockchain.description'),
        },
        {
            title: t('positions.frontend.title'),
            type: t('positions.frontend.type'),
            location: t('positions.frontend.location'),
            description: t('positions.frontend.description'),
        },
        {
            title: t('positions.web3.title'),
            type: t('positions.web3.type'),
            location: t('positions.web3.location'),
            description: t('positions.web3.description'),
        },
    ];

    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow pt-32 pb-20 bg-[#f4f9fb]">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
                            {t('title')}
                        </h1>
                        <p className="text-xl text-muted-foreground mb-12">
                            {t('description')}
                        </p>

                        <div className="space-y-6">
                            {jobs.map((job, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-lg shadow-sm border border-border"
                                >
                                    <h2 className="text-2xl font-semibold text-primary mb-2">
                                        {job.title}
                                    </h2>
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="bg-secondary/40 text-primary px-3 py-1 rounded-full text-sm">
                                            {job.type}
                                        </span>
                                        <span className="text-muted-foreground text-sm">
                                            {job.location}
                                        </span>
                                    </div>
                                    <p className="mb-6 text-muted-foreground">
                                        {job.description}
                                    </p>
                                    <Link href={"/"+language + "/#contact"}>

                                    <Button size="sm">{t('apply')}</Button>
                                    </Link>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-muted-foreground mb-4">
                                {t('noPosition')}
                            </p>
                            <Link href={"/"+language + "/#contact"}>
                                <Button variant="outline">{t('contactUs')}</Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer />
        </main>
    );
}
