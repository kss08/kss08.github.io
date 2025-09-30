import React from "react";
import HomeLayout from "@/components/layout/home-layout";
import type { SkillsContent } from "@/types/skills";

const SkillsPage: React.FC = () => {
  const skills: SkillsContent = {
    certificates: [
      {
        text: "Certified Sheares Web Developer",
        link: "https://www.linkedin.com/company/nus-sheares-web"
      },
      {
        text: "Certified Sheares Web UI/UX Designer",
        link: "https://www.linkedin.com/company/nus-sheares-web"
      }
    ],
    skills: [
      "React",
      "Gatsby",
      "TailwindCSS",
      "Github"
    ]
  }

  return (
    <HomeLayout>
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <h2 className="text-xl font-semibold mb-4">Skills Page</h2>
        {skills.certificates && <>
          <h2 className="text-lg font-semibold mb-4">Certificates</h2>
          {skills.certificates?.map(cert => (
            <a href={cert.link} target="blank">
              <p className="mb-2 hover:text-blue-600">
                {cert.text}
              </p>
            </a>
          ))}
        </>}

        {skills.skills && <>
          <h2 className="text-lg font-semibold mb-4">Skills</h2>
          <ul className="list-disc list-inside space-y-1">
            {skills.skills?.map(text => (
              <li>
                {text}
              </li>
            ))}
          </ul>
        </>}
      </div>
    </HomeLayout>
  );
};

export default SkillsPage;

export const Head = () => <title>Skills</title>