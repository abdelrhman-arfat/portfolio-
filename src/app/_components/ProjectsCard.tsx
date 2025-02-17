import Image from "next/image";
import Link from "next/link";
import React from "react";

/**  */
const ProjectsCard = ({
  imgSrc,
  link,
  title,
}: {
  imgSrc: string;
  title: string;
  link: string[];
}) => {
  return (
    <div
      id="mainDiv"
      className="text-white bg-neutral-800 flex flex-col items-center py-4 px-6 rounded-xl gap-3"
    >
      <h1 className="capitalize">{title} :</h1>
      <div className="w-full relative h-[300px]">
        <Image
          className="rounded-xl"
          src={imgSrc}
          alt="Your browser does not support"
          fill
          style={{
            objectFit: "cover",
          }}
          sizes="100%"
        ></Image>
      </div>
      <div className="flex w-full gap-2">
        {link.map((link, index) => (
          <Link
            key={index}
            target="_blanck"
            className="px-3 py-1 flex-1 w-full text-center bg-sky-500 rounded-md hover:bg-sky-600 duration-300"
            href={link}
          >
            {index + 1}-
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
