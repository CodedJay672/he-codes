import React from "react";
import ProjectCard from "./ProjectCard";
import { getProjects } from "@/lib/data/projects.data";
import { AppwriteException } from "node-appwrite";

const Projects = async () => {
  const projects = await getProjects();

  if (!projects || projects instanceof AppwriteException) {
    return (
      <div className="w-fulh h-96 flex-center">
        <h1 className="text-sm lg:text-base font-semibold text-background-base dark:text=white">
          {projects.code}: {projects.name}
        </h1>
        <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
          {projects.message}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full mt-6 lg:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-3">
      {projects.total > 0 ? (
        projects.documents?.map((project) => (
          <ProjectCard
            key={project.$id}
            id={project.$id}
            title={project.title || "Untitled"}
            description={project.description || "No description available"}
            liveUrl={project.liveUrl || "#"}
            githubUrl={project.githubUrl || "#"}
            features={project.features || "N/A"}
            stack={project.stack || "N/A"}
            imageUrl={project.imgUrl}
          />
        ))
      ) : (
        <span className="col-span-2 text-primary brightness-50 text-center">
          No projects uploaded yet.
        </span>
      )}
    </div>
  );
};

export default Projects;
