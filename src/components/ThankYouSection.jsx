import React from "react";

const ThankYouSection = () => {
  return (
    <section className="thank-you-section" data-aos="fade-up">
      <h1>Thank You</h1>
      <span>봐주셔서 감사합니다.</span>
      <p>이메일: auroratime020715@gmail.com</p>
      <p>전화번호: 010-2201-5617</p>
      <div className="button-group">
        <a
          href="https://github.com/Dongsusin/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-button"
        >
          GitHub
        </a>
        <a
          href="https://blog.naver.com/auroratime020715"
          target="_blank"
          rel="noopener noreferrer"
          className="project-button"
        >
          blog
        </a>
      </div>
    </section>
  );
};

export default ThankYouSection;
