"use client";

import { ContactForm } from "@/components/sections/ContactForm";
import { Github, Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub", handle: "@ramanandl" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", handle: "Ramanand Lokhande" },
    { icon: Mail, href: "mailto:ramanandvl770@gmail.com", label: "Email", handle: "ramanandvl770@gmail.com" },
];

export default function ContactPage() {
    return (
        <div className="pt-48 pb-32">
            <div className="mx-auto max-w-3xl px-6">
                <header className="mb-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-6xl font-black tracking-tight sm:text-8xl"
                    >
                        Get In <span className="text-muted/40 font-normal italic">Touch.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 text-xl text-muted font-medium max-w-xl"
                    >
                        I&apos;m currently looking for new opportunities and collaborations.
                        Feel free to reach out via the form or socials.
                    </motion.p>
                </header>

                <div className="grid gap-20">
                    <ContactForm />

                    <div className="mt-12">
                        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-muted mb-8 text-center">Or connect via socials</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="flex items-center justify-between p-6 rounded-3xl border border-border bg-secondary/20 hover:bg-secondary/40 transition-all group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-background transition-transform group-hover:scale-110">
                                            <social.icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-base">{social.label}</h3>
                                            <p className="text-xs text-muted font-bold truncate max-w-[150px]">{social.handle}</p>
                                        </div>
                                    </div>
                                    <ArrowRight className="h-4 w-4 text-muted group-hover:text-foreground transition-colors" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
