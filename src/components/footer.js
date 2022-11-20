import React from "react";

const Footer = () => {
  let today = new Date();
  return (
    <div id="footer" className="bg-gray-200 dark:bg-gray-900 py-10">
      <div className=" flex items-center justify-center ">
        <a
          href="https://www.facebook.com/hamza.rashid3/"
          target="_blank"
          className=" flex items-center   hover:scale-110 motion-reduce:transform-none dark:bg-gray-900 p-1 rounded-full text-black dark:text-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white " rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-facebook"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#e0a80d"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/hamzarashid1"
          target="_blank"
          className=" flex items-center md:ml-6  hover:scale-110 motion-reduce:transform-none dark:bg-gray-900 p-1 rounded-full text-black dark:text-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-linkedin"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#e0a80d"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <line x1="8" y1="11" x2="8" y2="16" />
            <line x1="8" y1="8" x2="8" y2="8.01" />
            <line x1="12" y1="16" x2="12" y2="11" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
          </svg>
        </a>
        <a
          href="https://github.com/Hamzarashid"
          target="_blank"
          className=" flex items-center md:ml-6  hover:scale-110 motion-reduce:transform-none dark:bg-gray-900 p-1 rounded-full text-black dark:text-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-github"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#e0a80d"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/hamza_rashid_8"
          target="_blank"
          className=" flex items-center md:ml-6  hover:scale-110 motion-reduce:transform-none dark:bg-gray-900 p-1 rounded-full text-black dark:text-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-instagram"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#e0a80d"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
          </svg>
        </a>
      </div>
      <p className="pt-4  text-xl text-gray-800 dark:text-gray-100 text-center ">
           All Right Reserved {today.getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
