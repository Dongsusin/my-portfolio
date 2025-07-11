export const personalProjects = [
  {
    title: "영화 프로젝트",
    description: `
  React + Vite를 사용하여 제작한 영화 웹사이트입니다.
  • react-router-dom으로 페이지 분리
  • 메인 페이지에서 영화 예고편, 평점 확인 가능
  • 예매 페이지에서 자리/요일/시간 선택 기능
  • 상점 페이지에서 상품을 장바구니에 추가 가능
`,
    techStack: ["React", "Vite", "Css", "JavaScript"],
    link: "https://dreamy-gingersnap-00b2c0.netlify.app/",
    githubLink: "https://github.com/Dongsusin/movie-cgv",
    imageUrl: "영화프로젝트.png",
  },
  {
    title: "포켓몬 API 도감",
    description: `
  포켓몬스터 API를 활용한 도감 웹사이트입니다.
  • 포켓몬 이미지, 이름, 타입 정보 표시
  • 검색창으로 포켓몬 이름 검색 가능
  • 타입은 영어 → 한글로 매핑 표시
  • 카드 클릭 시 상세 페이지로 이동
  • 스탯은 프로그레스바 형태로 시각화
`,
    techStack: ["React", "Vite", "Css", "JavaScript", "PokeAPI"],
    link: "https://scintillating-beignet-3bd5f7.netlify.app/",
    githubLink: "https://github.com/Dongsusin/pokedex",
    imageUrl: "포켓몬API.png",
  },
  {
    title: "PC 프로젝트",
    description: `
  데스크탑 UI를 웹으로 구현한 프로젝트입니다.
  • 폴더 및 웹 아이콘 인터페이스 제공
  • 폴더/웹사이트 열기 기능
  • 날씨, 지도, 메모장, 그림판 등 기본 앱 구현
  • 테트리스, 틱택톡, 턴제 카드게임 등 고난이도 게임 구현
`,
    techStack: [
      "React",
      "Vite",
      "Css",
      "JavaScript",
      "OpenWeatherApi",
      "leaflet",
    ],
    link: "https://jovial-alpaca-3d63f1.netlify.app/",
    githubLink: "https://github.com/Dongsusin/DeskTop",
    imageUrl: "PC.png",
  },
  {
    title: "세나위키",
    description: `
  세븐나이츠 팬사이트로 다양한 기능을 포함한 웹 애플리케이션입니다.
  • 메인 페이지: 이벤트 달력 및 빠른 이동 기능 (react-calendar 사용)
  • 도감 페이지: 영웅/펫 그룹화, 추천 기능 (Firebase 연동)
  • 영웅 상세 페이지: 레벨, 강화, 초월, 장비별 스탯 시각화 및 추천
  • 던전 페이지: 단계별 스탯 변화 및 추천 팀 제공
  • 소환 시뮬레이터: 위시리스트 기반 확률 조정 및 확정 소환 시스템
  • 팀 페이지: 5 영웅 + 1 펫 구성 시 스탯 변화를 시각적으로 확인
`,
    techStack: ["React", "Vite", "Css", "JavaScript", "FireBase", "Figma"],
    link: "https://sevenknightwiki.netlify.app/",
    githubLink: "https://github.com/Dongsusin/SavenKnight",
    imageUrl: "세나위키.png",
  },
];

export const teamProjects = [
  {
    title: "UI/UX 프로젝트(밀리의 서재)",
    description: `
  4인 팀으로 '밀리의 서재' 웹사이트를 리디자인/재구현한 프로젝트입니다.
  • 전체 페이지 디자인을 Figma로 설계
  • HTML, CSS, JavaScript로 정적 페이지 제작
  • TailwindCSS 사용
`,
    techStack: ["Html", "Css", "TailwindCss", "JavaScript", "Figma"],
    link: "https://9rodigital-willie.netlify.app/",
    githubLink: "https://github.com/FRONTENDBOOTCAMP-13th/9RoDigital",
    imageUrl: "밀리의서재.png",
  },
  {
    title: "Js 프로젝트(2048)",
    description: `
  4인 팀으로 제작한 2048 게임 확장 프로젝트입니다.
  • 기존 2048 기능 구현
  • 하드모드, 타임어택 모드, AI 대전 모드 추가
  • TypeScript 및 Figma 기반 설계/개발
`,
    techStack: ["Html", "Css", "TypeScript", "Figma"],
    link: "https://3lines-2048.netlify.app/",
    githubLink: "https://github.com/FRONTENDBOOTCAMP-13th/JS-03-2048-in-3lines",
    imageUrl: "2048.png",
  },
];
