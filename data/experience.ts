export interface Experience {
    id: string;
    company: string;
    role: string;
    duration: string;
    description: string;
    current?: boolean;
}

export const experiences: Experience[] = [
    {
        id: "1",
        company: "Rasheed Foundation",
        role: "Web Developer",
        duration: "05/2025 - 09/2025",
        description: "Collaborated with designers to create user-friendly interfaces, assisted in debugging to improve performance, and maintained website documentation for project clarity.",
        current: false
    },
    {
        id: "2",
        company: "Read A Story",
        role: "Volunteer",
        duration: "05/2023 - 10/2023",
        description: "Volunteered to help children from zilla parishad schools improve their English reading and comprehensive skills.",
        current: false
    }
];
