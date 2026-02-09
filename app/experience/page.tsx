"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { Card } from "@/components/ui/Card";
import { Briefcase } from "lucide-react";

export default function ExperiencePage() {
    return (
        <div className="pt-48 pb-32">
            <div className="mx-auto max-w-3xl px-6">
                <header className="mb-24">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="font-display text-6xl font-black tracking-tight sm:text-8xl"
                    >
                        Career <span className="text-muted/40 font-normal italic">Path</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 text-xl text-muted font-medium max-w-xl"
                    >
                        A timeline of my professional growth and technical leadership roles.
                    </motion.p>
                </header>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card glass className="overflow-hidden group">
                                <div className="flex flex-col">
                                    {/* Top info bar */}
                                    <div className="bg-secondary/30 p-8 flex items-baseline justify-between border-b border-border">
                                        <div className="flex items-center gap-3">
                                            <Briefcase className="h-4 w-4 text-muted" />
                                            <span className="text-sm font-black tracking-widest text-muted uppercase">Experience</span>
                                        </div>
                                        <span className="text-xs font-black tracking-[0.2em] text-muted uppercase">{exp.duration}</span>
                                    </div>

                                    {/* Content area */}
                                    <div className="p-8 sm:p-12">
                                        <div className="mb-8">
                                            <h3 className="font-display text-4xl font-black mb-2">{exp.role}</h3>
                                            <p className="text-2xl font-bold text-foreground/60">{exp.company}</p>
                                        </div>

                                        <p className="text-xl leading-relaxed text-muted font-medium">
                                            {exp.description}
                                        </p>

                                        {exp.current && (
                                            <div className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-1 text-[10px] font-black uppercase tracking-widest">
                                                Active Position
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
