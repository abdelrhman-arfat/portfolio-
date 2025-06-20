"use client";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { TThem } from "../context/Context";

const TechIconsSection = ({ them }: { them: TThem }) => {
  const technologies = [
    "nodejs",
    "express",
    "js",
    "ts",
    "react",
    "next",
    "redis",
    "php",
    "laravel",
    "python",
    "fastapi",
    "docker",
    "aws",
    "redux",
    "tailwind",
    "Oauth",
    "shadcn",
    "mongodb",
    "mysql",
    "prisma",
    "stripe",
    "nest",
    "java",
    "springboot",
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  // Infinite scroll animation
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <div className="w-full py-16 overflow-hidden relative">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="w-[90%] max-w-7xl mx-auto relative z-10">
        <motion.h1
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          Tech Stack
        </motion.h1>

        <motion.div
          ref={containerRef}
          className="relative w-full overflow-hidden py-8"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div
            className="flex gap-8 w-max"
            animate={{
              x: ["-10%", "-60%"],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 20,
                  ease: "linear",
                },
              },
            }}
          >
            {[...technologies, ...technologies].map((name, index) => (
              <motion.div
                key={index}
                className={`group flex-shrink-0 w-32 h-32 flex items-center justify-center rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl ${them === "dark" ? "bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)]" : "bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)]"}`}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: `0 10px 25px ${them === "dark" ? "rgba(79, 70, 229, 0.2)" : "rgba(99, 102, 241, 0.15)"}`,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={`/${name}.svg`}
                  alt={`${name} icon`}
                  width={50}
                  height={50}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechIconsSection;
