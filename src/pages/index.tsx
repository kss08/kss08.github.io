import React from "react";
import HomeLayout from "@/components/layout/home-layout";

const HomePage: React.FC = () => {
  return (
    <HomeLayout>
      <h2 className="text-xl font-semibold mb-4">Home Page!</h2>
      <p className="mb-2">
        This is a simple Gatsby page using React and Tailwind CSS.
      </p>
      <p>
        The body section grows to fill the available space between header and footer.
      </p>
    </HomeLayout>
  );
};

export default HomePage;

export const Head = () => <title>Home</title>
