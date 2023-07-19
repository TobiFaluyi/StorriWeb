"use client";
import Image from "next/image";
import React, { useState } from "react";

const NavBar = ({ openModal }) => {
  const [showMenu, setshowMenu] = useState(false);

  const toggleMenu = () => {
    let menuBar = document.querySelector(".menuBar");
    menuBar.classList.toggle("change");
    setshowMenu(!showMenu);
  };
  return (
    <>
      <nav className="flex justify-between align-middle bg-white text-black mx-5 lg:mx-10 mt-4 p-5 rounded-xl box-shadow-custom">
        <div>
          <Image
            src={"/assets/images/logostorri.png"}
            alt="Storri"
            width={100}
            height={40}
          />
        </div>
        <div className="hidden lg:block">
          <ul className="flex flex-row align-middle gap-10 mt-2">
            <a href="#highlight">
              <li>Highlight</li>
            </a>
            <a href="#regularusers">
              <li>For Regular User</li>
            </a>
            <a href="#creators">
              <li>For Creators</li>
            </a>
            <a href="#hello">
              <li>Say Hello</li>
            </a>
          </ul>
        </div>
        <div className="hidden lg:block">
          <button
            onClick={() => openModal()}
            className="rounded-xl bg-black text-white py-3 px-5"
          >
            Join Early Access
          </button>
        </div>
        <div className="block lg:hidden menuBar" onClick={() => toggleMenu()}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </nav>
      {showMenu && (
        <>
          <div
            className={`flex flex-col items-center bg-white mx-10 mt-5 rounded-xl lg:hidden ${
              showMenu ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500 box-shadow-custom`}
          >
            <div>
              <div className="flex flex-col gap-5 items-center text-black mt-2 mb-4">
                <a href="#highlight">
                  <p>Highlight</p>
                </a>
                <a href="#regularusers">
                  <p>For Regular User</p>
                </a>
                <a href="#creators">
                  <p>For Creators</p>
                </a>
                <a href="#hello">
                  <p>Say Hello</p>
                </a>
              </div>
            </div>
            <div className="">
              <button
                onClick={() => openModal()}
                className="rounded-xl bg-black text-white py-3 px-5 mb-5"
              >
                Join Early Access
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NavBar;
