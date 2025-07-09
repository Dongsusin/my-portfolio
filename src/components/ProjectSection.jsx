import React from "react";
import ProjectCard from "./ProjectCard";
import { personalProjects, teamProjects } from "../data/projects";

const ProjectSection = () => {
  return (
    <div className="project-section" data-aos="fade-up">
      <h2 className="section-title">✨ 프로젝트 ✨</h2>

      <div className="project-category">
        <h3>개인 프로젝트</h3>
        <div className="project-list">
          {personalProjects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} imageUrl={proj.imageUrl} />
          ))}
        </div>
      </div>

      <div className="project-category">
        <h3>팀 프로젝트</h3>
        <div className="project-list">
          {teamProjects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} imageUrl={proj.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
