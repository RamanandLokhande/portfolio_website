import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ramanandvl770@gmail.com", label: "Email" },
];

export function Footer() {
    return (
        <footer className="py-20 border-t border-border bg-background">
            <div className="mx-auto max-w-3xl px-6">
                <div className="flex flex-col items-center gap-12 sm:flex-row sm:justify-between">
                    <div className="flex flex-col items-center sm:items-start gap-2">
                        <h2 className="font-display text-2xl font-black tracking-tighter">
                            RAMANAND <span className="text-muted/40">L.</span>
                        </h2>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted">
                            Built with precision & purpose
                        </p>
                    </div>

                    <div className="flex items-center gap-8">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target={social.label === "Email" ? "_self" : "_blank"} // Open mailto links in same window
                                rel={social.label === "Email" ? "" : "noopener noreferrer"} // No rel for mailto
                                className="text-[10px] font-black uppercase tracking-[0.2em] text-muted hover:text-foreground transition-colors"
                            >
                                {social.label}
                            </a>
                        ))}
                    </div>

                    <p className="text-[10px] font-black tracking-widest text-muted/30 uppercase text-center sm:text-right">
                        © {new Date().getFullYear()} ALL RIGHTS RESERVED
                    </p>
                </div>
            </div>
        </footer>
    );
}
