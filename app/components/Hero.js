import Image from "next/image";
import React from "react";

const Hero = ({ openModal }) => {
  return (
    <div className="bg-white mt-3 text-black px-7 lg:px-20 pt-10 flex flex-col lg:grid lg:grid-cols-3 gap-4">
      <div className="flex flex-col items-center lg:items-start lg:col-span-1 lg:mx-0 mt-5 mb-10 lg:mt-32">
        <p className="text-5xl font-bold leading-[60px] max-w-[350px] mx-auto text-center lg:text-left lg:mx-0">
          Inspire, Engage <br />& Create
        </p>
        <p className="text-[#7d7d7d]">Your All-In-One News Experience.</p>
        <button
          onClick={() => openModal()}
          className="rounded-xl bg-black text-white py-3 px-5 mt-10 w-fit"
        >
          Join Early Access
        </button>
      </div>
      <div className="lg:col-span-2 relative w-1/1 h-[280px] md:h-[400px] lg:h-[580px]">
        <Image src={"/assets/images/herostorri.png"} alt="Storri" fill />
      </div>
    </div>
  );
};

export default Hero;
