document.addEventListener("DOMContentLoaded", () => {
  const memberData = {
    박준형: {
      name: "1407 박준형",
      job: "기획 / 디자인 / 개발",
      intro:
        "저는 인공지능 관련 분야에서 다양한 프로젝트를 진행하고, 다양한 알고리즘 문제들을 풀면서 문제 해결 능력과 기술적 역량을 키워왔습니다. 그러나 저는 인공지능이 아닌 다른 분야에도 다양한 관심을 가지며, Figma, HTML, CSS, JS 등을 공부하였습니다. 저는 이번 디미톤을 통해 협업 능력을 기르고 디자인, 웹에 관해 더 공부하며, 제 역량을 확장하고 싶습니다. 또한 이번 디미톤을 통해 아직 실전경험이 부족한 저희 팀이 실전 경험을 쌓아 자기 만족용이 아닌, 실제로 사람들에게 긍정적 영향을 미칠 수 있는 프로그램을 만들 수 있는 프로그래머로 성장하고 싶습니다.",
      skills: "Python, C, HTML, CSS, JavaScript, Figma, Excel",
      projects:
        "딥러닝 기반 한글 형태소 분석기 만들기<br />실시간 객체 탐지 모델 개발<br />연약 지반 탐지 모델 개발<br />딥페이크 판별 웹사이트 개발",
      awards: "한국 코드페어 중등부 은상",
      image: "../images/members/junhyung.png",
    },
    변재구: {
      name: "1410 변제규",
      job: "기획",
      intro:
        "저는 이제야 대회에 관심을 가지고 시작하는 단계에 놓여있습니다. 이 문구만 보면 실력도 없고, 그래서 쓸모가 없다고 생각하실 수 있습니다. 그래서인지 친구들도 모두 잘하는 친구들과만 대회에 나가더라구요. 하지만 이렇게 인재들만 계속 채택당하면 아직 경험이 없는 저로써는 도대체 누구와 대회에 나가서 실전 경험을 쌓아보겠습니까? 그러던중.. 바로 이 해커톤을 발견하였습니다. 듣자하니, 이번 대회는 수준급의 창작물을 만들어 입상하는 것이 목표가 아닌, 그저 친구들과 편안한 분위기에서 추억도 쌓을 겸 대회 맛보기처럼 기획을 하고, 실현도 해보는 대회라 들었습니다. 그래서 딱 저에게 필요하던 대회라 생각되어 지원해봅니다. 더 이상 구질구질 한 다짐은 안 붙이겠습니다. 다만, 만약 해커톤에 참가하게 되면 열심히 개발을 하고, 또 배우고, 실용적인 기술을 습득하여 향후 다른 대회에서도 그 역량을 발휘해 보고 싶습니다.",
      skills: "C, Python, Chat GPT, Pycharm, VSCode, cmd",
      projects: "Software FUTURE & DREAM Challenge 2025 (진행 중)",
      awards: "용인중학교 개근상<br />교과우수상",
      image: "../images/members/jegyu.png",
    },
    장호영: {
      name: "1425 정호영",
      job: "개발 / 디자인",
      intro:
        "저는 저의 경력이 부족함을 압니다. 저는 디미톤을 통해 이 경력 부족을 더 큰 성장 동력으로 전환하고 싶습니다. 디미톤 참가를 위해 React 및 React Native를 학습하여 프론트엔드 개발 능력을 강화할 것이며, Figma 디자인 기초를 학습하여 디자이너와의 원활한 소통 기반을 마련할 것입니다. 아울러 클론 코딩 프로젝트를 통해 실전 경험을 체득하여, 디미톤 참가에 충분한 개발 역량을 갖추기 위해 노력할 것입니다.<br />배움에 대한 열린 자세로 디미톤에서 많은 것을 배워, 이를 밑거름으로 다른 해커톤과 개발 대회도 경험하고 싶습니다. 많이 경험하고 많이 배워 쌓은 실력을 바탕으로, 의미있는 서비스를 만들어가는 개발자로 성장하고 싶습니다. 기회가 주어진다면, 디미톤에서 최선을 다해 배우고 성장하겠습니다.",
      skills: "HTML, CSS, JavaScript, Python, C, VSCode, PowerPoint",
      projects:
        "Python 영단어 암기장 제작<br />Software FUTURE & DREAM Challenge 2025 (진행 중)",
      awards: "2025 디미톤(예정)",
      image: "../images/members/hoyoung.png",
    },
    염예이: {
      name: "1423 장현중",
      job: "개발",
      intro:
        "염예이입니다. 프론트엔드 개발을 주로 하고 있습니다. 최신 웹 기술 트렌드를 학습하며 효율적이고 유지보수가 용이한 코드를 작성하는 것을 좋아합니다. 팀원들과 소통하며 문제를 해결하는 과정에서 즐거움을 느낍니다.",
      skills: "HTML, CSS, JavaScript, React, Vue.js",
      projects: "개인 포트폴리오 웹사이트 제작 / 반응형 웹 디자인",
      awards: "교내 해커톤 최우수상",
      image: "../images/members/hyunjung.png",
    },
  };

  const iconData = {
    skills_image: "../images/icons/skills.png",
    projects_image: "../images/icons/projects.png",
    awards_image: "../images/icons/awards.png",
  };

  const navItems = document.querySelectorAll(".nav-item");
  const portfolioContent = document.getElementById("portfolio-content");

  const renderPortfolio = (member) => {
    const data = memberData[member];

    const mainProfileSection = `
            <div class="member-info-container">
                <div class="member-image-placeholder">
                  <img src="${data.image}" alt="${data.name}" />
                </div>
                <div class="main-profile-text">
                    <div class="member-name">
                        <h2>${data.name}</h2>
                        <p class="job-title">${data.job}</p>
                    </div>
                    <div class="main-intro-text">
                        <p>${data.intro}</p>
                    </div>
                </div>
            </div>
        `;

    const portfolioItems = `
            <div class="portfolio-item">
                <div class="item-icon-placeholder">
                  <img src="${iconData.skills_image}" alt="${data.name}" />
                </div>
                <div class="item-text">
                    <h3>사용 가능 기술</h3>
                    <p>${data.skills}</p>
                </div>
            </div>
            <div class="portfolio-item">
                <div class="item-icon-placeholder">
                  <img src="${iconData.projects_image}" alt="${data.name}" />
                </div>
                <div class="item-text">
                    <h3>진행 프로젝트</h3>
                    <p>${data.projects}</p>
                </div>
            </div>
            <div class="portfolio-item">
                <div class="item-icon-placeholder">
                  <img src="${iconData.awards_image}" alt="${data.name}" />
                </div>
                <div class="item-text">
                    <h3>수상 경력</h3>
                    <p>${data.awards}</p>
                </div>
            </div>
        `;

    portfolioContent.innerHTML = mainProfileSection + portfolioItems;
  };

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelector(".nav-item.active").classList.remove("active");

      item.classList.add("active");

      const memberName = item.dataset.member;
      renderPortfolio(memberName);
    });
  });

  renderPortfolio("변재구");
});

const backButton = document.getElementById("backButton");

backButton.addEventListener("click", () => {
  const targetHTML = "../start/index.html";

  window.location.href = targetHTML;
});
