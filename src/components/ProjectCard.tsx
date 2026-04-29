import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

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
    <article className="card-glass overflow-hidden group border border-white/10 hover:border-primary/30 transition-all duration-300">
      <div className="w-full h-72 relative overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-center">
          <Link
            href={project.liveUrl}
            target="_blank"
            className="size-14 rounded-full bg-primary flex-center hover:bg-primary/90 transition-colors shadow-lg"
          >
            <HiArrowTopRightOnSquare size={28} className="text-white" />
          </Link>
        </div>
      </div>

      <div className="w-full p-6 grid grid-cols-1 gap-4">
        <div>
          <h3 className="text-lg font-semibold dark:text-white text-gray-900 mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm dark:text-gray-400 text-gray-600 line-clamp-2">
            {project.description}
          </p>
        </div>

        <div className="w-full h-full flex gap-2 flex-wrap mb-auto">
          {stack.map((item, idx) => (
            <span
              key={idx}
              className="text-xs inline-block py-1 px-3 bg-primary/10 dark:bg-primary/20 text-primary rounded-full font-medium"
            >
              {item.trim()}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-4 border-t border-white/10 mt-auto">
          <Link
            href={project.liveUrl}
            target="_blank"
            className="flex-1 flex items-center justify-center gap-2 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold text-sm transition-colors"
          >
            <span>Live Site</span>
            <HiArrowTopRightOnSquare size={16} />
          </Link>
          <Link
            href={project.githubUrl}
            target="_blank"
            className="flex-1 py-2 bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 text-gray-900 dark:text-white rounded-lg font-semibold text-sm text-center transition-colors"
          >
            Code
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
