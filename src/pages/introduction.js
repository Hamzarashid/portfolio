import React, { useEffect } from "react";
import Typist from "react-text-typist";
export const Introduction = () => {
  useEffect(() => {
    // grab everything we need
    const gridItems = document.querySelectorAll(".grid-background > div");

    // loop over grid items and create a random duration + delay for each
    gridItems.forEach((item) => {
      // calculate random number for delay
      const delay = getRandomInt(0, 5);

      // calculate random number for duration
      const duration = getRandomInt(3, 6);

      // set both
      item.style.animationDelay = `${delay}s`;
      item.style.animationDuration = `${duration}s`;
    });

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }, []);
  return (
    <div
      id="intro"
      className="relative min-h-screen flex items-center justify-center  dark:bg-gray-900 "
    >
      <div className="absolute bg-black dark:bg-gray-900 inset-0 z-0 opacity-60 "></div>
      <div className="grid-background absolute inset-0  p-2 grid grid-cols-12 gap-2 ">
        <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-5 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>

        <div className="col-span-5 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-3 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>

        <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-7 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>

        <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-6 bg-gray-800 rounded animate-pulse"></div>

        <div className="col-span-5 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-5 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>

        <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-7 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>

        <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-7 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>
      </div>

      <div className="relative pt-20 lg:pt-0  ">
          <div className="absolute bg-black inset-0 opacity-5   "></div>
        <div className="relative ">
          <h2 className="text-4xl .high  font-bold tracking-wide text-gray-100 dark:text-gray-300 sm:text-6xl text-center">
            Hello, <span className="text-yellow-500">I am</span>
          </h2>
          <div className="text-4xl .high font-bold tracking-wide text-yellow-500 sm:text-6xl text-center">
            <Typist
              sentences={["Hamza Rashid", "Web Developer!"]}
              loop={true}
              deletingSpeed={150}
              pauseTime={1000}
              cursorSmooth={true}
              cursorBlinkSpeed={1000}
            />
          </div>
          <p className="pt-8 px-2 text-xl text-gray-100 text-center ">
            "If you're already a front-end developer, well, pretend you're also
            wearing a pirate hat."
          </p>
          <div className="flex justify-center pt-8 ">
            <a href="https://drive.google.com/file/d/1OBJsF9BIdFffRHCPJLzCnwe_3EdNjGTU/view?usp=sharing" target="_blank" className="border-4 border-yellow-500 rounded-full text-xs sm:text-xl font-medium text-gray-100 dark:text-gray-300 px-4 py-2 hover:border-gray-300 " rel="noreferrer">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
