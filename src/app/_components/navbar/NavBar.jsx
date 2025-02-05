"use client";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import NavBarMenu from "./NavBarMenu";
const NavBar = () => {
  const list = [
    { name: "home", herf: "#home" },
    { name: "about", herf: "#about" },
    { name: "contact", herf: "#contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const handelMenuDisplay = () => {
    setIsOpen((p) => !p);
  };
  useGSAP(() => {
    gsap.to("#link", {
      opacity: 1,
      duration: 0.9,
      stagger: 0.25,
    });
    gsap.to("#logo", {
      opacity: 1,
      duration: 0.4,
    });
    gsap.to("#menu", {
      opacity: 1,
      duration: 0.4,
    });
  }, []);

  return (
    <header className="flex mx-auto items-center  w-full md:w-[92%] xl:w-[85%] justify-between px-8 py-5">
      <div>
        <Link
          id="logo"
          href="/"
          className="text-4xl ml-5 font-bold opacity-0 text-gray-200 duration-200 cursor-pointer hover:text-gray-50"
        >
          Abdo
        </Link>
      </div>
      {/* mobile menu */}
      <div className="md:hidden flex">
        {!isOpen ? (
          <TiThMenu
            id="menu"
            onClick={handelMenuDisplay}
            className={`text-3xl opacity-60 cursor-pointer duration-300 text-white`}
          />
        ) : (
          <IoMdCloseCircle
            onClick={handelMenuDisplay}
            className={`text-3xl cursor-pointer text-rose-500 duration-700`}
          />
        )}
        <NavBarMenu
          className={`${isOpen ? "opacity-100" : "opacity-0"} duration-500`}
          list={list}
          setIsOpen={setIsOpen}
        />
      </div>

      {/* bigSizes menu */}

      <div className="hidden md:flex ">
        <ul className="flex items-center justify-between gap-10 ">
          {list.map((it, ind) => (
            <li key={ind}>
              <a
                id="link"
                className="opacity-0 text-neutral-300 text-lg  hover:text-white duration-200"
                href={it.herf}
              >
                {it.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
