import Image from "next/image";
import React from "react";

const Creators = () => {
  return (
    <div className="creator-bg lg:px-20 pt-28 pb-20">
      <div
        id="creators"
        className="creator-header mx-auto text-center px-5 lg:px-0 text-4xl lg:text-7xl font-bold max-w-[700px] mb-5"
      >
        Coming Soon Creators Feature
      </div>
      <div className="flex flex-col lg:flex-row gap-5 justify-center mt-16 mx-5 md:mx-40 lg:mx-0">
        <div className="relative w-full h-[500px] lg:h-[820px] lg:w-[550px]">
          <Image src={"/assets/images/creators.png"} alt="Storri" fill />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="relative h-[120px] w-[68px]">
              <Image src={"/assets/images/Share.svg"} alt="Storri" fill />
            </div>
            <div className="text-white w-[280px] md:w-[400px] max-w-[480px] mx-5 mt-3 md:mt-2">
              <p className="font-bold">Share</p>
              <p className="text-[14px] md:text-sm">
                Share video as a link or across social platforms like Whatsapp,
                Facebook, Twitter and Instagram.
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <div className="relative h-[120px] w-[68px]">
              <Image src={"/assets/images/Edit.svg"} alt="Storri" fill />
            </div>
            <div className="text-white w-[280px] md:w-[400px] max-w-[480px] mx-5 mt-3 md:mt-2">
              <p className="font-bold">Edit Video</p>
              <p className="text-[14px] md:text-sm">
                Enhance your AI-generated video by editing and improving key
                elements such as imagery, background music, voiceover, selected
                font, and overall theme.
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <div className="relative h-[120px] w-[68px]">
              <Image src={"/assets/images/Manage.svg"} alt="Storri" fill />
            </div>
            <div className="text-white w-[280px] md:w-[400px] max-w-[480px] mx-5 mt-3 md:mt-2">
              <p className="font-bold">Manage Source</p>
              <p className="text-[14px] md:text-sm">
                Effortlessly access and manage your video source articles from
                various platforms like Medium and Blogspot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creators;
