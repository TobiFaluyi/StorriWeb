import React from "react";
import Image from "next/image";

export default function Publication() {
  return (
    <div className="lg:px-20 pt-5 pb-20">
      <div className="mx-auto text-center px-5 lg:px-0 text-4xl lg:text-7xl font-bold max-w-[700px] mb-5">
        Featuring Publications
      </div>
      <div class="grid-container mt-10 px-5 lg:px-16">
        <div class="grid-item">
          <Image
            src={"/assets/images/SUN.png"}
            alt="Storri"
            width={100}
            height={100}
          />
        </div>
        <div class="grid-item">
          <Image
            src={"/assets/images/CBC.png"}
            alt="Storri"
            width={100}
            height={100}
          />
        </div>
        <div class="grid-item">
          <Image
            src={"/assets/images/NINENEWS.png"}
            alt="Storri"
            width={100}
            height={100}
          />
        </div>
        <div class="grid-item">
          <Image
            src={"/assets/images/GHANA.png"}
            alt="Storri"
            width={100}
            height={100}
          />
        </div>
        <div class="grid-item">
          <Image
            src={"/assets/images/GUARD.png"}
            alt="Storri"
            width={100}
            height={100}
          />
        </div>
        <div class="grid-item">
          <Image
            src={"/assets/images/PULSE.png"}
            alt="Storri"
            width={100}
            height={100}
          />
        </div>
        <div class="grid-item">
          <Image
            src={"/assets/images/NEWS.png"}
            alt="Storri"
            width={100}
            height={100}
          />
        </div>
        <div class="grid-item">
          <Image
            src={"/assets/images/INDIA.png"}
            alt="Storri"
            width={100}
            height={100}
          />
        </div>
        <div class="grid-item">
          <Image
            src={"/assets/images/FOX.png"}
            alt="Storri"
            width={100}
            height={100}
          />
        </div>
        <div class="grid-item">
          <Image
            src={"/assets/images/FORBES.png"}
            alt="Storri"
            width={100}
            height={100}
          />
        </div>
        <div class="grid-item">
          <Image
            src={"/assets/images/LIFE.png"}
            alt="Storri"
            width={100}
            height={100}
          />
        </div>
        <div class="grid-item">
          <Image
            src={"/assets/images/USA.png"}
            alt="Storri"
            width={100}
            height={100}
          />
        </div>
        <div class="grid-item">
          <Image
            src={"/assets/images/TIMES.png"}
            alt="Storri"
            width={100}
            height={100}
          />
        </div>
        <div class="grid-item">
          <Image
            src={"/assets/images/DMAIL.png"}
            alt="Storri"
            width={100}
            height={100}
          />
        </div>
        <div class="grid-item">
          <Image
            src={"/assets/images/BBC.png"}
            alt="Storri"
            width={100}
            height={100}
          />
        </div>
        <div class="grid-item">
          <Image
            src={"/assets/images/TUARD.png"}
            alt="Storri"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
