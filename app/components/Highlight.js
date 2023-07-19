import Image from "next/image";
import React from "react";

const Highlight = () => {
  return (
    <div className="bg-white lg:px-20 pt-40">
      <div id="highlight" className="text-gray-400 px-5 lg:px-0 text-5xl lg:text-8xl font-bold">Highlight</div>
      <div className="flex flex-col lg:flex-row text-black">
        <div className="flex flex-col bg-[#f6f6f6] my-10 px-5 py-10 mx-4 rounded-2xl">
          <div className="relative w-[260px] h-[280px] mx-auto">
            <Image src={"/assets/images/Uncover.png"} alt="Storri" fill />
          </div>
          <p className="font-bold max-w-[200px] mt-20">Uncover the Worlds Stories</p>
          <p className="lg:max-w-[400px] mt-2">
            Discover the world’s news in one place. Explore diverse RSS feeds
            and stay up-to-date with the latest stories that matter to you.
          </p>
        </div>
        <div className="flex flex-col bg-[#f6f6f6] my-10 px-5 py-10 mx-4 rounded-2xl">
          <div className="relative w-[260px] h-[280px] mx-auto">
            <Image src={"/assets/images/Captivate.png"} alt="Storri" fill />
          </div>
          <p className="font-bold max-w-[200px] mt-20">
            Turn Words into Captivating Visuals
          </p>
          <p className="lg:max-w-[400px] mt-2">
            Join the conversation and effortlessly transform your thoughts into
            captivating video content ready to be shared across social
            platforms.
          </p>
        </div>
        <div className="flex flex-col bg-[#f6f6f6] my-10 px-5 py-10 mx-4 rounded-2xl">
          <div className="relative w-[260px] h-[280px] mx-auto">
            <Image src={"/assets/images/Discover.png"} alt="Storri" fill />
          </div>
          <p className="font-bold max-w-[200px] mt-20">
            Discover Your News, Your Way
          </p>
          <p className="lg:max-w-[400px] mt-2">
            Experience a personalized video feed curated exclusively for you,
            ensuring every video resonates with your unique interests and
            preferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
