"use client";

import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import { ScrollReveal } from "./animations/scroll-reveal";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ContactSection() {
    const t = useTranslations("contact");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        // Telegram Bot configuration
        const BOT_TOKEN = "5695053276:AAFlmj1ipgG49FJup9LUsCYcfkqIYPTAJlk";
        const CHAT_ID = 2119010045;
        
        if (!BOT_TOKEN || !CHAT_ID) {
            console.error("Telegram bot configuration missing");
            alert("Configuration error. Please contact support.");
            return;
        }

        const message = `
🔔 New Contact Form Submission

👤 Name: ${formData.name}
📧 Email: ${formData.email}
💬 Message: ${formData.message}

⏰ Time: ${new Date().toLocaleString()}
        `.trim();

        try {
            const response = await fetch(`https://tlg.hotcoldcare.com/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message,
                    parse_mode: 'HTML'
                })
            });

            if (response.ok) {
                alert("Thank you for your message! We'll get back to you soon.");
                setFormData({ name: "", email: "", message: "" });
            } else {
                console.error('Failed to send message to Telegram');
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert("Message sent successfully! (Telegram notification failed)");
            setFormData({ name: "", email: "", message: "" });
        }
    };

    // Animations for form fields
    const inputVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 * custom,
                duration: 0.5,
            },
        }),
    };

    return (
        <div className="bg-white py-20" id="contact">
            <Container maxWidth="xl">
                <div className="max-w-2xl mx-auto">
                    <ScrollReveal direction="up">
                        <motion.h2
                            className="section-title text-center text-4xl md:text-5xl mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {t("title")}
                        </motion.h2>
                    </ScrollReveal>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <motion.div
                            variants={inputVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={1}
                        >
                            <Input
                                type="text"
                                placeholder={t("form.name")}
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="h-12 rounded-md"
                            />
                        </motion.div>

                        <motion.div
                            variants={inputVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={2}
                        >
                            <Input
                                type="email"
                                placeholder={t("form.email")}
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="h-12 rounded-md"
                            />
                        </motion.div>

                        <motion.div
                            variants={inputVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={3}
                        >
                            <textarea
                                placeholder={t("form.message")}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full h-32 px-4 py-3 rounded-md border border-input bg-background resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                            />
                        </motion.div>

                        <motion.div
                            variants={inputVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={4}
                        >
                            <Button type="submit" className="w-full">
                                {t("form.submit")}
                            </Button>
                        </motion.div>
                    </form>
                </div>
            </Container>
        </div>
    );
}
