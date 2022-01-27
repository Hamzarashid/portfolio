import React from "react";

export const About = () => {
  return (
    <div id="about" className="relative">
      <dl className=" relative py-7 sm:py-20 sm:grid sm:grid-cols-3 md:space-x-10 ">
      <div
        className="absolute bg-yellow-500 bottom-0 left-0 lg:h-full lg:w-96 blur-3xl opacity-40 "
        style={{ clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}
      >
      </div>
        <div className=" relative lg:w-8/12 mx-12 xl:mx-0 ">
          <img
            className="rounded-xl "
            alt="personal pic"
            src="./img/my pic.jpg"
          />
        </div>
        <div className="col-span-2">
          <main className=" pt-4 sm:pt-0 px-12 xl:px-0  ">
            <div className="sm:text-left ">
              <h1 className="text-2xl Maint font-bold tracking-tight text-gray-900 sm:text-4xl ">
                <span className="text-yellow-500">About Me</span>
              </h1>
              <h2 className=" text-xl text-black dark:text-white pt-4 sm:text-2xl">
                {" "}
                Software Developer{" "}
              </h2>
              <div className="pt-3 text-justify lg::text-left   sm:text-xl text-black dark:text-gray-100 ">
                <p className="leading-loose">
                  Software Engineer and a Researcher started a job as a Web
                  Developer, knowledge of HTML, CSS (Bootstrap, tailwind,
                  Material-UI and Bulma), W3CSS, JavaScript, jQuery, WordPress
                  and React/Next.js.
                </p>{" "}
                <br />
                <p className="leading-loose">
                  Completed Masters in Software Engineering from University of
                  Management and Technology, Lahore having worked in the field
                  of Information Security (Cryptography).
                </p>
              </div>
            </div>
          </main>
        </div>
      </dl>
    </div>
  );
};
