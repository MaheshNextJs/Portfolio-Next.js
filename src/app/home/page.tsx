import React from "react";
import myPhoto from "../images/profile.jpg";
import Image from "next/image";

const Home: React.FC = () => {
  const projects = ["Next.js", "React.js", "React Native"];
  const resumeLink =
    "https://drive.google.com/uc?export=download&id=1Ma6wAhnBq-4htUiSKmpDRUwKI3q6OBSr";

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pb-20 bg-gradient-to-b from-blue-600 to-purple-800 p-6 px-20 relative">
        <section className="text-center my-10 flex flex-col items-center md:flex-row md:justify-center">
          <div className="text-center md:text-left">
            <h1 className="text-6xl font-bold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-pink-300 to-gray-300 mb-4 pb-2">
              Welcome to My Portfolio
            </h1>
            <p className="text-lg text-gray-100 max-w-xl">
              I&apos;m <span className="font-semibold">Mahesh Bairi</span>, a
              Frontend Developer with 5 years of experience. I specialize in
              building high-performance, scalable, and user-friendly web and
              Mobile applications using{" "}
              <span className="font-semibold">
                React.js, Next.js, and React Native
              </span>
              . Passionate about UI/UX design and performance optimization.
            </p>
          </div>
          <div className="relative w-64 h-64 ml-10 mt-6 md:mt-0">
            <Image
              src={myPhoto.src}
              alt="Profile"
              className="rounded-full object-cover border-4 border-white shadow-lg shadow-black"
              layout="fill"
            />
          </div>
        </section>

        <div className="text-center">
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-block bg-white text-gray-800 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-300 transition transform hover:scale-105"
          >
            📄 Download Resume
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
                className="bg-gradient-to-r from-white via-cyan-300 to-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-gray-800 text-center">
                  {project}
                </h3>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="bg-gray-700 bg-opacity-20 text-center py-3">
        <p className="text-black">
          &copy; 2025 Mahesh Bairi. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
