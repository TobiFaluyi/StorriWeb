import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between bg-white text-black pt-10 px-5 lg:px-20">
        <div className="mb-3">
          <a href="mailto:contactus@storri.ai" target="_blank">
            <p id="hello" className="font-bold text-3xl lg:text-6xl">
              contactus<span className="text-[#7d7d7d]">@</span>storri.ai
            </p>
          </a>
          <div className="flex gap-4 mt-5">
            <Image
              src={"/assets/images/twitter.svg"}
              alt="Storri"
              height={32}
              width={32}
            />
            <Image
              src={"/assets/images/linkedin.svg"}
              alt="Storri"
              height={32}
              width={32}
            />
          </div>
        </div>
        {currentRoute != "/policy" && (
          <div className="text-right mt-10 lg:mt-0">
            <p className="font-bold">Coming Soon!</p>
            <div className="flex gap-4 mt-3 mb-3 float-right">
              <Image
                src={"/assets/images/GooglePlay.svg"}
                alt="Storri"
                height={45}
                width={145}
              />
              <Image
                src={"/assets/images/AppStore.svg"}
                alt="Storri"
                height={45}
                width={145}
              />
            </div>
          </div>
        )}
      </div>
      {currentRoute != "/policy" && (
        <div className="text-[#7d7d7d] text-xs flex px-5 lg:px-20 gap-3 lg:gap-5 float-right mb-10">
          <p>© 2023 Storri ai</p>
          <a href="/policy" target="_blank">
            <p>Privacy Policy</p>
          </a>
          <a href="/terms" target="_blank">
            <p>Terms & Conditions</p>
          </a>
        </div>
      )}
    </>
  );
};

export default Footer;
