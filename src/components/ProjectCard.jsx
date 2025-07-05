// src/components/ProjectCard.jsx
import React from "react";

const ProjectCard = ({ title, description, techStack, link }) => {
  return (
    <div className="project-card" data-aos="fade-up">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tech-stack">
        {techStack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        바로가기 →
      </a>
    </div>
  );
};

export default ProjectCard;
