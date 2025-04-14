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
          y: 200,
          scale: 0.6,
          rotation: -15,
          filter: "blur(15px)",
          clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        },
        {
          duration: 1.8,
          y: 0,
          scale: 1,
          rotation: 0,
          opacity: 1,
          filter: "blur(0px)",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          stagger: {
            each: 0.2,
            from: "start",
            ease: "power4.out",
          },
          ease: "power4.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 85%",
            end: "top 20%",
            scrub: 0.3,
            toggleActions: "play none reverse none",
            markers: false,
            pin: false,
          },
        }
      );

      // Add text reveal animation
      const textElements = aboutRef.current?.querySelectorAll("p, h1, h2");
      if (textElements) {
        gsap.fromTo(
          textElements,
          {
            opacity: 0,
            y: 50,
            filter: "blur(10px)",
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.2,
            stagger: {
              each: 0.15,
              from: "start",
              ease: "power3.out",
            },
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top 90%",
              end: "top 20%",
              scrub: 0.3,
              toggleActions: "play none reverse none",
            },
          }
        );
      }

      // Add hover animation for the content box
      const contentBox = aboutRef.current?.querySelector(".content-box");
      if (contentBox) {
        gsap.to(contentBox, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
          paused: true,
          scrollTrigger: {
            trigger: contentBox,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none reverse none",
          },
        });
      }
    }
  }, []);

  return (
    <div
      id="about"
      ref={aboutRef}
      className={`min-h-screen rounded-3xl  py-24 px-4 md:px-10 flex flex-col gap-16 md:w-[90%] mx-auto relative overflow-hidden  ${
        them === "dark" ? "text-white" : "text-black"
      }`}
    >
      {them === "dark" ? (
        <>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))] opacity-50" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] opacity-30" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.3),rgba(255,255,255,0))] opacity-30" />
        </>
      ) : (
        <>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),rgba(255,255,255,0))] opacity-70" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),rgba(255,255,255,0))] opacity-50" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),rgba(255,255,255,0))] opacity-50" />
        </>
      )}
      <h1 className="w-full text-center text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent relative z-10">
        About Me
      </h1>
      <div
        className={`content-box ${
          them === "dark"
            ? "bg-neutral-800/30 backdrop-blur-md border-neutral-700/50 shadow-[0_0_30px_rgba(120,119,198,0.2)]"
            : "bg-neutral-100/50 backdrop-blur-sm border-neutral-200 shadow-[0_0_30px_rgba(59,130,246,0.1)]"
        } p-10 rounded-3xl border relative z-10 transform transition-all duration-300 hover:scale-[1.02]`}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-xl leading-9 tracking-wide mb-8">
            My name is AbdalRhman Yasser. I am 18 years old from Tanta, Egypt. I
            am a junior MERN Stack developer with a strong passion for backend
            development.
          </p>
          <div className="space-y-8">
            <div
              className={`p-6 rounded-2xl ${
                them === "dark"
                  ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 shadow-[0_0_20px_rgba(120,119,198,0.1)]"
                  : "bg-gradient-to-r from-blue-500/5 to-purple-500/5 shadow-[0_0_20px_rgba(59,130,246,0.05)]"
              }`}
            >
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Frontend Development
              </h2>
              <p className="text-lg leading-8 tracking-wide">
                In frontend development, I use Next.js and React.js with
                TypeScript for enhanced type security, Redux Toolkit for state
                management, and Redux Toolkit Query for APIs. I also work with
                Tailwind CSS for styling and have basic knowledge of GSAP for
                animations.
              </p>
            </div>
            <div
              className={`p-6 rounded-2xl ${
                them === "dark"
                  ? "bg-gradient-to-r from-purple-500/10 to-blue-500/10 shadow-[0_0_20px_rgba(120,119,198,0.1)]"
                  : "bg-gradient-to-r from-purple-500/5 to-blue-500/5 shadow-[0_0_20px_rgba(59,130,246,0.05)]"
              }`}
            >
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Backend Development
              </h2>
              <p className="text-lg leading-8 tracking-wide">
                For backend development, I use Express with TypeScript to build
                secure servers, MongoDB with Mongoose for NoSQL databases, and
                MySQL for SQL databases. Currently, I am learning Java with
                Spring Boot to expand my backend development skills.
              </p>
            </div>
            <p className="text-xl leading-9 tracking-wide mt-6 text-center italic">
              I am a fast learner and always eager to take on new challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
