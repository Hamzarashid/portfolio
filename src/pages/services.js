import React from "react";
import Card from "../components/cards";

export const Services = () => {
  return (
    <div id="services" className="my-10  ">
      <h1 className="text-4xl Maint font-bold tracking-tight text-gray-900 sm:text-3xl text-center ">
        <span className="text-yellow-500">Services</span>
      </h1>
      <dl className="sm:grid sm:grid-cols-2 xl:grid-cols-3 md:gap-x-10 md:gap-y-10 pt-11 ">
        <div>
          <Card
            logo="./img/react.svg"
            width="55"
            title="React"
            description="React makes it painless to create interactive UIs."
          />
        </div>
        <div >
        <Card
            logo="./img/nextjs.svg"
            width="88"
            title="Next"
            description="Next. js is a React framework that enables several extra features."
          />
        </div>
        <div >
        <Card
            logo="./img/javascript.svg"
            width="55"
            title="Javascript"
            description="It is an interpreted programming language with object-oriented capabilities. "
          />
        </div>
        <div>
          <Card
            logo="./img/php.svg"
            width="55"
            title="php"
            description="PHP is a server side scripting language that is embedded in HTML."
          />
        </div>
        <div >
        <Card
            logo="./img/python.svg"
            width="55"
            title="python"
            description="It is open source, which means it is free to use, even for commercial applications. "
          />
        </div>
        <div >
        <Card
            logo="./img/html.svg"
            logo2="./img/css.svg"
            width="55"
            title="HTML & CSS"
            description="It defines the meaning and structure of web content and other technologies besides HTML are generally used for appearance. "
          />
        </div>
        <div>
          <Card
            logo="./img/bootstrap.svg"
            width="55"
            title="Bootstrap"
            description="Bootstrap is a free and open source front end development framework for the creation of websites and web apps."
          />
        </div>
        <div >
        <Card
            logo="./img/tailwind.svg"
            width="55"
            title="Tailwind"
            description="Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces. "
          />
        </div>
        <div >
        <Card
            logo="./img/material.svg"
            width="55"
            title="Material-Ui"
            description="Material-UI is simply a library that allows us to import and use different components. "
          />
        </div>
      </dl>
    </div>
  );
};
