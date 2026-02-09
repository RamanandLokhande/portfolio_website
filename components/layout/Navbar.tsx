"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = React.useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const scrolled = latest > 50;
        if (scrolled !== isScrolled) {
            setIsScrolled(scrolled);
        }
    });

    return (
        <div className="fixed top-0 z-50 w-full flex justify-center pointer-events-none">
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={cn(
                    "w-full flex justify-center transition-all duration-500 ease-in-out pointer-events-auto",
                    isScrolled
                        ? "mt-4 max-w-3xl rounded-full bg-secondary/80 backdrop-blur-md border border-border/50 py-3 shadow-sm mx-6"
                        : "bg-transparent border-transparent py-6"
                )}
            >
                <nav className={cn(
                    "w-full flex items-center justify-between",
                    isScrolled ? "px-6" : "max-w-3xl px-6"
                )}>
                    <Link href="/" className="font-display font-black tracking-tighter text-xl flex items-center gap-1 group">
                        R<span className="text-muted/40 group-hover:text-muted transition-colors">L</span>
                    </Link>

                    <div className="flex items-center gap-6">
                        <ul className="hidden md:flex items-center gap-1">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "relative text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-300",
                                            pathname === item.href
                                                ? "text-foreground bg-secondary/50 shadow-sm"
                                                : "text-muted hover:text-foreground hover:bg-secondary/30"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="h-4 w-[1px] bg-border hidden md:block" />

                        <ThemeToggle />
                    </div>
                </nav>
            </motion.header>
        </div>
    );
}
