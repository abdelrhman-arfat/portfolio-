import Link from "next/link";
import React from "react";
import GownCard from "../cards/GownCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroSection = () => {
  useGSAP(() => {
    gsap.to(".word", { x: 0, opacity: 1, duration: 1, delay: 0.4});
    gsap.to(".card", { x: 0, opacity: 1, duration: 1, delay: 0.4});
  }, []);
  return (
    <div className="w-[90%] mx-auto py-10">
      <div className="w-full gap-7 flex flex-col md:flex-row items-center justify-between">
        <div
          style={{
            transform: "translateX(-400px)",
          }}
          className="flex word opacity-0 flex-col gap-4 w-full md:w-1/2"
        >
          <h1 className="text-3xl">Welcome , To My Portfolio</h1>
          <p>
            I am AbdelRhman Yasser , I am 18 Years old , I am studying in the
            faculty of computer information in Tanta university , I am a JR
            front-end developer .
          </p>
          <Link
            href="#about"
            className="px-3 py-1.5 hover:bg-orange-500 duration-200 bg-orange-400 text-white w-fit rounded-xl"
          >
            About Me
          </Link>
        </div>

        <div
          style={{
            transform: "translateX(400px)",
          }}
          className="w-full opacity-0 card md:w-1/2"
        >
          <GownCard />
        </div>
      </div>
      <hr className="my-10 max-w-[1000px] mx-auto" />
    </div>
  );
};

export default HeroSection;
