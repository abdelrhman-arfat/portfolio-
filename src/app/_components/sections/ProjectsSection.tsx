"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { TThem } from "../context/Context";
import ProjectsCard from "../cards/ProjectsCard";

// Keep your existing projects array

const ProjectSection = ({ them }: { them: TThem }) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const projects = [
    {
      link: "https://your-hotel-app.vercel.app/", // Replace with your actual deployed link
      title: "Full Stack Hotel Management App",
      desc: `Full Stack Hotel Management System (MERN Stack)

This is a powerful full-stack hotel management platform designed to streamline hotel operations and provide a seamless booking experience. Built with the MERN stack, this system emphasizes robust backend functionality combined with a sleek, responsive frontend.

Backend Features:

- Developed using Express.js with TypeScript for strong typing and maintainability.
- Uses Prisma ORM with MySQL to efficiently manage relational data.
- Implements Redis caching to improve response times and scalability.
- Secure authentication and authorization via JWT and Passport.js.
- Passwords are securely hashed using bcrypt.
- Email services are powered by Nodemailer to handle notifications.
- Integrates Stripe for smooth and secure payment processing.
- Manages images using Cloudinary for optimized uploads and delivery.
- Role-based user management with Manager and Customer roles.
- Backend fully tested using Jest to ensure reliability.

Key Functionalities:

- User Management: Users can register, login, verify email, and update their profiles securely.
- Room Management: Admins can create, update, and delete rooms, upload multiple images, and monitor availability and booking stats.
- Reservation System: Authenticated users can check room availability, book rooms, and make payments.
- Admin Dashboard: Comprehensive control panel for managing users, rooms, bookings, and analytics.

Frontend Features:

- Built with Next.js and TypeScript to ensure fast, server-side rendered pages.
- Uses Redux Toolkit and RTK Query for scalable and efficient state management.
- Tailwind CSS combined with shadcn/ui delivers a clean, modern, and responsive UI.
- Axios handles API requests and JWT token management.
- React-hot-toast provides user-friendly notifications.
- Fully responsive design optimized for mobile and desktop devices.

Database Overview:

- Users: Includes role-based access, hashed passwords, and timestamp tracking.
- Rooms: Contains detailed room info, pricing, availability, and reservation counts.
- Room Images: Supports multiple images per room managed via Cloudinary.
- Reservations: Tracks user bookings, dates, and total price upon payment success.

Learning Highlights:

- Mastery of unit testing on both backend and frontend with Jest.
- Deep understanding of authentication, authorization, and secure API design.
- Integration of third-party services such as Stripe for payments and Cloudinary for image management.
- Efficient database design and caching strategies with Prisma, MySQL, and Redis.
- Experience working with environment variables, input validation, and robust error handling.

This project showcases a professional-level hotel management application that combines backend security and performance with an intuitive and responsive frontend, delivering a seamless user and admin experience.
`,
    },
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
      desc: "Gaming website with api integration for some games and filtering with platforms build with react and tailwind for styling and redux for state management ",
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

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotate: -3,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  return (
    <div
      id="projects"
      className="my-20 px-4 py-16 md:px-10 min-h-[400px] relative"
    >
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
          className="section-title"
        >
          Featured Projects
        </motion.h1>
        <div className="relative">
          <motion.button
            onClick={() => scrollToProject("prev")}
            className="absolute hidden sm:flex left-0 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label="Previous project"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
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
          </motion.button>
          <div
            ref={containerRef}
            className="relative overflow-x-auto scrollbar-hide py-10"
          >
            <motion.div
              ref={mainRef}
              className="flex py-3 min-h-[500px] gap-8 w-max px-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {projects.map((project, index) => (
                <motion.div key={index} variants={cardVariants}>
                  <ProjectsCard
                    them={them}
                    link={project.link}
                    title={project.title}
                    desc={project.desc}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.button
            onClick={() => scrollToProject("next")}
            className="absolute hidden sm:flex right-0 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label="Next project"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
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
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
