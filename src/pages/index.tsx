import React from "react";
import HomeLayout from "@/components/layout/home-layout";

const HomePage: React.FC = () => {
  return (
    <HomeLayout>
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <h2 className="text-xl font-semibold mb-4">Home Page!</h2>
        <p className="mb-2">
          This is a simple Gatsby page using React and Tailwind CSS.
        </p>
        <p>
          The body section grows to fill the available space between header and footer.
        </p>
      </div>
    </HomeLayout>
  );
};

export default HomePage;

export const Head = () => <title>Home</title>
