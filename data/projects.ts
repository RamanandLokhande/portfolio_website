export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: "1",
        title: "Aayojak event mangement platform ",
        description: "A professional event management platform using LLMs and modern web frameworks.in progress........",
        image: "/aayojak-logo.png",
        tags: ["Next.js", "React", "AI"],
        link: "https://github.com/aayojak-events/aayojak.git",
        featured: true
    },
];
