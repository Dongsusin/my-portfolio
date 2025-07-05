// src/data/projects.js
export const personalProjects = [
  {
    title: "영화 프로젝트",
    description:
      "React+Vite를 이용하여 만들어본 영화 웹사이트로 react-router-dom을 이용해서 페이지를 분리했으며, 메인페이지에서는 영화의 예고편 평점등을 볼수있으며, 예메페이지에서 자리/요일/시간 선택으로 티켓을 예메하는 기능이 있으며, 상점페이지에서 상품을 장바구니에 추가할수있게 구현했습니다.",
    techStack: ["React", "Vite", "Css", "JavaScript"],
    link: "https://dreamy-gingersnap-00b2c0.netlify.app/",
  },
  {
    title: "포켓몬 API 도감",
    description:
      "포켓몬스터 API를 이용해서 포켓몬 이미지,이름,타입등을 가져오며 검색창으로 이름을 검색할수있고 타입은 매핑으로 영어를 한글로변경해서 표시해주며 포켓몬 카드 클릭으로 상세페이지로 이동하며 상세페이지에서는 스캣을 프로그래스바 형태로 보여줍니다.",
    techStack: ["React", "Vite", "Css", "JavaScript", "PokeAPI"],
    link: "https://scintillating-beignet-3bd5f7.netlify.app/",
  },
  {
    title: "PC 프로젝트",
    description:
      "데스크탑 형태로 폴더및 웹아이콘을 보여주며 클릭으로 폴더열기및 웹열기 같은 기능이 있으며, 날씨,지도,메모장,그림판등 과같은 기본적인 윈도우에서 지원하는 앱을 구현해봤으며 테트리스,틱택톡,턴제카드게임같은 고난이도 게임도 구현해봤습니다.",
    techStack: [
      "React",
      "Vite",
      "Css",
      "JavaScript",
      "OpenWeatherApi",
      "leaflet",
    ],
    link: "https://jovial-alpaca-3d63f1.netlify.app/",
  },
  {
    title: "세나위키",
    description:
      "세븐나이츠 공략사이트로 메인페이지에서는 react-calendar를 이용해서 이벤트 달력,각페이지로 바로이동돼는 기능을 구현했으며 도감 페이지에는 각 영웅/펫별로 그룹을 나눠서 표현했으며 FireBase로 구글로그인후 각영웅 추천을 할수있으며 영웅상세페이지에서는 레벨,강화,초월,장비에따른 스탯변화를 표시하며 현재장비를 추천하고 다른유저가 추천한 장비를 볼수있습니다, 던전(레이드,요일던전,공성전)페이지에서는 각던전마다 단계별로 스탯변화를 보여주며 영웅,팀을 추천할수있습니다. 소환페이지는 위시리스트를 선택해서 확률을 높여 소환시뮬레이션을 할수있으며, 100/200회마다 확정소환을 합니다. 팀페이지에서는 5개의 영웅,1마리의 펫으로 최종 스탯변화를 확인할수있습니다.",
    techStack: ["React", "Vite", "Css", "JavaScript", "FireBase", "Figma"],
    link: "https://sevenknightwiki.netlify.app/",
  },
];

export const teamProjects = [
  {
    title: "UI/UX 프로젝트(밀리의 서재)",
    description:
      "4인을 팀으로 밀리의 서재사이트를 기반으로 전체 웹사이트의 디자인을 html,css,javascript를 이용해서 구현했습니다.",
    techStack: ["Html", "Css", "TailwindCss", "JavaScript", "Figma"],
    link: "https://9rodigital-willie.netlify.app/",
  },
  {
    title: "Js 프로젝트(2048)",
    description:
      "4인을 팀으로 2048게임을 TypeScript,Figma를 이용해서 디자인및구현했으며, 기존 2048의 기능에 더해 하드모드,타임어택모드,Ai대전모드등을 구현했습니다.",
    techStack: ["Html", "Css", "TypeScript", "Figma"],
    link: "https://3lines-2048.netlify.app/",
  },
];
