import React from "react";
import githubIcon from "../../public/github.png";

const ProjectCard = ({
  title,
  description,
  techStack,
  link,
  githubLink,
  imageUrl,
}) => {
  return (
    <div
      className="project-card-background"
      style={{ backgroundImage: `url(${imageUrl})` }}
      data-aos="fade-up"
    >
      <div className="project-info-overlay">
        <h3 className="highlight-title">{title}</h3>

        <div className="project-description">
          {description.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        <div className="tech-stack">
          {techStack.map((tech) => (
            <div className="tech-icon" key={tech}>
              <span>{tech}</span>
            </div>
          ))}
        </div>

        <div className="button-group">
          <a
            className="project-button"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            바로가기 →
          </a>
          {githubLink && (
            <a
              className="github-button"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
