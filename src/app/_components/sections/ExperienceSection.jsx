"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const mainRef = useRef(null);
  const Words = [
    "React.js and Next.js JavaScript Framework, Good knowledge about Typescript ",
    "Understanding of API and CRUD , Async functions and asynchronous programming",
    "Good Knowledge of GSAP Js for animation ,Tailwind CSS framework for styling and responsive design",
    "Can Use Redux and Redux Toolkit, Can Use Axios for API integration",
    "Can Use Git and GitHub ,Fast Learning and adaptive to new technologies",
  ];

  useGSAP(() => {
    if (mainRef.current) {
      const children = Array.from(mainRef.current.children);

      gsap.fromTo(
        children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div className="flex text-white mt-10 flex-col md:justify-between gap-10 sm:gap-1 py-16 my-10 px-3 md:px-10 md:flex-row w-[80vw] md:w-[90vw] xl:w-[80vw] mx-auto">
      <div ref={mainRef} className="w-full flex flex-col gap-10">
        <h1 className="text-3xl xl:text-5xl font-semibold ">Skills :</h1>
        {Words.map((word, index) => (
          <h1
            key={index}
            className="opacity-0 text-[16px] md:text-xl w-fit hover:text-orange-400 duration-300  "
          >
            {word}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
