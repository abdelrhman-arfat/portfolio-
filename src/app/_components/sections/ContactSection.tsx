"use client";
import {
  FaInstagramSquare,
  FaBehanceSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TThem } from "../context/Context";
gsap.registerPlugin(ScrollTrigger);

const ContactSection = ({ them }: { them: TThem }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (contentRef.current) {
      // Enhanced animation for the title
      gsap.fromTo(
        "#contact",
        {
          opacity: 0,
          y: 100,
          scale: 0.9,
          filter: "blur(5px)",
        },
        {
          duration: 1.5,
          y: 0,
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Enhanced animation for the social links
      gsap.fromTo(
        contentRef.current.children,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
          rotation: -15,
          filter: "blur(5px)",
        },
        {
          duration: 1.2,
          y: 0,
          scale: 1,
          rotation: 0,
          filter: "blur(0px)",
          stagger: {
            amount: 0.8,
            from: "center",
          },
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

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
    <div className="w-full max-h-[300px]  overflow-y-hidden mt-96 py-8 sm:mt-0 sm:py-3">
      <h1
        id="contact"
        className={`opacity-0 text-center text-3xl md:text-4xl font-bold ${them}`}
      >
        Contact Me
      </h1>
      <div
        ref={contentRef}
        className="w-[90%] xl:w-[80vw] mx-auto py-10 px-4 flex flex-wrap justify-center gap-4 md:gap-6"
      >
        {links.map(({ icon, href, hoverColor, glowColor }, index) => (
          <a
            key={index}
            className={`opacity-0 flex items-center justify-center w-[90px] h-[90px] md:w-[100px] md:h-[100px] rounded-md transition-all duration-500 transform hover:scale-110 group border-2 
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
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
