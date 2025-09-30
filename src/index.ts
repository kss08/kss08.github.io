import type { ProjectContent } from "./types/projects";
import type { SkillsContent } from "./types/skills";

const projects: ProjectContent = {
    projects: [
        {
            name: "Portfolio Website",
            description: "A personal website built with React and TypeScript.",
            additional_description: "Deployed on Vercel with CI/CD setup.",
            date: "2024-06"
        },
        {
            name: "Task Manager API",
            description: "REST API for managing tasks using Node.js and Express.",
            date: "2024-03"
        },
        {
            name: "Data Scraper",
            description: "A Python script that extracts data from websites and stores it in CSV.",
        }
    ]
};


const skills: SkillsContent = {
    skills: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Docker"],
    certificates: [
        { text: "AWS Certified Cloud Practitioner", link: "https://aws.amazon.com/certification/" },
        { text: "Google Data Analytics Certificate", link: "https://coursera.org/professional-certificates/google-data-analytics" }
    ]
};

console.log("=== Projects ===");
projects.projects.map((proj, i) => {
    console.log(`\n${i + 1}. ${proj.name}`);
    console.log(`   ${proj.description}`);
    if (proj.additional_description) console.log(`   Note: ${proj.additional_description}`);
    if (proj.date) console.log(`   Date: ${proj.date}`);
});

console.log("\n=== Skills ===");
skills.skills.map(skill => console.log(`- ${skill}`));
if (skills.certificates) {
    console.log("\nCertificates:");
    skills.certificates.map(cert =>
        console.log(`- ${cert.text} (${cert.link})`)
    );
}