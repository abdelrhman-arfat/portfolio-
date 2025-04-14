"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import ProjectsCard from "../cards/ProjectsCard";
import { title } from "process";
import { link } from "fs";
import { TThem } from "../context/Context";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    link: "https://e-commerce-mern-stack-omega.vercel.app/",
    title: "full stack e-commerce app",
    desc: `
    Full-Stack E-commerce Project (MERN Stack)
This is a full-stack e-commerce platform built using the MERN stack, with a strong focus on backend development. The project ensures secure and efficient management of users, products, and orders, providing a seamless shopping experience.

🔹 Backend (Node.js & Express.js with Typescript )
Built using Node.js and Express.js for a robust and scalable server.

Utilizes MongoDB with Mongoose for efficient database management.

Implements JWT (JSON Web Token) for secure API authentication.

Uses bcrypt for password hashing to enhance security.

Includes protected middleware to manage user authentication and authorization.

Features:

User management: Ability to update full name, change password, and update profile picture.

Product interactions: Users can add products to favorites or cart, leave comments, and like products.

Email verification: Users must verify their email before interacting with products.

🔹 Admin Panel
Full control over users, orders, and products.

Ability to manage orders and update product details.

🔹 Frontend (Next.js & Redux Toolkit)
Developed with Next.js for server-side rendering and optimized performance.

Uses Redux Toolkit & RTK Query for efficient state management.

Styled with Tailwind CSS for a modern and responsive UI.

This project provides a secure, scalable, and feature-rich e-commerce experience, leveraging modern web technologies for both performance and usability. 🚀
    `,
  },
  {
    link: "book-booking-mern-stack.vercel.app",
    title: "full stack book app",
    desc: `Booking MERN Stack Project
A simple Book Application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with a focus on user authentication, role-based access control, and secure API endpoints.
📌 Key Features:
User Authentication (JWT, bcrypt)
Role-Based Access Control for different user roles
CRUD Operations (Create, Read, Update, Delete)
Secure API Endpoints
🛠️ Technologies Used:
Frontend: Next.js, TypeScript, Tailwind CSS
Backend: Node.js, Express.js, MongoDB
Authentication: JWT, bcrypt 

** may be the website not work because the server freezing with render.com **


`,
  },
  {
    link: "https://movie-website-seven-flame.vercel.app",
    title: "Movie Website",
    desc: `
Movie Website 🎬 (Next.js & TypeScript)
This movie website is built using Next.js and TypeScript, with a focus on performance, scalability, and seamless user experience. It offers a dynamic and interactive platform for movie enthusiasts.

🔹 Technologies Used:
Next.js & TypeScript for a modern and scalable frontend.

Redux Toolkit for efficient state management.

Tailwind CSS for sleek and responsive styling.

Internal backend APIs for data fetching and dynamic updates.

🔹 Features:
✅ User Authentication – Sign up and log in to access personalized features.
✅ Favorites & Watchlist – Add movies to your favorites or watchlist for easy access.
✅ Movie Filtering – Filter movies based on their type for a better browsing experience.
✅ Smooth & Dynamic UI – Ensures an intuitive and engaging user journey.
    `,
  },
  {
    link: "https://gaming-website-one.vercel.app",
    title: "Gaming Website",
    desc: "Gaming website with api integration for some games and filtering with platforms",
  },
  {
    link: "http://mwaket.vercel.app",
    title: "Prayers Time",
    desc: "Prayers Website with timer for prayer time and api integration",
  },
  {
    link: "https://se-ecommerce-nine.vercel.app",
    title: "E-commerce projects",
    desc: "E-commerce frontend project",
  },
  {
    link: "https://third-ecommerce.vercel.app",
    title: "E-commerce",
    desc: "Another E-commerce frontend project",
  },
  {
    link: "http://weather-app-rose-one-20.vercel.app",
    title: "Weather app",
    desc: "Weather app with chose your town if you form egypt or write you town from weather api",
  },
];

const ProjectSection = ({ them }: { them: TThem }) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToProject = (direction: "prev" | "next") => {
    if (!containerRef.current || !mainRef.current) return;

    const container = containerRef.current;
    const cardWidth = mainRef.current.children[0].clientWidth;
    const gap = 32; // 8rem gap
    const scrollAmount = cardWidth + gap;

    container.scrollTo({
      left:
        direction === "next"
          ? container.scrollLeft + scrollAmount
          : container.scrollLeft - scrollAmount,
      behavior: "smooth",
    });
  };

  useGSAP(() => {
    if (mainRef.current && titleRef.current && containerRef.current) {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Initial animation for each card
      const cards = Array.from(mainRef.current.children) as HTMLElement[];
      cards.forEach((child, index) => {
        gsap.fromTo(
          child,
          {
            opacity: 0,
            y: 100,
            scale: 0.8,
            rotation: -10,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 1,
            delay: index * 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: child,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Hover animation
        child.addEventListener("mouseenter", () => {
          gsap.to(child, {
            scale: 1.05,
            y: -10,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        child.addEventListener("mouseleave", () => {
          gsap.to(child, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }
  }, []);

  return (
    <div className="my-20 px-4 py-10 md:px-10 min-h-[400px] relative">
      <div className="max-w-7xl mx-auto">
        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
        >
          Featured Projects
        </h1>
        <div className="relative">
          <button
            onClick={() => scrollToProject("prev")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
            aria-label="Previous project"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div
            ref={containerRef}
            className="relative overflow-x-auto scrollbar-hide"
          >
            <div ref={mainRef} className="flex gap-8 w-max px-12">
              {projects.map((project, index) => (
                <ProjectsCard
                  them={them}
                  key={index}
                  link={project.link}
                  title={project.title}
                  desc={project.desc}
                />
              ))}
            </div>
          </div>
          <button
            onClick={() => scrollToProject("next")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
            aria-label="Next project"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
