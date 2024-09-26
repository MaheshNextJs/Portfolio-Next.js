import React from "react";
import myPhoto from "../images/profile.jpg";
import Image from "next/image";

const Home: React.FC = () => {
  const projects = ["NextJs", "ReactJs", "React Native"];

  const resumeLink =
    "https://drive.google.com/uc?export=download&id=1LxfwUZK2ls7YBiG0cOrPRrJffCZEGGLS";

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-500 to-indigo-600 p-6 px-20">
      <main className="flex-grow">
        <section className="text-center my-10 flex flex-col items-center md:flex-row md:justify-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">
              Welcome to My Portfolio
            </h1>
            <p className="text-lg text-gray-200">
              I'm Mahesh Bairi, a Frontend Developer specializing in React.js,
              Next.js, and React Native.
            </p>
          </div>
          <div className="relative w-64 h-64 ml-20">
            <Image
              src={myPhoto.src}
              alt="Profile"
              className="rounded-full object-cover"
              layout="fill"
            />
          </div>
        </section>
        <div className="text-center">
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-white text-gray-800 font-semibold py-2 px-4 rounded shadow hover:bg-gray-200 transition"
          >
            Download Resume
          </a>
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Technologies
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <li
                key={index}
                className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {project}
                </h3>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="text-center py-6">
        <p className="text-gray-200">
          &copy; 2024 Mahesh Bairi. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
