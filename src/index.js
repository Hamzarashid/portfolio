import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./components/navbar";
import { Introduction } from "./pages/introduction";
import { About } from "./pages/about";
import { Services } from "./pages/services";
import Footer from "./components/footer";




const App = () => {
  return (
      <div className=" bg-gray-50 dark:bg-gray-800 scroll-smooth">
        <div className="2xl:container 2xl:mx-auto">
          <Introduction />
        </div>
        <div className="  ">
        <Navbar />
        </div>
        <div className="container mx-auto" >
          <About />
          <Services />
        </div>
        <div className="2xl:container 2xl:mx-auto">

          <Footer />
        </div>
      </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
