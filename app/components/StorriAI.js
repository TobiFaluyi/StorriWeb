import Image from "next/image";
import React from "react";

const StorriAI = ({ openModal }) => {
  return (
    <div className="flex flex-col bg-black text-white pb-14">
      <div className="flex flex-col lg:flex-row gap-5 border-4 border-[#1e1e1e] rounded-3xl mx-5 lg:mx-28 py-6 px-6">
        <div className="relative w-full h-[200px] max-w-[320px]">
          <Image src={"/assets/images/ai_storri_img.png"} alt="Storri" fill />
        </div>
        <div className="my-auto">
          <p className="font-bold text-2xl mb-3 leading-7">
            AI powered conversion system
          </p>
          <p className="text-sm">
            Storri leverages the capabilities of artificial intelligence to
            automatically generate captivating videos from shared articles.
            These videos can be further enhanced and customized through editing.
          </p>
        </div>
      </div>
      <button
        onClick={() => openModal()}
        className="rounded-xl bg-white text-black py-3 px-5 mt-10 w-fit mx-auto"
      >
        Join Early Access
      </button>
    </div>
  );
};

export default StorriAI;
