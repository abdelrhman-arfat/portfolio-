"use client";
import { FaGithub, FaDownload } from "react-icons/fa";
import React, { useContext, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ThemContext } from "../context/Context";
import Switch from "../toggles/Switch";
import gsap from "gsap";
import Link from "next/link";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const themeContext = useContext(ThemContext);
  const [isScrolled, setIsScrolled] = useState(false);

  if (!themeContext) {
    console.error("Theme context is not available");
    return null;
  }

  const { them, setThem } = themeContext;

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

  useGSAP(() => {
    // Handle scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    // Initial animation
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.fromTo(
      "#header",
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
      }
    )
      .fromTo(
        "#logo",
        {
          scale: 0.5,
          x: -50,
          rotateX: 180,
          transformOrigin: "center center",
          color: "transparent",
          textShadow: "0 0 20px rgba(0,0,0,0.8)",
        },
        {
          scale: 1.2,
          x: 0,
          rotateX: 0,
          color: them === "dark" ? "#ffffff" : "#000000",
          textShadow: "none",
          duration: 1,
          ease: "elastic.out(1, 0.5)",
          stagger: 0.1,
        },
        "-=0.3"
      )
      .to("#logo", {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      })
      .fromTo(
        "#header .nav-links",
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
        },
        "-=0.3"
      );

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [them]);

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 shadow-sm w-full h-[80px] transition-all duration-150 ${
        isScrolled ? "bg-opacity-90 backdrop-blur-sm" : ""
      } ${className} ${them} px-3`}
    >
      <nav className="w-[90%] h-full mx-auto flex items-center justify-between">
        <h1
          id="logo"
          className="text-xl sm:text-2xl font-semibold tracking-wide"
        >
          Abdo Yasser
        </h1>
        <div className="flex items-center gap-4 nav-links">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-2 py-1 sm:px-4 sm:py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
          >
            <FaDownload className="sm:text-lg" />
            <span className="hidden sm:inline">Download CV</span>
          </button>
          <Link
            href="https://github.com/abdelrhman-arfat"
            className="hover:scale-110 transition-transform duration-150"
          >
            <FaGithub className="text-2xl hover:bg-neutral-300 hover:text-black rounded-full duration-150 w-[30px] h-[30px] p-1" />
          </Link>
          <Switch them={them} setThem={setThem} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
