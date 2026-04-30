import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowTopRightOnSquare, HiCheckCircle } from "react-icons/hi2";

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
  const stack = project.stack ? project.stack.split(",") : [];
  const features = project.features ? project.features.split(",") : [];

  return (
    <article className="card-glass overflow-hidden border border-white/10 hover:border-primary/30 transition-shadow duration-300 shadow-sm hover:shadow-lg">
      <div className="relative overflow-hidden h-72 group">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 p-4 flex items-center justify-between bg-black/40 backdrop-blur-sm">
          <span className="text-xs uppercase tracking-[0.24em] text-white/80">Project Preview</span>
          <Link
            href={project.liveUrl}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
          >
            View Live
            <HiArrowTopRightOnSquare size={16} />
          </Link>
        </div>
      </div>

      <div className="p-6 flex flex-col gap-5">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
          <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300 line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <div className="space-y-2">
            {features.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                <HiCheckCircle className="mt-1 text-primary" size={18} />
                <span>{item.trim()}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            {stack.map((item, idx) => (
              <span
                key={idx}
                className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary bg-primary/10 dark:bg-primary/20 rounded-full px-3 py-1"
              >
                {item.trim()}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 mt-auto">
          <Link
            href={project.liveUrl}
            target="_blank"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary py-3 text-sm font-semibold text-white shadow-lg shadow-primary/15 transition hover:bg-primary/90"
          >
            Live Site
            <HiArrowTopRightOnSquare size={16} />
          </Link>
          <Link
            href={project.githubUrl}
            target="_blank"
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/10 py-3 text-sm font-semibold text-gray-900 dark:text-white transition hover:border-primary/30 hover:bg-white/15"
          >
            View Code
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
