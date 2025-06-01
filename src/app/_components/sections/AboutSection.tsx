"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { TThem } from "../context/Context";

const AboutSection = ({ them }: { them: TThem }) => {
  const aboutRef = useRef<HTMLInputElement>(null);

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div
      id="about"
      ref={aboutRef}
      className={`min-h-screen py-24 sm:px-4 md:px-10 flex flex-col gap-16 md:w-[90%] max-w-7xl mx-auto relative overflow-hidden`}
    >
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15),rgba(255,255,255,0))] opacity-70" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),rgba(255,255,255,0))] opacity-50" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.15),rgba(255,255,255,0))] opacity-50" />
      </div>

      <motion.h1
        className="section-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={titleVariants}
      >
        About Me
      </motion.h1>

      <motion.div
        className={`card-base p-8 relative z-10 transform transition-all duration-300`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={contentVariants}
        whileHover={{ scale: 1.01 }}
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-xl leading-9 tracking-wide mb-10">
            My name is AbdalRhman Yasser. I am 18 years old from Tanta, Egypt. I
            am a junior MERN Stack developer with a strong passion for backend
            development.
          </p>

          <motion.div className="space-y-8" variants={cardVariants}>
            <motion.div
              className={`p-6 rounded-2xl glass-effect ${them === "dark" ? "bg-indigo-500/5" : "bg-indigo-500/5"}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Frontend Development
              </h2>
              <p className="text-lg leading-8 tracking-wide">
                In frontend development, I use Next.js and React.js with
                TypeScript for enhanced type security, Redux Toolkit for state
                management, and Redux Toolkit Query for APIs. I also work with
                Tailwind CSS for styling ,shadcn ui and have basic knowledge of Framer
                motion for animations.
              </p>
            </motion.div>

            <motion.div
              className={`p-6 rounded-2xl glass-effect ${them === "dark" ? "bg-purple-500/5" : "bg-purple-500/5"}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Backend Development
              </h2>
              <p className="text-lg leading-8 tracking-wide">
                For backend development, I use Express with TypeScript to build
                secure servers, MongoDB with Mongoose for NoSQL databases, and
                MySQL for SQL databases with orm like prisma , know some about
                nestjs and java with spring boot. Currently, I am learning Java
                with Spring Boot to expand my backend development skills.
              </p>
            </motion.div>

            <motion.p
              className="text-xl leading-9 tracking-wide mt-6 text-center italic"
              variants={itemVariants}
            >
              I am a fast learner and always eager to take on new challenges.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
