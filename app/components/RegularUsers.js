import Image from "next/image";
import React from "react";

const RegularUsers = () => {
  return (
    <div className="bg-white lg:px-20 pt-40">
      <div id="regularusers" className="section-header px-5 lg:px-0 text-5xl lg:text-8xl font-bold max-w-[700px]">
        For Regular Users
      </div>
      <div className="flex flex-col lg:flex-row gap-5 justify-center mt-16 mx-5 md:mx-40 lg:mx-0">
        <div className="relative w-full h-[500px] lg:h-[820px] lg:w-[550px]">
          <Image src={"/assets/images/userstorri.png"} alt="Storri" fill />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="relative h-[120px] w-[68px]">
              <Image src={"/assets/images/Home.svg"} alt="Storri" fill />
            </div>
            <div className="text-black w-[280px] md:w-[400px] max-w-[480px] mx-5 mt-3 md:mt-2">
              <p className="font-bold">Personalized Feed</p>
              <p className="text-[#7d7d7d] mt-2 text-[14px] md:text-sm">
                Let our recommendation engine be your personal news curator.
                Discover new and relevant content based on your preferences and
                reading habits.
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <div className="relative h-[120px] w-[68px]">
              <Image src={"/assets/images/Heart.svg"} alt="Storri" fill />
            </div>
            <div className="text-black w-[280px] md:w-[400px] max-w-[480px] mx-5 mt-3 md:mt-2">
              <p className="font-bold">Like</p>
              <p className="text-[#7d7d7d] mt-2 text-[14px] md:text-sm">
                Reflect your experience on a video by sharing a like.
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <div className="relative h-[120px] w-[68px]">
              <Image src={"/assets/images/Chat.svg"} alt="Storri" fill />
            </div>
            <div className="text-black w-[280px] md:w-[400px] max-w-[480px] mx-5 mt-3 md:mt-2">
              <p className="font-bold">Video Comment</p>
              <p className="text-[#7d7d7d] mt-2 text-[14px] md:text-sm">
                Express yourself with video comments. Transform your thoughts
                and opinions into visual stunning videos effortlessly.
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <div className="relative h-[120px] w-[68px]">
              <Image src={"/assets/images/Send.svg"} alt="Storri" fill />
            </div>
            <div className="text-black w-[280px] md:w-[400px] max-w-[480px] mx-5 mt-3 md:mt-2">
              <p className="font-bold">Share</p>
              <p className="text-[#7d7d7d] mt-2 text-[14px] md:text-sm">
                Share video as a link or across social platforms like Whatsapp,
                Facebook, Twitter and Instagram.
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <div className="relative h-[120px] w-[68px]">
              <Image src={"/assets/images/Document.svg"} alt="Storri" fill />
            </div>
            <div className="text-black w-[280px] md:w-[400px] max-w-[480px] mx-5 mt-3 md:mt-2">
              <p className="font-bold">Discover Source</p>
              <p className="text-[#7d7d7d] mt-2 text-[14px] md:text-sm">
                Discover the source article of the video generated to read
                further for more in depth knowledge on the video content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegularUsers;
