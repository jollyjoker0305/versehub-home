"use client";

import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import { ScrollReveal } from "./animations/scroll-reveal";
import { motion } from "framer-motion";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // In a real implementation, you would send the form data to a server
        console.log("Form submitted:", formData);
        alert("Thank you for your message!");
        setFormData({ name: "", email: "", message: "" });
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
                            CONTACT US
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
                                placeholder="Your name"
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
                                placeholder="Your email"
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
                  placeholder="Tell us how we can help"
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
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <Button
                                type="submit"
                                size="lg"
                                className="w-full bg-primary hover:bg-primary/90 text-white"
                            >
                                SEND MESSAGES
                            </Button>
                        </motion.div>
                    </form>
                </div>
            </Container>
        </div>
    );
}
