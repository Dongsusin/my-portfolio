import React from "react";

const ProjectCard = ({ title, description, techStack, link, imageUrl }) => {
  return (
    <div className="project-card" data-aos="fade-up">
      <div className="project-text">
        <h3>{title}</h3>
        <div className="tech-stack">
          {techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          바로가기 →
        </a>
      </div>
      <div className="project-image">
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  );
};

export default ProjectCard;
