"use client";
import {
  FaInstagramSquare,
  FaBehanceSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef } from "react";
import { TThem } from "../context/Context";

const ContactSection = ({ them }: { them: TThem }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.9,
      filter: "blur(5px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
      rotate: -5,
      filter: "blur(3px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.5,
      },
    },
  };

  const links = [
    {
      icon: (
        <FaInstagramSquare className="text-5xl transition-all duration-500 group-hover:text-pink-500" />
      ),
      href: "https://www.instagram.com/abdo_yas.ser/",
      hoverColor: "hover:border-pink-500",
      glowColor: "hover:shadow-[0_0_20px_rgba(236,72,153,0.7)]",
    },
    {
      icon: (
        <FaBehanceSquare className="text-5xl transition-all duration-500 group-hover:text-blue-500" />
      ),
      href: "https://www.behance.net/anaarfat",
      hoverColor: "hover:border-blue-500",
      glowColor: "hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]",
    },
    {
      icon: (
        <FaLinkedin className="text-5xl transition-all duration-500 group-hover:text-blue-700" />
      ),
      href: "https://www.linkedin.com/in/abdo-yasser-946493221",
      hoverColor: "hover:border-blue-700",
      glowColor: "hover:shadow-[0_0_20px_rgba(29,78,216,0.7)]",
    },
    {
      icon: (
        <FaWhatsappSquare className="text-5xl transition-all duration-500 group-hover:text-green-500" />
      ),
      href: "https://wa.me/201014016899",
      hoverColor: "hover:border-green-500",
      glowColor: "hover:shadow-[0_0_20px_rgba(34,197,94,0.7)]",
    },
  ];

  return (
    <div className="w-full max-h-[300px] overflow-y-hidden mt-96 py-8 sm:mt-0 sm:py-3">
      <motion.h1
        id="contact"
        className={`text-center text-3xl md:text-4xl font-bold ${them}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={titleVariants}
      >
        Contact Me
      </motion.h1>
      <motion.div
        ref={contentRef}
        className="w-[90%] xl:w-[80vw] mx-auto py-10 px-4 flex flex-wrap justify-center gap-4 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {links.map(({ icon, href, hoverColor, glowColor }, index) => (
          <motion.a
            key={index}
            className={`flex items-center justify-center w-[90px] h-[90px] md:w-[100px] md:h-[100px] rounded-md transition-all duration-300 transform group border-2 
              ${hoverColor} 
              ${glowColor}
              ${
                them === "light"
                  ? "bg-neutral-100 text-neutral-900 border-neutral-300 hover:bg-white"
                  : "bg-neutral-600 text-white border-neutral-500 hover:bg-neutral-500"
              }`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            {icon}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default ContactSection;
