import Link from "next/link";
import React from "react";
import GownCard from "../cards/GownCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TThem } from "../context/Context";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = ({ them }: { them: TThem }) => {
  useGSAP(() => {
    // Hello word animation with enhanced effects
    gsap.fromTo(
      ".hello-word",
      {
        x: -400,
        opacity: 0,
        scale: 0.8,
        filter: "blur(4px)",
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power4.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: ".hello-word",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          markers: false,
          scrub: false,
          once: false,
        },
      }
    );

    // Card animation with enhanced effects
    gsap.fromTo(
      ".card",
      {
        x: 400,
        opacity: 0,
        scale: 0.8,
        filter: "blur(10px)",
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power4.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: ".card",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          markers: false,
          scrub: false,
          once: false,
        },
      }
    );

    // Glow text animation with enhanced effects
    gsap.fromTo(
      ".glow-text",
      {
        opacity: 0,
        scale: 0.9,
        filter: "blur(2px)",
      },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.2,
        delay: 0.8,
        stagger: {
          each: 0.3,
          from: "start",
          ease: "power2.out",
        },
        scrollTrigger: {
          trigger: ".glow-text",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          markers: false,
          scrub: false,
          once: false,
        },
      }
    );
  }, []);

  return (
    <div className="w-[90%] mx-auto py-32 relative overflow-hidden">
      {/* Dark mode effects */}
      {them === "dark" && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-800/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gray-800/20 rounded-full blur-3xl" />
        </div>
      )}

      {/* Light mode effects */}
      {them === "light" && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />
        </div>
      )}

      <div className="w-full gap-7 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="flex hello-word flex-col gap-6 w-full md:w-1/2">
          <h1
            className={`text-4xl py-4  md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent glow-text`}
          >
            Welcome to My Portfolio
          </h1>
          <p
            className={`text-lg leading-relaxed ${them === "dark" && "text-gray-300"}`}
          >
            I am AbdelRhman Yasser, an 18-year-old student at Tanta University's
            Faculty of Computer Information. As a Junior Mern Stack Developer, I
            combine technical skills with creative problem-solving to build
            engaging digital experiences.
          </p>
          <div className="mt-4 ml-3">
            <Link
              href="#about"
              className={`
                block
                w-fit
                px-4 py-2
                text-lg font-medium
                rounded-xl
                transition-all duration-300
                hover:scale-105
                active:scale-95
                ${
                  them === "dark"
                    ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30"
                    : "bg-orange-400 hover:bg-orange-500 text-white shadow-lg shadow-orange-400/30"
                }
              `}
            >
              About Me
            </Link>
          </div>
        </div>

        <div className="w-full card md:w-1/2">
          <GownCard />
        </div>
      </div>
      <hr
        className={`my-10 max-w-[1000px] mx-auto ${
          them === "dark" ? "border-neutral-700" : "border-neutral-200"
        }`}
      />
    </div>
  );
};

export default HeroSection;
