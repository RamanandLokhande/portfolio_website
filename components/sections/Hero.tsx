"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative pt-24 pb-12 md:pt-36 md:pb-20">
            <div className="mx-auto max-w-3xl px-6">
                <div className="flex flex-col items-start text-left">
                    {/* Compact Profile Header */}
                    <div className="flex items-center gap-4 mb-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="h-32 w-32 overflow-hidden rounded-2xl bg-secondary flex items-center justify-center border border-border relative"
                        >
                            <img
                                src="/Ramanand.png"
                                alt="Ramanand Lokhande"
                                className="object-cover w-full h-full"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/30 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-muted"
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                            Available
                        </motion.div>
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="font-display text-5xl font-black tracking-tight sm:text-7xl leading-[0.9]"
                    >
                        Ramanand <br />
                        <span className="text-muted/40 italic">Lokhande.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="mt-6 text-xl font-medium text-muted leading-relaxed max-w-2xl"
                    >
                        Accomplished Web Developer enhancing user interfaces and application performance.
                        Passionate about building AI agents and intelligent digital solutions.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="mt-8 flex flex-wrap gap-3"
                    >
                        <Button size="default" variant="premium" asChild className="rounded-2xl">
                            <Link href="/projects" className="flex items-center gap-2">
                                Works <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="default" asChild className="rounded-2xl">
                            <Link href="/contact">Contact</Link>
                        </Button>
                    </motion.div>

                    {/* Social Row */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-12 flex items-center gap-6"
                    >
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted/60">
                            <MapPin className="h-3 w-3" /> India
                        </div>
                        <div className="h-px w-8 bg-border" />
                        <div className="flex gap-4">
                            {[
                                { icon: Github, href: "https://github.com" },
                                { icon: Linkedin, href: "https://linkedin.com" },
                                { icon: Mail, href: "mailto:ramanandvl770@gmail.com" },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="text-muted/50 transition-colors hover:text-foreground"
                                >
                                    <social.icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
