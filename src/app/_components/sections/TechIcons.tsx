"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Draggable);
const TechIcons = () => {
  const namse = [
    "js",
    "ts",
    "react",
    "next",
    "redux",
    "tailwind",
    "bootstrap",
    "GSAP",
  ];
  const mainRef = useRef<HTMLInputElement>(null);
  useGSAP(() => {
    if (mainRef.current) {
      const children = Array.from(mainRef.current.children) as HTMLElement[];
      Draggable.create("#draggable-icon", {
        type: "rotation",
        inertia: true,
      });
      gsap.fromTo(
        children,
        { opacity: 0, y: 100, x: 100 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);
  return (
    <div
      ref={mainRef}
      className="w-[90%] grid grid-cols-3 sm:grid-cols-5 gap-2 md:gap-6 md:grid-cols-8 xl:w-[80vw] mx-auto my-10 px-10 "
    >
      {namse.map((name, index) => (
        <div
          id="draggable-icon"
          className="bg-neutral-800 p-3 duration-200 w-[80px] h-[80px] flex items-center justify-center rounded-md"
          key={index}
        >
          <Image src={`/${name}.svg`} alt="icon" width={50} height={50}></Image>
        </div>
      ))}
    </div>
  );
};

export default TechIcons;
