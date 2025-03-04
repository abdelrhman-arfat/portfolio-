import React from "react";
import { IThemContext } from "../context/Context";
import { FaRegMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
const Switch = ({ them, setThem }: IThemContext) => {
  return (
    <div className="relative">
      <button
        onClick={() => setThem((p) => (p === "dark" ? "light" : "dark"))}
        className={`flex  h-[35px] w-[70px] sm:h-[35px] sm:w-[80px] ${
          them === "dark"
            ? "bg-neutral-500 text-blue-950"
            : "bg-neutral-200 text-orange-600"
        }  items-center justify-between rounded-2xl px-2 py-1`}
      >
        <FaRegMoon
          className={`${them != "dark" && "opacity-0"} text-xl duration-200`}
        />
        <IoIosSunny
          className={`${them != "light" && "opacity-0"} text-xl duration-200`}
        />
      </button>
    </div>
  );
};

export default Switch;
