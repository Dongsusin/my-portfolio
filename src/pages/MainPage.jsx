import IntroSection from "../components/IntroSection";
import SkillSection from "../components/SkillList";
import ProjectSection from "../components/ProjectSection";
import CertificateSection from "../components/CertificateSection";
import ThankYouSection from "../components/ThankYouSection";

const Home = () => {
  return (
    <div className="home-container">
      {/* 작은 거품들이 페이지 배경에 떠오르게 추가 */}
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
        <IntroSection />
        <CertificateSection />
        <SkillSection />
        <ProjectSection />
        <ThankYouSection />
      </section>
    </div>
  );
};

export default Home;
