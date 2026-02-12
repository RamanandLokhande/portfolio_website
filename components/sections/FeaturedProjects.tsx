"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function FeaturedProjects() {
    const featuredProjects = projects.filter((p) => p.featured);

    return (
        <section className="py-16">
            <div className="mx-auto max-w-3xl px-6">
                <div className="mb-12 flex items-baseline justify-between">
                    <h2 className="font-display text-3xl font-black tracking-tight">
                        Works<span className="text-muted/40">.</span>
                    </h2>
                    <Button variant="link" asChild className="p-0 h-auto text-[10px] font-black uppercase tracking-[0.2em] text-muted hover:text-foreground transition-colors">
                        <Link href="/projects" className="flex items-center gap-1.5">
                            Explore All <ArrowUpRight className="h-3 w-3" />
                        </Link>
                    </Button>
                </div>

                <div className="grid gap-10">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card glass className="group overflow-hidden border-transparent hover:bg-secondary/5">
                                <div className="flex flex-col sm:flex-row">
                                    <div className="sm:w-1/3 aspect-video sm:aspect-square bg-secondary/30 relative overflow-hidden transition-colors group-hover:bg-secondary/50">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 p-8 flex flex-col justify-center">
                                        <div className="mb-4">
                                            <h3 className="font-display text-2xl font-black leading-tight">{project.title}</h3>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="text-[9px] font-black uppercase tracking-widest text-muted/60"
                                                    >
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-lg text-muted font-medium leading-relaxed line-clamp-2 mb-6">
                                            {project.description}
                                        </p>
                                        <Button variant="premium" size="sm" className="w-fit px-6 rounded-xl text-xs h-10" asChild>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                                View Site <ArrowUpRight className="h-3 w-3" />
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
