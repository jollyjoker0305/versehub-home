"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function ServicesPage() {
    const t = useTranslations('services');

    const services = [
        { 
            title: "Mobile App Development",
            icon: "📱",
            description: "Native and cross-platform mobile applications for iOS and Android"
        },
        { 
            title: "Gamify & Game Development",
            icon: "🎮",
            description: "2D/3D games and gamification solutions for various platforms"
        },
        { 
            title: "Website Development",
            icon: "🌐",
            description: "Modern, responsive websites and web applications"
        },
        { 
            title: "Web3/Blockchain Products",
            icon: "⛓️",
            description: "Decentralized applications and blockchain solutions"
        },
        { 
            title: "Consultancy & IT Outsourcing",
            icon: "💡",
            description: "Expert IT consulting and outsourcing services"
        },
    ];

    const experiences = [
        { title: t('whyVerseHub.experience.items.game.title'), years: "10+ years" },
        { title: t('whyVerseHub.experience.items.web.title'), years: "8+ years" },
        { title: t('whyVerseHub.experience.items.banking.title'), years: "7+ years" },
        { title: t('whyVerseHub.experience.items.ecommerce.title'), years: "3+ years" },
        { title: t('whyVerseHub.experience.items.web3.title'), years: "3+ years" },
    ];

    const teamStats = [
        { 
            title: t('team.stats.developers'), 
            count: "x20",
            icon: "👨‍💻"
        },
        { 
            title: t('team.stats.analysts'), 
            count: "x5",
            icon: "📊"
        },
        { 
            title: t('team.stats.designers'), 
            count: "x2",
            icon: "🎨"
        },
        { 
            title: t('team.stats.product'), 
            count: "x1",
            icon: "📋"
        },
        { 
            title: t('team.stats.architects'), 
            count: "x2",
            icon: "💻"
        }
    ];

    const caseStudies = [
        { 
            title: t('caseStudies.items.befitter.title'), 
            description: t('caseStudies.items.befitter.description'),
            logo: "/images/products/befitter.png",
            link: "https://befitter.io/"
        },
        { 
            title: t('caseStudies.items.nextverse.title'), 
            description: t('caseStudies.items.nextverse.description'),
            logo: "/images/products/nextverse.png",
            link: "http://nextverse.org"
        },
        { 
            title: t('caseStudies.items.penpal.title'), 
            description: t('caseStudies.items.penpal.description'),
            logo: "/images/products/penpal.png",
            link: "http://penpalnft.com"
        },
        { 
            title: t('caseStudies.items.cowitup.title'), 
            description: t('caseStudies.items.cowitup.description'),
            logo: "/images/products/cowitup.png",
            link: "/cowItUp"
        },
        { 
            title: t('caseStudies.items.more.title'), 
            description: t('caseStudies.items.more.description'),
            logo: "/images/products/network-scan.png",
            link: "#"
        }
    ];

    const techStack = {
        backend: [
            { name: "Java", icon: "/tech/java.webp" },
            { name: "Node.js", icon: "/tech/nodejs.webp" },
            { name: "Spring", icon: "/tech/spring.jpg" },
            { name: "Oracle Flexcube", icon: "/tech/oracle.png" },
            { name: "Intellect", icon: "/tech/intellect.jpg" },
            { name: "Golang", icon: "/tech/golang.webp" }
        ],
        frontend: [
            { name: "React", icon: "/tech/reactjs.webp" },
            { name: "Next.js", icon: "/tech/nextjs.webp" }
        ],
        data: [
            { name: "PostgreSQL", icon: "/tech/postgreSQL.webp" },
            { name: "MySQL", icon: "/tech/mysql.webp" },
            { name: "Elasticsearch", icon: "/tech/elastic.webp" },
            { name: "Grafana", icon: "/tech/grafand.webp" },
        ],
        cloud: [
            { name: "AWS", icon: "/tech/aws.webp" },
            { name: "Google Cloud", icon: "/tech/googleCloud.webp" },
            { name: "Digital Ocean", icon: "/tech/digitalOcean.webp" },
            { name: "Vultr", icon: "/tech/vultr.webp" }
        ],
        highTech: [
            { name: "AI", icon: "/tech/ai.jpg" },
            { name: "Blockchain", icon: "/tech/blockchain.webp" },
            { name: "VR/AR", icon: "/tech/vr.webp" },
            { name: "SiBS", icon: "/tech/sibs.svg" }
        ],
        mobile: [
            { name: "iOS", icon: "/tech/objc.webp" },
            { name: "Android", icon: "/tech/kotlin.webp" },
            { name: "Flutter", icon: "/tech/flutter.webp" }
        ],
        game: [
            { name: "Unity", icon: "/tech/unity.webp" },
            { name: "Unreal", icon: "/tech/unreal.webp" },
            { name: "Cocos2d-x", icon: "/tech/cocos.webp" }
        ]
    };

    const renderTechStack = (techs: { name: string; icon: string }[]) => (
        <div className="flex flex-col gap-1">
            {techs.map((tech, index) => (
                <div key={index} className="flex flex-col items-center">
                    <div className="w-24 h-24 mb-2 relative">
                        <img 
                            src={tech.icon} 
                            alt={tech.name} 
                            className="w-full h-full object-contain"
                            // onError={(e) => {
                                // Fallback to SVG if PNG fails to load
                                // const imgElement = e.target as HTMLImageElement;
                                // imgElement.src = tech.icon.replace('.png', '.svg');
                            // }}
                        />
                    </div>
                    {/* <span className="text-sm text-foreground">{tech.name}</span> */}
                </div>
            ))}
        </div>
    );

    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow pt-32 pb-20 bg-[#f4f9fb]">
                <Container>
                    {/* About Us Section */}
                    <section className="max-w-4xl mx-auto mb-20">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
                            {t('about.title')}
                        </h1>
                        <p className="text-xl text-muted-foreground mb-6">
                            {t('about.description1')}
                        </p>
                        <p className="text-xl text-muted-foreground mb-6">
                            {t('about.description2')}
                        </p>
                    </section>

                    {/* What We Do Section */}
                    <section className="max-w-4xl mx-auto mb-20">
                        <h2 className="text-3xl font-bold text-primary mb-8">{t('whatWeDo.title')}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {services.map((service, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-border">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-4xl">{service.icon}</span>
                                        <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Why VerseHub Section */}
                    <section className="max-w-4xl mx-auto mb-20">
                        <h2 className="text-3xl font-bold text-primary mb-8">{t('whyVerseHub.title')}</h2>
                        
                        {/* Experience Section */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-semibold text-primary mb-6">{t('whyVerseHub.experience.title')}</h3>
                            <p className="text-xl font-bold mb-6">{t('whyVerseHub.experience.years')}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {experiences.map((exp, index) => (
                                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-border">
                                        <h4 className="text-lg font-semibold text-primary">{exp.title}</h4>
                                        <p className="text-muted-foreground">{exp.years}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-6 text-muted-foreground">{t('whyVerseHub.experience.team')}</p>
                        </div>

                        {/* Customization Section */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-semibold text-primary mb-6">{t('whyVerseHub.customization.title')}</h3>
                            <p className="text-muted-foreground">
                                {t('whyVerseHub.customization.description')}
                            </p>
                        </div>

                        {/* Cost Section */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-semibold text-primary mb-6">{t('whyVerseHub.cost.title')}</h3>
                            <p className="text-muted-foreground">
                                {t('whyVerseHub.cost.description')}
                            </p>
                        </div>
                    </section>

                    {/* Our Team Section */}
                    <section className="max-w-4xl mx-auto mb-20">
                        <h2 className="text-3xl font-bold text-primary mb-8">{t('team.title')}</h2>
                        <p className="text-xl text-muted-foreground mb-12">
                            {t('team.description')}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {teamStats.map((stat, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-border text-center">
                                    <div className="text-4xl mb-4">{stat.icon}</div>
                                    <p className="text-2xl font-bold text-primary mb-2">{stat.count}</p>
                                    <p className="text-muted-foreground">{stat.title}</p>
                                </div>
                            ))}
                        </div>

                        {/* Tech Stack Section */}
                        <div className="mt-12">
                            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Tech Stack</h3>
                            <div className="md:hidden space-y-6">
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
                                    <h4 className="text-lg font-semibold text-primary mb-4 text-center">Backend</h4>
                                    <div className="grid grid-cols-3 gap-4">
                                        {techStack.backend.map((tech, index) => (
                                            <div key={index} className="flex flex-col items-center">
                                                <div className="w-12 h-12 mb-2 relative">
                                                    <img 
                                                        src={tech.icon} 
                                                        alt={tech.name} 
                                                        className="w-full h-full object-contain"
                                                        // onError={(e) => {
                                                        //     const imgElement = e.target as HTMLImageElement;
                                                        //     imgElement.src = imgElement.src.replace('.png', '.webp');
                                                        // }}
                                                    />
                                                </div>
                                                <span className="text-sm text-muted-foreground text-center">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
                                    <h4 className="text-lg font-semibold text-primary mb-4 text-center">Frontend</h4>
                                    <div className="grid grid-cols-3 gap-4">
                                        {techStack.frontend.map((tech, index) => (
                                            <div key={index} className="flex flex-col items-center">
                                                <div className="w-12 h-12 mb-2 relative">
                                                    <img 
                                                        src={tech.icon} 
                                                        alt={tech.name} 
                                                        className="w-full h-full object-contain"
                                                        // onError={(e) => {
                                                        //     const imgElement = e.target as HTMLImageElement;
                                                        //     imgElement.src = tech.icon.replace('.png', '.svg');
                                                        // }}
                                                    />
                                                </div>
                                                <span className="text-sm text-muted-foreground text-center">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
                                    <h4 className="text-lg font-semibold text-primary mb-4 text-center">Data</h4>
                                    <div className="grid grid-cols-3 gap-4">
                                        {techStack.data.map((tech, index) => (
                                            <div key={index} className="flex flex-col items-center">
                                                <div className="w-12 h-12 mb-2 relative">
                                                    <img 
                                                        src={tech.icon} 
                                                        alt={tech.name} 
                                                        className="w-full h-full object-contain"
                                                        // onError={(e) => {
                                                        //     const imgElement = e.target as HTMLImageElement;
                                                        //     imgElement.src = tech.icon.replace('.png', '.svg');
                                                        // }}
                                                    />
                                                </div>
                                                <span className="text-sm text-muted-foreground text-center">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
                                    <h4 className="text-lg font-semibold text-primary mb-4 text-center">Cloud</h4>
                                    <div className="grid grid-cols-3 gap-4">
                                        {techStack.cloud.map((tech, index) => (
                                            <div key={index} className="flex flex-col items-center">
                                                <div className="w-12 h-12 mb-2 relative">
                                                    <img 
                                                        src={tech.icon} 
                                                        alt={tech.name} 
                                                        className="w-full h-full object-contain"
                                                        // onError={(e) => {
                                                        //     const imgElement = e.target as HTMLImageElement;
                                                        //     imgElement.src = tech.icon.replace('.png', '.svg');
                                                        // }}
                                                    />
                                                </div>
                                                <span className="text-sm text-muted-foreground text-center">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
                                    <h4 className="text-lg font-semibold text-primary mb-4 text-center">High Tech</h4>
                                    <div className="grid grid-cols-3 gap-4">
                                        {techStack.highTech.map((tech, index) => (
                                            <div key={index} className="flex flex-col items-center">
                                                <div className="w-12 h-12 mb-2 relative">
                                                    <img 
                                                        src={tech.icon} 
                                                        alt={tech.name} 
                                                        className="w-full h-full object-contain"
                                                        // onError={(e) => {
                                                        //     const imgElement = e.target as HTMLImageElement;
                                                        //     imgElement.src = tech.icon.replace('.png', '.svg');
                                                        // }}
                                                    />
                                                </div>
                                                <span className="text-sm text-muted-foreground text-center">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
                                    <h4 className="text-lg font-semibold text-primary mb-4 text-center">Mobile</h4>
                                    <div className="grid grid-cols-3 gap-4">
                                        {techStack.mobile.map((tech, index) => (
                                            <div key={index} className="flex flex-col items-center">
                                                <div className="w-12 h-12 mb-2 relative">
                                                    <img 
                                                        src={tech.icon} 
                                                        alt={tech.name} 
                                                        className="w-full h-full object-contain"
                                                        // onError={(e) => {
                                                        //     const imgElement = e.target as HTMLImageElement;
                                                        //     imgElement.src = tech.icon.replace('.png', '.svg');
                                                        // }}
                                                    />
                                                </div>
                                                <span className="text-sm text-muted-foreground text-center">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
                                    <h4 className="text-lg font-semibold text-primary mb-4 text-center">Game</h4>
                                    <div className="grid grid-cols-3 gap-4">
                                        {techStack.game.map((tech, index) => (
                                            <div key={index} className="flex flex-col items-center">
                                                <div className="w-12 h-12 mb-2 relative">
                                                    <img 
                                                        src={tech.icon} 
                                                        alt={tech.name} 
                                                        className="w-full h-full object-contain"
                                                        // onError={(e) => {
                                                        //     const imgElement = e.target as HTMLImageElement;
                                                        //     imgElement.src = tech.icon.replace('.png', '.svg');
                                                        // }}
                                                    />
                                                </div>
                                                <span className="text-sm text-muted-foreground text-center">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-white border-b border-border">
                                            <th className="p-4 text-center font-semibold text-primary">Backend</th>
                                            <th className="p-4 text-center font-semibold text-primary">Frontend</th>
                                            <th className="p-4 text-center font-semibold text-primary">Data</th>
                                            <th className="p-4 text-center font-semibold text-primary">Cloud</th>
                                            <th className="p-4 text-center font-semibold text-primary">High Tech</th>
                                            <th className="p-4 text-center font-semibold text-primary">Mobile</th>
                                            <th className="p-4 text-center font-semibold text-primary">Game</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white border-b border-border">
                                            <td className="p-4 align-top">{renderTechStack(techStack.backend)}</td>
                                            <td className="p-4 align-top">{renderTechStack(techStack.frontend)}</td>
                                            <td className="p-4 align-top">{renderTechStack(techStack.data)}</td>
                                            <td className="p-4 align-top">{renderTechStack(techStack.cloud)}</td>
                                            <td className="p-4 align-top">{renderTechStack(techStack.highTech)}</td>
                                            <td className="p-4 align-top">{renderTechStack(techStack.mobile)}</td>
                                            <td className="p-4 align-top">{renderTechStack(techStack.game)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Collaboration Process Section */}
                    <section className="max-w-4xl mx-auto mb-20">
                        <h2 className="text-3xl font-bold text-primary mb-8">{t("howto.title")}</h2>
                        <div className="relative">
                            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2 z-0"></div>
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-4 relative z-10">
                                <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-border text-center relative group hover:shadow-md transition-shadow">
                                    <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-2 md:mb-4 shadow-md group-hover:scale-110 transition-transform text-sm md:text-base">1</div>
                                    <p className="font-semibold text-sm md:text-base">{t("howto.items.requirement.title")}</p>
                                </div>
                                <div className="hidden md:block absolute top-1/2 left-[20%] -translate-y-1/2 z-10">
                                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                                <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-border text-center relative group hover:shadow-md transition-shadow">
                                    <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-2 md:mb-4 shadow-md group-hover:scale-110 transition-transform text-sm md:text-base">2</div>
                                    <p className="font-semibold text-sm md:text-base">{t("howto.items.analysis.title")}</p>
                                </div>
                                <div className="hidden md:block absolute top-1/2 left-[40%] -translate-y-1/2 z-10">
                                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                                <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-border text-center relative group hover:shadow-md transition-shadow">
                                    <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-2 md:mb-4 shadow-md group-hover:scale-110 transition-transform text-sm md:text-base">3</div>
                                    <p className="font-semibold text-sm md:text-base">{t("howto.items.proposal.title")}</p>
                                </div>
                                <div className="hidden md:block absolute top-1/2 left-[60%] -translate-y-1/2 z-10">
                                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                                <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-border text-center relative group hover:shadow-md transition-shadow">
                                    <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-2 md:mb-4 shadow-md group-hover:scale-110 transition-transform text-sm md:text-base">4</div>
                                    <p className="font-semibold text-sm md:text-base">{t("howto.items.contract.title")}</p>
                                </div>
                                <div className="hidden md:block absolute top-1/2 left-[80%] -translate-y-1/2 z-10">
                                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                                <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-border text-center relative group hover:shadow-md transition-shadow">
                                    <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-2 md:mb-4 shadow-md group-hover:scale-110 transition-transform text-sm md:text-base">5</div>
                                    <p className="font-semibold text-sm md:text-base">{t("howto.items.project.title")}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Case Studies Section */}
                    <section className="max-w-4xl mx-auto mb-20">
                        <h2 className="text-3xl font-bold text-primary mb-8">{t("caseStudies.title")}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {caseStudies.map((study, index) => (
                                <a
                                    key={index}
                                    href={study.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-white p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-16 h-16 relative">
                                            <img
                                                src={study.logo}
                                                alt={study.title}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-primary">{study.title}</h3>
                                            <p className="text-muted-foreground">{study.description}</p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-primary mb-8">{t("contact.title")}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <form className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Your name</label>
                                        <input type="text" className="w-full p-2 border rounded-md" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Your email</label>
                                        <input type="email" className="w-full p-2 border rounded-md" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Tell us how we can help</label>
                                        <textarea className="w-full p-2 border rounded-md" rows={4}></textarea>
                                    </div>
                                    <Button>Send Message</Button>
                                </form>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold mb-2">location</h3>
                                    <p className="text-muted-foreground">Hanoi, Vietnam</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">mail</h3>
                                    <p className="text-muted-foreground">info@versehub.io</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">phone</h3>
                                    <p className="text-muted-foreground">(+84) 866 174 689</p>
                                </div>
                                <div className="flex gap-4">
                                    <Link href="https://www.facebook.com/Versehub.io/" target="_blank">
                                        <Button variant="outline">Facebook</Button>
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/versehub/" target="_blank">
                                        <Button variant="outline">LinkedIn</Button>
                            </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>
            </div>
            <Footer />
        </main>
    );
}
