import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Javascript",
      src: "/images/logos/js.png",
      className: "h-10 w-12",
    },
    {
      title: "Typescript",
      src: "/images/logos/ts.png",
      className: "h-10 w-12",
    },
    {
      title: "C#",
      src: "/images/logos/cs.png",
      className: "h-10 w-12",
    },
    {
      title: "Python",
      src: "/images/logos/py.png",
      className: "h-10 w-12",
    },
    {
      title: "PHP",
      src: "/images/logos/php.png",
      className: "h-10 w-12",
    },
    {
      title: "Node",
      src: "/images/logos/node.png",

      className: "h-10 w-12",
    },
    {
      title: "ReactJS",
      src: "/images/logos/react.png",
      className: "h-10 w-12",
    },
    {
      title: "Next.js",
      src: "/images/logos/next.png",

      className: "h-10 w-14",
    },
    {
      title: "Angular",
      src: "/images/logos/angular.png",
      className: "h-10 w-12",
    },
    {
      title: "MongoDB",
      src: "/images/logos/mongo.png",
      className: "h-10 w-12",
    },
    {
      title: "PostgreSQL",
      src: "/images/logos/postgres.png",
      className: "h-10 w-12",
    },
    {
      title: "AWS",
      src: "/images/logos/aws.webp",
      className: "h-10 w-10",
    },
    {
      title: "TailwindCss",
      src: "/images/logos/tailwind.png",
      className: "h-10 w-10",
    },
    {
      title: "Vercel",
      src: "/images/logos/vercel.png",
      className: "h-10 w-10",
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Some Technologies I Use
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
