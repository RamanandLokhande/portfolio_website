"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { Card } from "@/components/ui/Card";

export function Experience() {
    return (
        <section className="py-16 bg-secondary/5">
            <div className="mx-auto max-w-3xl px-6">
                <div className="mb-12">
                    <h2 className="font-display text-3xl font-black tracking-tight">
                        History<span className="text-muted/40 font-normal">.</span>
                    </h2>
                </div>

                <div className="grid gap-6">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card glass className="p-6 border-transparent hover:bg-secondary/10 transition-colors">
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                        <div className="flex flex-col">
                                            <h3 className="font-display text-xl font-black">{exp.role}</h3>
                                            <p className="text-sm font-bold text-foreground/50">{exp.company}</p>
                                        </div>
                                        <span className="text-[10px] font-black tracking-widest text-muted/60 uppercase">
                                            {exp.duration}
                                        </span>
                                    </div>
                                    <p className="text-base text-muted font-medium leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
