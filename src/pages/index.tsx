import React from "react";

const HomePage: React.FC = () => {
  return (
    <body className="flex flex-col min-h-screen">
      {/* Body */}
      <main className="flex-1 p-6 bg-gray-100">
        <h2 className="text-xl font-semibold mb-4">Hello World!</h2>
        <p>
          Change the contents of this file and see the website update in real time!
        </p>
      </main>
    </body>
  );
};

export default HomePage;
