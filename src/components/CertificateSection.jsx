import React from "react";

const CertificateSection = () => {
  return (
    <section className="certificate-section" data-aos="fade-up">
      <h2 data-aos="fade-down" className="certificate-title">
        교육 및 자격증
      </h2>
      <ul>
        <li data-aos="fade-right" data-aos-delay="100">
          멋쟁이 사자처럼 프론트엔드 부트캠프
        </li>
        <li data-aos="fade-right" data-aos-delay="150">
          (2025/02/05~2025/08/08)
        </li>
        <li data-aos="fade-right" data-aos-delay="200">
          정보처리기능사(2019/03)
        </li>
        <li data-aos="fade-right" data-aos-delay="300">
          컴퓨터활용능력2급(2020/06)
        </li>
        <li data-aos="fade-right" data-aos-delay="400">
          전자기기기능사(2020/09)
        </li>
        <li data-aos="fade-right" data-aos-delay="500">
          제한무선통신사(2020/10)
        </li>
      </ul>
    </section>
  );
};

export default CertificateSection;
