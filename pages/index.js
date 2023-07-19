"use client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Image from "next/image";
import "../styles/styles.css";
import NavBar from "@/app/components/NavBar";
import Hero from "@/app/components/Hero";
import Highlight from "@/app/components/Highlight";
import RegularUsers from "@/app/components/RegularUsers";
import Discover from "@/app/components/Discover";
import Creators from "@/app/components/Creators";
import StorriAI from "@/app/components/StorriAI";
import Footer from "@/app/components/Footer";
import EarlyAccessModal from "@/app/components/EarlyAccessModal";

// import About from "./about";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
//   const router = useRouter();
//   const currentRoute = router.pathname;

//   console.log(router);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
 
  return (
    <main className="max-w-[1380px] mx-auto">
      <NavBar openModal={openModal} />
      <Hero openModal={openModal} />
      <Highlight />
      <RegularUsers />
      <Discover />
      <Creators />
      <StorriAI openModal={openModal} />
      <Footer />
      <EarlyAccessModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </main>
  );
}
