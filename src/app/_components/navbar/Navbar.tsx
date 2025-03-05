"use client";
import { FaGithub } from "react-icons/fa";
import React, { useContext } from "react";
import { useGSAP } from "@gsap/react";
import { ThemContext } from "../context/Context";

import Switch from "../toggles/Switch";
import gsap from "gsap";
import Link from "next/link";

const Navbar = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#header",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power1.out" }
    );
  }, []);

  const Them = useContext(ThemContext);
  if (!Them) return;
  const { them, setThem } = Them;

  return (
    <header id="header" className={`shadow-sm w-full h-[80px] ${them} px-3 `}>
      <nav className="w-[90%] h-full mx-auto flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl ">Portfolio</h1>
        <div className="flex items-center gap-4" > 
          <Link href={"https://github.com/abdelrhman-arfat"}>
            <FaGithub className="text-2xl hover:bg-neutral-300 hover:text-black rounded-full duration-300 w-[30px] h-[30px] p-1"  />
          </Link>

          <Switch them={them} setThem={setThem} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
