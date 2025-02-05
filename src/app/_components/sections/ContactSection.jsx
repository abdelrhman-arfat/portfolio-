"use client";
import { FaInstagramSquare } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const contentRef = useRef();
  useGSAP(() => {
    if (contentRef.current) {
      const children = Array.from(contentRef.current.children);
      gsap.fromTo(
        children,
        {
          opacity: 0,
          y: 50,
        },
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
        "#header",
        {
          opacity: 0,
          y: 50,
        },
        {
          duration: 1,
          y: 0,
          stagger: 0.2,
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

  return (
    <div className="w-full mt-60 py-8 sm:mt-0 sm:py-3">
      <h1
        id="header"
        className=" opacity-0 text-center text-3xl md:text-4xl font-bold text-white"
      >
        Contact Me
      </h1>
      <div
        ref={contentRef}
        className="w-[90%] xl:w-[80vw] mx-auto py-10 px-4 flex justify-center gap-1 md:gap-5 h-[200px] "
      >
        <a
          className="opacity-0 duration-500 flex-1 flex items-center justify-center w-[100px] h-[100px]  cursor-pointer hover:text-rose-500 text-white bg-neutral-900 rounded-md"
          href="https://www.instagram.com/abdo_yas.ser/"
          target="_blank"
        >
          <FaInstagramSquare className=" text-3xl" />
        </a>
        <a
          className="opacity-0 duration-500 flex-1  flex items-center justify-center w-[100px] h-[100px]  cursor-pointer hover:text-blue-500 text-white bg-neutral-900 rounded-md"
          href="https://www.behance.net/anaarfat"
          target="_blank"
        >
          <FaBehanceSquare className=" text-3xl" />
        </a>
        <a
          className="opacity-0 duration-500 flex-1  flex items-center justify-center w-[100px] h-[100px]  cursor-pointer hover:text-blue-500 text-white bg-neutral-900 rounded-md"
          href="https://www.linkedin.com/in/abdo-yasser-946493221"
          target="_blank"
        >
          <FaLinkedin className=" text-3xl" />
        </a>
        <a
          className="opacity-0 duration-500 flex-1  flex items-center justify-center w-[100px] h-[100px]  cursor-pointer hover:text-green-500 text-white bg-neutral-900 rounded-md"
          href="https://wa.me/201014016899"
          target="_blank"
        >
          <FaWhatsappSquare className=" text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
