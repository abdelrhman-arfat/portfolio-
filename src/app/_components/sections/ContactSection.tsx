"use client";
import { FaInstagramSquare, FaBehanceSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
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
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 50 },
        {
          duration: 1,
          y: 0,
          stagger: 0.1,
          opacity: 1,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.fromTo(
        "#contact",
        { opacity: 0, y: 50 },
        {
          duration: 1,
          y: 0,
          opacity: 1,
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
      icon: <FaInstagramSquare className="text-5xl transition-colors duration-300 group-hover:text-pink-500" />,
      href: "https://www.instagram.com/abdo_yas.ser/",
      hoverColor: "hover:border-pink-500",
    },
    {
      icon: <FaBehanceSquare className="text-5xl transition-colors duration-300 group-hover:text-blue-500" />,
      href: "https://www.behance.net/anaarfat",
      hoverColor: "hover:border-blue-500",
    },
    {
      icon: <FaLinkedin className="text-5xl transition-colors duration-300 group-hover:text-blue-700" />,
      href: "https://www.linkedin.com/in/abdo-yasser-946493221",
      hoverColor: "hover:border-blue-700",
    },
    {
      icon: <FaWhatsappSquare className="text-5xl transition-colors duration-300 group-hover:text-green-500" />,
      href: "https://wa.me/201014016899",
      hoverColor: "hover:border-green-500",
    },
  ];

  return (
    <div className="w-full mt-96 py-8 sm:mt-0 sm:py-3">
      <h1 id="contact" className={`opacity-0 text-center text-3xl md:text-4xl font-bold ${them}`}>
        Contact Me
      </h1>
      <div
        ref={contentRef}
        className="w-[90%] xl:w-[80vw] mx-auto py-10 px-4 flex flex-wrap justify-center gap-4 md:gap-6"
      >
        {links.map(({ icon, href, hoverColor }, index) => (
          <a
            key={index}
            className={`opacity-0 flex items-center justify-center w-[90px] h-[90px] md:w-[100px] md:h-[100px] rounded-md transition-all duration-300 transform hover:scale-110 group border-2 
              ${hoverColor} 
              ${them === "light" ? "bg-neutral-100 text-neutral-900 border-neutral-300" : "bg-neutral-600 text-white border-neutral-500"}`}
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
