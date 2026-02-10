"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
  });

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-full max-w-4xl px-4"
      >
        <nav
          className={cn(
            "flex items-center justify-between rounded-full px-6 transition-all duration-300",
            scrolled
              ? "bg-secondary/90 backdrop-blur-md border border-border shadow-md py-3"
              : "bg-background py-4"
          )}
        >
          {/* LOGO */}
          <Link href="/" className="font-display font-black text-xl tracking-tight">
            R<span className="text-muted-foreground">L</span>
          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-colors",
                    pathname === item.href
                      ? "bg-background/60 text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/40"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* MOBILE MENU BUTTON */}
           <button
  onClick={() => setOpen(!open)}
  aria-label="Open menu"
  className="md:hidden flex h-11 w-11 items-center justify-center rounded-full
             border border-border bg-foreground text-background
             shadow-md active:scale-95 transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {open ? (
      <>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </>
    ) : (
      <>
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </>
    )}
  </svg>
</button>
          </div>
        </nav>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
            />

            {/* PANEL */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="fixed right-0 top-0 z-50 h-full w-72 bg-secondary/95 backdrop-blur-md border-l border-border md:hidden"
            >
              <div className="flex flex-col gap-2 p-6 pt-28">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-lg px-4 py-3 text-sm font-black uppercase tracking-widest transition",
                      pathname === item.href
                        ? "bg-background/50 text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-background/30"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

