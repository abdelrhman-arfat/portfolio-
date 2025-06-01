"use client";
import { FaGithub, FaDownload } from "react-icons/fa";
import React, { useContext, useState, useEffect } from "react";
import { ThemContext } from "../context/Context";
import Switch from "../toggles/Switch";
import Link from "next/link";
import { motion } from "framer-motion";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const context = useContext(ThemContext);
  if (!context) {
    throw new Error("ThemContext must be used within a ThemContext.Provider");
  }
  const { them, setThem } = context;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Handle scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDownload = () => {
    // Replace with your actual CV file path
    const cvUrl = "/cv.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Abdo_Yasser_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Animation variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
    hidden: {
      scale: 0.5,
      x: -30,
      opacity: 0,
      filter: "blur(8px)",
    },
    visible: {
      scale: 1,
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.1,
      },
    },
  };

  const navLinksVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
      },
    },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={`fixed top-0 left-0 right-0 z-20 w-full h-[80px] transition-all duration-300 ${className} ${them} px-3
        ${
          isScrolled
            ? `shadow-lg ${
                them === "dark"
                  ? "bg-neutral-900/85 backdrop-blur-md"
                  : "bg-white/85 backdrop-blur-md"
              }`
            : ""
        }`}
    >
      <nav className="w-[90%] h-full mx-auto flex items-center justify-between">
        <motion.h1
          variants={logoVariants}
          className="text-xl sm:text-2xl font-semibold tracking-wide"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Abdo Yasser
        </motion.h1>

        <motion.div
          className="flex items-center gap-4"
          variants={navLinksVariants}
        >
          <motion.button
            variants={navItemVariants}
            onClick={handleDownload}
            className={`flex items-center gap-2 px-2 py-1 sm:px-4 sm:py-2 rounded-md text-white transition-all duration-200
              ${
                them === "dark"
                  ? "bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/20 hover:shadow-blue-500/30"
                  : "bg-blue-500 hover:bg-blue-600 shadow-md shadow-blue-400/20 hover:shadow-blue-400/30"
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="sm:text-lg" />
            <span className="hidden sm:inline">Download CV</span>
          </motion.button>

          <motion.div variants={navItemVariants}>
            <Link href="https://github.com/abdelrhman-arfat" className="block">
              <motion.div
                whileHover={{
                  scale: 1.15,
                  rotate: 5,
                  backgroundColor: them === "dark" ? "#333" : "#e5e5e5",
                }}
                whileTap={{ scale: 0.9 }}
                className={`flex items-center justify-center text-2xl rounded-full w-[35px] h-[35px] p-1 transition-colors duration-150
                  ${
                    them === "dark"
                      ? "hover:bg-neutral-700 hover:text-white"
                      : "hover:bg-neutral-200 hover:text-black"
                  }`}
              >
                <FaGithub />
              </motion.div>
            </Link>
          </motion.div>

          <motion.div variants={navItemVariants}>
            <Switch them={them} setThem={setThem} />
          </motion.div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
