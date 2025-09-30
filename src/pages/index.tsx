import React from "react";
import HomeLayout from "@/components/layout/home-layout";
import type { AboutContent } from "@/types/about";

const HomePage: React.FC = () => {
  const about: AboutContent = {
    title: "Hi, I'm __name__",
    description: [
      "I am a Sheares Web Hero"
    ],
    about: {
      "Hobbies": ["I like Ultimate Frisbee"]
    }
  }

  return (
    <HomeLayout>
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <h1 className="text-xl font-semibold">{about.title}</h1>
        {about.description.map(desc => (
          <p className="mt-5">
            {desc}
          </p>
        ))}

        {about.about && Object.entries(about.about).map(([header, items]) => (
          <>
            <h2 className="text-xl font-semibold mt-10">{header}</h2>
            {items.map(desc => (
              <p className="mt-5">
                {desc}
              </p>
            ))}
          </>
        ))}
      </div>
    </HomeLayout>
  );
};

export default HomePage;

export const Head = () => <title>Home</title>
