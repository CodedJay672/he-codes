import { getProjects } from "@/lib/actions/portfolio.actions";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = async () => {
  const projects = await getProjects();

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
