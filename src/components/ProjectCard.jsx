import React, { useState, useEffect } from "react";
import githubIcon from "../../public/github.png";

const ProjectCard = ({
  title,
  description,
  techStack,
  link,
  githubLink,
  imageUrl,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div
      className="project-card-background"
      style={{ backgroundImage: `url(${imageUrl})` }}
      data-aos="fade-up"
      onClick={handleToggle}
    >
      {isMobile && !isOpen && (
        <div className="click-hint">클릭해서 상세보기</div>
      )}

      <div className={`project-info-overlay ${isOpen ? "open" : ""}`}>
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
            onClick={(e) => e.stopPropagation()}
          >
            바로가기 →
          </a>
          {githubLink && (
            <a
              className="github-button"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
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
