import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiExternalLink } from "react-icons/hi";

interface Props {
  id: string;
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  features: string;
  stack: string;
  imageUrl: string;
}

const ProjectCard = ({ ...project }: Props) => {
  const stack = project.stack.split(",");

  return (
    <article className="w-full bg-white/10 hover:bg-white/20 transition-all border border-gray-600 flex flex-col gap-2 rounded-lg overflow-hidden group hover:border-primary cursor-pointer">
      <div className="w-full h-63 relative ">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-all"
        />
        <div className="absolute inset-0 flex-center bg-black/5 group-hover:bg-black/50 group-hover:scale-105 transition-all">
          <Link
            href={project.liveUrl}
            className="size-16 rounded-full bg-gray-800/0 group-hover:bg-gray-800/70 flex-center transition-all"
          >
            <HiExternalLink
              size={32}
              className="text-gray-300/0 group-hover:text-gray-200 transition-all"
            />
          </Link>
        </div>
      </div>

      <div className="flex-1 p-4">
        <h3 className="text-base text-background-base dark:text-gray-50 font-semibold">
          {project.title}
        </h3>
        <p className="text-sm text-background-base dark:text-gray-50 font-light line-clamp-3">
          {project.description}
        </p>
        <div className="w-full flex gap-1 flex-wrap">
          {stack.map((item, idx) => (
            <span
              key={idx}
              className="text-sm inline-block py-0.5 px-1 border border-gray-500 rounded-md text-background-base dark:text-gray-50 mt-2"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="place-self-end gap-1 m-4 flex-center">
        <Link
          href={project.liveUrl}
          target="_blank"
          className="block lg:hidden text-primary py-1 px-2 hover:border hover:border-primary rounded-lg"
        >
          Live
        </Link>
        <Link
          href={project.githubUrl}
          target="_blank"
          className="text-background-base dark:text-gray-50 py-1 px-2 hover:border border-background-base dark:border-gray-400 rounded-lg"
        >
          Github
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
