import React from "react";
import Image from "next/image";
import "../styles/styles.css";

import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import EarlyAccessModal from "@/app/components/EarlyAccessModal";

import { ModalUtils } from "@/app/utils/utils";

export default function Terms() {
  const { isModalOpen, openModal, closeModal } = ModalUtils();

  return (
    <>
      <main className="max-w-[1440px] mx-auto">
        <NavBar openModal={openModal} />
        <div className="px-5 lg:px-20 pt-10 mt-20">
          <div className="flex justify-center lg:justify-between">
            <p className="text-4xl lg:text-7xl font-bold text-center md:text-left">
              Terms
              <br />& Condition
            </p>
            <Image
              className="hidden lg:block"
              alt="logo"
              src={"/assets/images/logoIcon.svg"}
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="bg-white mt-5 pt-5 px-5 lg:px-20 box-shadow-custom">
          <p>
            First a big thank you for choosing Storri AI. You are reading the
            terms of service (the “Terms”), which govern the relationship and
            serve as an agreement between you and us and set forth the terms and
            conditions by which you may access and use the platform and our
            related application.
            <br />
            <br /> <b>Effective Date: 20th June 2023</b>
            <br />
            <br />
            These Terms of Service (&quot;Terms&quot;) are a contract between you and
            Storri AI Ltd. They govern your access and use of our Storri
            AI&quot;s services, mobile and web apps, products, and content
            (“Services”).
          </p>
          <p className="text-2xl font-bold mt-8 mb-3">Accepting the Terms</p>
          <p>
            These Terms of Condition (“Terms”) apply to your access to and use
            of the websites, mobile applications, and other online products and
            services (collectively, the “Services”) provided by Storri AI
            Limited (“Storri AI” or “we”). By clicking your consent (e.g.
            “Continue,” “Sign-in,” or “Sign-up,”) or by using our Services, you
            agree to these Terms and that you agree to comply with them.
            <br />
            <br />
            Please read our terms of service carefully.
          </p>
          <p className="text-2xl font-bold mt-8 mb-3">Your account with Us</p>
          <p>
            To access or use some of our Services, you must create an account
            with us. When you create this account, you must provide accurate and
            up-to-date information. It is important that you maintain and
            promptly update your details and any other information you provide
            to us, to keep such information current and complete.
            <br />
            <br />
            It is important that you keep your account password confidential and
            that you do not disclose it to any third party. You agree that you
            are solely responsible (to us and to others) for the activity that
            occurs under your account.
            <br />
            <br />
            We reserve the right to disable your user account at any time,
            including if you have failed to comply with any of the provisions of
            these Terms, or if activities occur on your account which, in our
            sole discretion, would or might cause damage to or impair the
            Services or infringe or violate any third party rights, or violate
            any applicable laws or regulations.
          </p>
          <p className="text-2xl font-bold mt-8 mb-3">
            Rights & responsibilities on Content
          </p>
          <p>
            You own the rights to the content you create and post on Storri AI.
            <br />
            <br />
            You&quot;re responsible for the content you post. This means you assume
            all risks related to it, including someone else&quot;s claims relating to
            intellectual property or other legal rights
            <br />
            <br />
            You&quot;re welcome to share your published content on Storri AI to other
            social platforms or accounts of yours.
            <br />
            <br />
            By posting content to Storri AI, you have given us the license to
            use your content. We may also use your content to promote Storri AI.
            We will never sell your content to third parties without your
            explicit permission.
          </p>
          <p className="text-2xl font-bold mt-8 mb-3">
            Our content and services
          </p>
          <p>
            Do not interfere with, or disrupt, the access of any user, host, or
            network, including sending a virus, overloading, flooding, spamming,
            mail-bombing the Services, or by scripting the creation of content
            or accounts in such a manner as to interfere with or create an undue
            burden on the Services.
            <br />
            <br />
            Scraping the Services is totally prohibited, but Crawling the
            Services is allowed if done in accordance with the provisions of our
            robots.txt file
          </p>
          <p className="text-2xl font-bold mt-8 mb-3">No children</p>
          <p>
            Storri AI is only for people 13 years old and over. By using Storri
            AI, you affirm that you are over 13. If we learn someone under 13 is
            using Storri AI, we&quot;ll terminate their account.
          </p>
          <p className="text-2xl font-bold mt-8 mb-3">
            Incorporated rules and policies
          </p>
          <p>
            By using the Services, you agree to let Storri AI collect and use
            information as detailed in our Privacy Policy.
            <br />
            <br />
            To enable a functioning community, we have House Rules for
            commenters, House rules for content providers
            <br />
            <br />
            By using Storri AI, you agree to follow these Rules and Policies. If
            you don&quot;t, we may remove your content, or suspend or delete your
            account.
          </p>
          <p className="text-2xl font-bold mt-8 mb-3">Disclaimer of warranty</p>
          <p>
            No implied warranty of merchantability, fitness for a particular
            purpose,
            <br />
            <br />
            availability, security, title, or non-infringement. You use our
            services at your own risk and discretion. That means they don&quot;t come
            with any warranty. By using Storri AI, you agree to follow these
            Rules and Policies. If you don&quot;t, we may remove your content, or
            suspend or delete your account.
          </p>
          <p className="text-2xl font-bold mt-8 mb-3">
            Responsibilities for comments
          </p>
          <p>
            Kindly note that any opinion or comment being shared on your post
            isn&quot;t of Storri AI but of commenters.
          </p>
          <p className="text-2xl font-bold mt-8 mb-3">Entire agreement</p>
          <p>
            These Terms (including any document incorporated by reference into
            them) are the whole agreement between Storri AI and you concerning
            the Services.
          </p>
        </div>
        <Footer />
        <EarlyAccessModal isModalOpen={isModalOpen} closeModal={closeModal} />
      </main>
    </>
  );
}
