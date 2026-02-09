"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactForm() {
    const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setStatus("success");
    };

    if (status === "success") {
        return (
            <Card glass className="mx-auto w-full overflow-hidden border-black/5 dark:border-white/5">
                <CardContent className="flex flex-col items-center justify-center py-20 text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="mb-8 rounded-full bg-foreground p-5 text-background shadow-2xl"
                    >
                        <CheckCircle2 className="h-10 w-10" />
                    </motion.div>
                    <h3 className="font-display text-3xl font-bold">Message Sent!</h3>
                    <p className="mt-4 text-lg text-muted max-w-sm">
                        I&apos;ve received your message and will get back to you within 24 hours.
                    </p>
                    <Button
                        variant="outline"
                        size="lg"
                        className="mt-10 rounded-full"
                        onClick={() => setStatus("idle")}
                    >
                        Send another message
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <div className="mx-auto w-full max-w-3xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <Card glass className="p-2">
                    <CardContent className="p-8 sm:p-12">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid gap-8 sm:grid-cols-2">
                                <div className="space-y-3">
                                    <label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted">
                                        Your Name
                                    </label>
                                    <input
                                        id="name"
                                        required
                                        placeholder="Hey Buddy"
                                        className="flex h-14 w-full rounded-2xl border border-border bg-background/50 px-5 py-2 text-base transition-all focus:bg-background focus:ring-2 focus:ring-foreground/10 focus:outline-none"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        placeholder="dropemail@domain.com"
                                        className="flex h-14 w-full rounded-2xl border border-border bg-background/50 px-5 py-2 text-base transition-all focus:bg-background focus:ring-2 focus:ring-foreground/10 focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label htmlFor="message" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    placeholder="I'm looking for help with..."
                                    className="flex min-h-[150px] w-full rounded-3xl border border-border bg-background/50 px-5 py-4 text-base transition-all focus:bg-background focus:ring-2 focus:ring-foreground/10 focus:outline-none"
                                />
                            </div>
                            <Button
                                type="submit"
                                variant="premium"
                                size="lg"
                                className="w-full text-base h-16 rounded-full"
                                disabled={status === "loading"}
                            >
                                {status === "loading" ? (
                                    "Dispatching..."
                                ) : (
                                    <span className="flex items-center gap-3">
                                        <Send className="h-4 w-4" />
                                        Send Message
                                    </span>
                                )}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}
