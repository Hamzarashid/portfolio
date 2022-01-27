import React from "react";

const Card = (props) => {
  return (
	<div className=" bg-gray-100 dark:bg-gray-900 rounded-xl shadow-xl m-6 xl:m-0 h-full ">
	<div className="">
	  <div className="p-8 ">
		  <div className="inline-flex">
		  <img alt="" src={props.logo} width={props.width} />
		  {(props.logo2) && <img alt="" src={props.logo2} width={props.width} />}
		  </div>
		<div className=" text-xl text-black dark:text-white pt-4 sm:text-2xl">
		  {props.title}
		</div>
		<div
		  className="pt-3 text-justify lg:text-left sm:text-xl text-black dark:text-gray-100"
		>
		 <p className="leading-loose text-clip"> {props.description} </p> 
		</div>
	  </div>
	</div>
  </div>
  )
};

export default Card;
