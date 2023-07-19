import React, { useState } from "react";
import Image from "next/image";

const EarlyAccessModal = ({ isModalOpen, closeModal }) => {
  const [noHandle, setnohandle] = useState(false);
  const [earlySuccess, setearlySuccess] = useState(false);
  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 bg-gray-900 text-black">
          <div className="bg-white rounded-lg shadow-lg p-7">
            <div className="flex justify-between mb-10">
              <div className="">
                <Image
                  src={"/assets/images/logostorri.png"}
                  alt="Storri"
                  width={100}
                  height={40}
                />
              </div>
              <button onClick={() => closeModal()}>&#10006;</button>
            </div>
            <div className="font-bold text-4xl mb-7">
              Join Our
              <br />
              Early Access
            </div>
            <div className="flex flex-col">
              <label className="text-sm mb-1">Email</label>
              <input
                className="border border-black rounded-lg min-w-[320px] py-3 pl-3"
                placeholder="Enter your email"
              />
            </div>
            {!noHandle && (
              <div className="flex flex-col mt-5">
                <label className="text-sm mb-1">Twitter Handle</label>
                <input
                  className="border border-black rounded-lg min-w-[320px] py-3 pl-3"
                  placeholder="Enter your Twitter handle e.g @storri_ai"
                />
              </div>
            )}

            <div className="flex mt-5">
              <label className="checkbox-container text-sm">
                <input
                  className="hidden"
                  type="checkbox"
                  checked={noHandle}
                  onChange={() => setnohandle(!noHandle)}
                />
                <span className="checkmark"></span>I do not have a Twitter
                account
              </label>
            </div>
            <button
              onClick={() => {
                setearlySuccess(!earlySuccess);
                closeModal();
              }}
              className="rounded-xl w-full bg-black text-white py-3 px-5 mt-7"
            >
              Join
            </button>
          </div>
        </div>
      )}
      {earlySuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 bg-gray-900 text-black">
          <div className="bg-white rounded-lg shadow-lg p-7">
            <button
              className="float-right"
              onClick={() => setearlySuccess(!earlySuccess)}
            >
              &#10006;
            </button>
            <div className="flex flex-col items-center gap-5">
              <Image
                alt="success"
                src={"/assets/images/success.svg"}
                height={100}
                width={100}
              />
              <p className="font-bold text-3xl max-w-[400px] text-center">
                Early Access
                <br />
                Joined Successfully
              </p>
              <p className="font-light max-w-[400px] text-center">
                Congratulations on securing early access to our platform! We&apos;ll
                notify you via email when we go live. Stay tuned!
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EarlyAccessModal;
