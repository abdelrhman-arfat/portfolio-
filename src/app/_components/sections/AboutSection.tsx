"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useContext, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IThemContext, ThemContext, TThem } from "../context/Context";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = ({ them }: { them: TThem }) => {
  const aboutRef = useRef<HTMLInputElement>(null);
  useGSAP(() => {
    if (aboutRef.current) {
      const children = Array.from(aboutRef.current.children);
      gsap.fromTo(
        children,
        {
          opacity: 0,
          y: 70,
        },
        {
          duration: 1.5,
          y: 0,
          delay: 0.2,
          stragger: 0.2,
          opacity: 1,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div
      id="about"
      ref={aboutRef}
      className={`h-3/4 py-10 px-10 mt-20 flex flex-col gap-10 md:w-[83%] mx-auto ${
        them === "dark" ? "text-white" : "text-black"
      }`}
    >
      <h1 className="w-full text-center text-4xl ">About Me</h1>
      <div
        className={`${
          them === "dark" ? "bg-neutral-800" : "bg-neutral-100"
        } p-6`}
      >
        <p className="text-lg leading-8 ">
          My Name is AbdalRhman Yasser ,I am 18 years old ,I am from Tanta ,I am
          a JR front end developer ,I am a self-taught developer ,I am a fast
          learner ,I am working with React & Next js but i am better in next js
          , using redux toolkit-persist-RTK Query for state management , can use
          redux persist, I know about GSAP js and now improve my skills in GSAP
          js ,I am using tailwind css framework for styling and responsive
          design,I am a good team player ,I am in the team of graphic designers
          of my faculty union ,Now I am looking for a job as a front-end
          developer in a company that can help me improve my skills and
          knowledge.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
