"use client";
import gasp from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { transform } from "typescript";
const HeroSection = () => {
  useGSAP(() => {
    gasp.to("#hero-child", {
      opacity: 1,
      duration: 1,
      delay: 1,
      stagger: 0.24,
    });
    gasp.to("#hero", {
      opacity: 1,
      duration: 1,
      y: 0,
      delay: 1.2,
      stagger: 0.2,
    });
    gasp.to("#hero-image", {
      y: 20,
      repeat: -1,
      yoyo: true,
      duration: 9,
      ease: "bounce.inOut",
      delay: 0.6,
    });
  });
  return (
    <div className="w-[90%] xl:w-[80vw] mx-auto my-10 md:mt-20 flex md:items-center justify-between px-10 py-16 md:flex-row flex-col gap-10 ">
      <div
        style={{ transform: "translateY(20px)" }}
        className=" h-full  flex flex-col gap-5 w-full md:w-2/3 max-w-[550px]"
      >
        <h1
          id="hero-child"
          className="text-5xl opacity-0 font-bold text-gray-300 tracking-wide"
        >
          Hi, I am AbdelRhman{" "}
        </h1>
        <p id="hero-child" className="text-white opacity-0 ">
          I am a jounior front-end developer with a passion for creating
          visually stunning and user-friendly websites.
        </p>
        <p id="hero-child" className="text-white  opacity-0">
          I have a strong understanding of HTML, CSS, and JavaScript, and I am
          having a knowledge in using frameworks such as React and Next.js to
          build dynamic and interactive web applications.
        </p>
        <p id="hero-child" className="text-white  opacity-0">
          I am also have an experience in using graphic desgin tools such as
          photoshop and illustrator.
        </p>
        <a
          style={{ transform: "translateY(20px)" }}
          id="hero-child"
          className=" px-4 py-2 opacity-0 hover:bg-green-700 bg-green-800 duration-300 w-fit rounded-md text-white"
          href="#about"
        >
          About me
        </a>
      </div>
      <div
        id="hero"
        className="opacity-0 h-full hidden md:flex flex-col gap-5  "
      >
        <Image
          id="hero-image"
          src="/DevVectorImage.png"
          alt="Programming vector png"
          width={400}
          height={400}
          priority
        ></Image>
      </div>
    </div>
  );
};

export default HeroSection;
