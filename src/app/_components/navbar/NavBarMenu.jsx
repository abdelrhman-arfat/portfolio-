import Link from "next/link";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const NavBarMenu = ({ setIsOpen, list }) => {
  useGSAP(() => {
    gsap.to("#link", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="fixed duration-200 z-10 top-20 right-0 left-0 bg-neutral-900 text-white gap-10 flex flex-col items-center justify-center h-full">
      {list.map((it, ind) => (
        <a
          id="link"
          onClick={() => setIsOpen(false)}
          className="text-xl translate-y-1 opacity-0  "
          key={ind}
          href={it.herf}
        >
          {it.name}
        </a>
      ))}
    </div>
  );
};

export default NavBarMenu;
