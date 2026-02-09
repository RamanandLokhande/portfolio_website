"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsPage() {
    return (
        <div className="pt-48 pb-32">
            <div className="mx-auto max-w-3xl px-6">
                <header className="mb-24">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="font-display text-6xl font-black tracking-tight sm:text-8xl"
                    >
                        All <span className="text-muted/40 font-normal italic">Works</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 text-xl text-muted font-medium max-w-xl"
                    >
                        A comprehensive look at my technical contributions and design explorations.
                    </motion.p>
                </header>

                <div className="grid gap-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Card glass className="group h-full flex flex-col overflow-hidden">
                                <div className="relative aspect-video overflow-hidden">
                                    <div className="h-full w-full bg-secondary/30 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                                        <span className="font-display text-2xl font-bold text-muted/20">{project.title}</span>
                                    </div>
                                </div>
                                <div className="p-8 sm:p-12">
                                    <h3 className="font-display text-4xl font-black mb-4">{project.title}</h3>
                                    <p className="text-xl text-muted font-medium leading-relaxed mb-8">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-3 mb-10">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center rounded-full bg-secondary/80 px-4 py-1 text-xs font-black uppercase tracking-widest text-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <Button variant="premium" size="lg" className="w-full sm:w-fit px-12 rounded-full h-14" asChild>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="gap-2"
                                        >
                                            View Live Project <ArrowUpRight className="h-4 w-4" />
                                        </a>
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
