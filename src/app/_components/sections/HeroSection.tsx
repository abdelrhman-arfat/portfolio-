"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { TThem } from "../context/Context";

const HeroSection = ({ them }: { them: TThem }) => {
  const helloWordVariants = {
    hidden: {
      x: -100,
      opacity: 0,
      scale: 0.8,
      filter: "blur(4px)",
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 90,
        duration: 1,
        delay: 0.2,
      },
    },
  };

  const glowTextVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      filter: "blur(2px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  return (
    <div className="w-full mx-auto py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="w-[90%] max-w-4xl mx-auto flex flex-col items-start relative z-10">
        <motion.div
          className="flex flex-col gap-6 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={helloWordVariants}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold section-title text-left mb-2"
            variants={glowTextVariants}
          >
            Welcome to My Portfolio
          </motion.h1>
          <p
            className={`text-lg md:text-xl leading-relaxed ${
              them === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            I am Abdelrhman Yasser,I am 18-year-old Computer and Information
            student at Tanta University with a strong passion for software
            development. As a Junior MERN Stack Developer,Php Laravel ,basics
            python & fastapi , basic java with spring boot ,docker, I specialize
            in building clean, scalable, and interactive web applications. I
            combine solid technical skills with a creative mindset to craft
            seamless digital experiences that solve real-world problems.
          </p>
          <div className="mt-6 flex  flex-col sm:flex-row gap-4  mx-auto">
            <Link
              href="#about"
              className="bg-indigo-600 text-white rounded-md px-6 py-3 flex items-center justify-center gap-2 w-[200px] mx-auto transition-transform duration-300 hover:bg-indigo-700"
            >
              About Me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            <Link
              href="#projects"
              className="border-2 border-indigo-600 text-indigo-600 rounded-md px-6 py-3 flex items-center justify-center gap-2 w-[200px] mx-auto transition-transform duration-300 hover:bg-indigo-600 hover:text-white"
            >
              Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="w-full max-w-7xl mx-auto mt-20">
        <hr
          className={`max-w-[1000px] mx-auto ${
            them === "dark" ? "border-indigo-900/30" : "border-indigo-200/70"
          }`}
        />
      </div>
    </div>
  );
};

export default HeroSection;
