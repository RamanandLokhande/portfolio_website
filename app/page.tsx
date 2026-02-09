import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Experience } from "@/components/sections/Experience";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedProjects />
      <Experience />
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-16 text-left">
            <h2 className="font-display text-4xl font-black tracking-tight sm:text-6xl">
              Connect<span className="text-muted/40">.</span>
            </h2>
            <p className="mt-4 text-lg text-muted font-medium max-w-lg">
              Open for freelance projects and technical leadership roles.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
