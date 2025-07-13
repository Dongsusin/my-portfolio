import React, { useEffect, useState } from "react";
import IntroSection from "../components/IntroSection";
import SkillSection from "../components/SkillList";
import ProjectSection from "../components/ProjectSection";
import CertificateSection from "../components/CertificateSection";
import ThankYouSection from "../components/ThankYouSection";
import "../App.css";

const IntroLoader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 7500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="intro-loader">
      <svg
        className="loading-svg"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 800 250"
        enableBackground="new 0 0 800 250"
        xmlSpace="preserve"
      >
        <defs>
          <pattern
            id="water"
            width=".25"
            height="1.1"
            patternContentUnits="objectBoundingBox"
          >
            <path
              fill="#fff"
              d="M0.25,1H0c0,0,0-0.659,0-0.916c0.083-0.303,0.158,0.334,0.25,0C0.25,0.327,0.25,1,0.25,1z"
            />
          </pattern>

          <text
            id="text"
            x="50%" // ✅ 중앙 정렬
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="160"
            fontFamily="Oswald, sans-serif"
          >
            LOADING
          </text>

          <mask id="text_mask">
            <use x="0" y="0" xlinkHref="#text" opacity="1" fill="#3498db" />
          </mask>
        </defs>

        <use x="0" y="0" xlinkHref="#text" fill="#3498db" />

        <rect
          className="water-fill"
          mask="url(#text_mask)"
          fill="url(#water)"
          x="-400"
          y="0"
          width="1600"
          height="250" // ✅ 높이 조정
        />
      </svg>
    </div>
  );
};

const Header = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header className={`custom-header ${visible ? "visible" : "hidden"}`}>
      <nav className="custom-nav">
        <span onClick={() => scrollToSection("intro")}>01:About</span>
        <span onClick={() => scrollToSection("certificates")}>
          02:Education
        </span>
        <span onClick={() => scrollToSection("skills")}>03:Skills</span>
        <span onClick={() => scrollToSection("projects")}>04:Projects</span>
        <span onClick={() => scrollToSection("thankyou")}>05:Contact</span>
      </nav>
    </header>
  );
};

const SideSocialBar = () => {
  return (
    <div className="side-social-bar">
      <a
        href="https://github.com/Dongsusin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="GitHub"
        />
      </a>
      <a
        href="https://blog.naver.com/auroratime020715"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="블로그.png" alt="Naver Blog" />
      </a>
    </div>
  );
};

const Home = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroFinish = () => {
    setShowIntro(false);
  };

  return (
    <div className="home-container">
      {showIntro ? (
        <IntroLoader onFinish={handleIntroFinish} />
      ) : (
        <>
          <Header />
          <SideSocialBar />

          <div className="bubble-container">
            {Array.from({ length: 50 }).map((_, index) => (
              <div
                className="bubble"
                key={index}
                style={{
                  left: `${Math.random() * 100}vw`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 15 + 15}s`,
                }}
              ></div>
            ))}
          </div>

          <section className="main-section">
            <div id="intro">
              <IntroSection />
            </div>
            <div id="certificates">
              <CertificateSection />
            </div>
            <div id="skills">
              <SkillSection />
            </div>
            <div id="projects">
              <ProjectSection />
            </div>
            <div id="thankyou">
              <ThankYouSection />
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Home;
