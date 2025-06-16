"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function JobsPage() {
    const jobs = [
        {
            title: "Blockchain Developer",
            type: "Full-time",
            location: "Hanoi, Vietnam",
            description: "We are looking for a Blockchain Developer with experience in Solidity and smart contract development.",
        },
        {
            title: "Frontend Developer",
            type: "Full-time",
            location: "Remote",
            description: "Seeking a Frontend Developer with React experience to join our growing team.",
        },
        {
            title: "Web3 UX Designer",
            type: "Full-time",
            location: "Hanoi, Vietnam",
            description: "Join our team as a UX Designer focused on creating intuitive interfaces for Web3 applications.",
        },
    ];

    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow pt-32 pb-20 bg-[#f4f9fb]">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
                            Join Our Team
                        </h1>
                        <p className="text-xl text-muted-foreground mb-12">
                            Excellent products need excellent people. Our pioneering team is looking for new members to join the fleet.
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
                                    <Button size="sm">Apply Now</Button>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-muted-foreground mb-4">
                                Don't see a position that fits your skills?
                            </p>
                            <Link href="#contact">
                                <Button variant="outline">Contact Us</Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer />
        </main>
    );
}
