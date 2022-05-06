import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import DescriptionSlide, {
  descriptionSlideType,
} from "../components/DescriptionSlide";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Slides, { slideType } from "../components/Slides";
import VideoCard, { videoCardType } from "../components/VideoCard";

const Home = () => {
  const mainMenu = document.querySelector(".main_menu") as HTMLParagraphElement;
  // const menuOST = mainMenu.offsetTop as number;
  //   // const [scrollAmt, setScrollAmt] = React.useState<number>(window.pageYOffset);
  //   // console.log(scrollAmt);
  //   // console.log(header.offsetTop);//스크롤이 이 양보다 많으면

  //   /*
  // a.offsetTop 상단에서의 거리
  // a.offsetLeft 왼쪽에서의 거리
  // */
  //   window.addEventListener("scroll", function () {
  //     let scrollAmt = window.pageYOffset;

  //     // console.log(scrollAmt);

  //     /*
  // 스크롤양이 헤더상단에서 떨어진 거리 보다 많으면
  // header에 sticky 클래스명 추가
  // 아니면 제거
  // */

  //     if (scrollAmt > menuOST) {
  //       mainMenu.classList.add("sticky");
  //     } else {
  //       mainMenu.classList.remove("sticky");
  //     }
  //     console.log(scrollAmt);
  //   });

  const [ScrollY, setScrollY] = React.useState(0); // 스크롤값을 저장하기 위한 상태
  const handleFollow = () => {
    setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
  };

  React.useEffect(() => {
    console.log("ScrollY is ", ScrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
  }, [ScrollY]);

  React.useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch(); // addEventListener 함수를 실행
    return () => {
      window.removeEventListener("scroll", handleFollow); // addEventListener 함수를 삭제
    };
  });

  //     if (scrollAmt > menuOST) {
  //       mainMenu.classList.add("sticky");
  //     } else {
  //       mainMenu.classList.remove("sticky");
  //     }
  //     console.log(scrollAmt);
  //   });

  const SubMenulist = () => {
    return (
      <ul>
        <li>
          <Link to="#">Free to Play</Link>
        </li>
        <li>
          <Link to="#">Action/Adventure</Link>
        </li>
        <li>
          <Link to="#">Racing/Sports</Link>
        </li>
        <li>
          <Link to="#">Indie</Link>
        </li>
        <li>
          <Link to="#">RPG</Link>
        </li>
        <li>
          <Link to="#">Strategy</Link>
        </li>
        <li>
          <Link to="#">Simulation</Link>
        </li>
        <li>
          <Link to="#">more + </Link>
        </li>
      </ul>
    );
  };

  // var slideWrapper = document.querySelector(
  //   ".slide_wrapper"
  // ) as HTMLParagraphElement;
  // var slides = slideWrapper.querySelector(".bn_slides") as HTMLParagraphElement;
  // var slide = slides.querySelectorAll(".bn_slide") as any;
  // var slideCount = slide.length;
  // var currentIndex = 0;
  // var prevBtn = slideWrapper.querySelector(".prev") as HTMLParagraphElement;
  // var nextBtn = slideWrapper.querySelector(".next") as HTMLParagraphElement;
  // var pagerHTML = "";
  // var pager = document.querySelector(".pager") as HTMLParagraphElement;
  // var pagerBtn = pager.querySelectorAll("span") as any;

  /* 슬라이드를 가로로 배열 */

  // for (var i = 0; i < slideCount; i++) {
  //   slide[i].style.left = i * 100 + "%";

  //   pagerHTML = pagerHTML + "<span>" + i + "</span>";
  // }

  // /* 이동 함수 생성 */

  // pager.innerHTML = pagerHTML;
  // pagerBtn = pager.querySelectorAll("span");

  // function moveSlide(num) {
  //   slides.style.left = num * -100 + "%";
  //   currentIndex = num;

  //   for (x = 0; x < slideCount; x++) {
  //     pagerBtn[x].classList.remove("active");
  //     // console.log(pagerBtn);
  //   }
  //   pagerBtn[currentIndex].classList.add("active");
  // }

  // moveSlide(0);

  // /* 이전 버튼 이후 버튼 연결 */

  // nextBtn.addEventListener("click", function () {
  //   if (currentIndex < slideCount - 1) {
  //     moveSlide(currentIndex + 1);
  //   } else {
  //     moveSlide(0);
  //   }
  // });

  // prevBtn.addEventListener("click", function () {
  //   if (currentIndex > 0) {
  //     moveSlide(currentIndex - 1);
  //   } else {
  //     moveSlide(slideCount - 1);
  //   }
  // });

  // /* 페이저 연결 */

  // for (var bp = 0; bp < slideCount; bp++) {
  //   pagerBtn[bp].addEventListener("click", function () {
  //     var targetNum = parseInt(this.innerText);

  //     moveSlide(targetNum);
  //   });
  // }

  // //자동 슬라이드
  // var timer;

  // function autoslide() {
  //   timer = setInterval(function () {
  //     var nextIndex = currentIndex + 1;
  //     if (currentIndex == slideCount - 1) {
  //       nextIndex = 0;
  //     }
  //     moveSlide(nextIndex);
  //   }, 3500);
  // }
  // autoslide();

  // //마우스 올리면 멈추고 나가면 다시 움직이고

  // slideWrapper.addEventListener("mouseover", function () {
  //   clearInterval(timer);
  // });
  // slideWrapper.addEventListener("mouseout", function () {
  //   autoslide();
  // });

  // const Slide = () => {
  //   return (
  //     <Carousel
  //       showArrows={true}
  //       swipeable
  //       // onChange={onChange}
  //       // onClickItem={onClickItem}
  //       // onClickThumb={onClickThumb}
  //     >
  //       <div>
  //         <img src="assets/1.jpeg" />
  //         <p className="legend">Legend 1</p>
  //       </div>
  //       <div>
  //         <img src="assets/2.jpeg" />
  //         <p className="legend">Legend 2</p>
  //       </div>
  //       <div>
  //         <img src="assets/3.jpeg" />
  //         <p className="legend">Legend 3</p>
  //       </div>
  //       <div>
  //         <img src="assets/4.jpeg" />
  //         <p className="legend">Legend 4</p>
  //       </div>
  //       <div>
  //         <img src="assets/5.jpeg" />
  //         <p className="legend">Legend 5</p>
  //       </div>
  //       <div>
  //         <img src="assets/6.jpeg" />
  //         <p className="legend">Legend 6</p>
  //       </div>
  //     </Carousel>
  //   );
  // };
  const [popularData, setPopularData] = React.useState<descriptionSlideType[]>([
    {
      title: "Dead By Daylight",
      des: "Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught and killed.",
      image: "/img/DBD1.jpg",
      tags: ["Horror", "PvP", "Adventure"],
      price: "32.20",
    },
    {
      title: "PUBG",
      des: "Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught and killed.",
      image: "/img/pubg1.jpg",
      tags: ["Horror", "PvP", "Adventure"],
      price: "32.20",
    },
    {
      title: "Football manager 2021",
      des: "Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught and killed.",
      image: "/img/FM1.jpg",
      tags: ["Horror", "PvP", "Adventure"],
      price: "32.20",
    },
    // {
    //   title: "CIVILIZATION VI",
    //   des: "DBDBDB",
    // image: "/img/civilization_vl5.jpg",
    //   tags: ["sdfsdf", "sdfsdf", "sdfsdf"],
    //   price: "1232132354",
    // },
    // {
    //   title: "EA SPORTS FIFA 21",
    //   des: "DBDBDB",
    // image: "/img/FIFA21.jpg",
    //   tags: ["sdfsdf", "sdfsdf", "sdfsdf"],
    //   price: "1232132354",
    // },
    // {
    //   title: "Little Nightmares II",
    //   des: "DBDBDB",
    // image: "/img/LittleNightmares.jpg",
    //   tags: ["sdfsdf", "sdfsdf", "sdfsdf"],
    //   price: "1232132354",
    // },
  ]);

  const [recentData, setRecentData] = React.useState<videoCardType[]>([
    {
      image: "/img/redDeadRedemption.png",
      title: "Red Dead Redemption",
      produce: "Rockstar Games",
      price: "32.20",
      url: "https://cdn.akamai.steamstatic.com/steam/apps/256811949/movie480_vp9.webm?t=1606871607",
      tags: ["Horror", "PvP", "Adventure"],
    },
    {
      image: "/img/alienIsolation.jpg",
      title: "Alien - Isolation",
      produce: "Rockstar Games",
      price: "32.20",
      tags: ["Horror", "PvP", "Adventure"],
      url: "https://cdn.akamai.steamstatic.com/steam/apps/256686491/microtrailer.webm?t=1496661560&v=2",
    },
    {
      image: "/img/assasinCreedValhalla.jpg",
      title: "Assasin Creed - Valhalla",
      produce: "Rockstar Games",
      price: "32.20",
      tags: ["Horror", "PvP", "Adventure"],
      url: "https://cdn.akamai.steamstatic.com/steam/apps/256658589/microtrailer.webm?t=1528288687&v=2",
    },
    {
      image: "/img/destiny2.jpg",
      title: "Destiny 2",
      produce: "Rockstar Games",
      price: "32.20",
      url: "https://cdn.akamai.steamstatic.com/steam/apps/256809333/movie480_vp9.webm?t=1612891968",
      tags: ["Horror", "PvP", "Adventure"],
    },
    {
      image: "/img/BorderlandsTheHandsomeCollection.jpg",
      title: "BORDERLANDS",
      produce: "Rockstar Games",
      price: "32.20",
      tags: ["Horror", "PvP", "Adventure"],
      url: "https://cdn.akamai.steamstatic.com/steam/apps/2029699/movie480.webm?t=1447359143",
    },
    {
      image: "/img/fortnite.jpg",
      title: "FORTNITE",
      produce: "Rockstar Games",
      price: "32.20",
      tags: ["Horror", "PvP", "Adventure"],
      url: "https://cdn.akamai.steamstatic.com/steam/apps/256802095/microtrailer.webm?t=1600866008&v=2",
    },
    {
      image: "/img/warframe.png",
      title: "WARFRAME",
      produce: "Rockstar Games",
      price: "32.20",
      tags: ["Horror", "PvP", "Adventure"],
      url: "https://cdn.akamai.steamstatic.com/steam/apps/256788251/movie480.mp4?t=1591656404",
    },
  ]);

  const [slideData, setSlideData] = React.useState<slideType[]>([
    {
      title: "VALHEIM",
      url: "https://cdn.cloudflare.steamstatic.com/steam/apps/256820008/microtrailer.webm?t=1612278985",
      thumbnail: "img/portrait.png",
      comment:
        "Hi, the game is super repeat some minecraft game mechanics. It's great that it works on any PC and anyone can play the game. It would be nice to be multiplayer to play with friends. ...",
      user_name: "Hildegard_917",
      play_time: 1.4,
      recommended: 46,
    },
    {
      title: "VALHEIM",
      url: "https://cdn.cloudflare.steamstatic.com/steam/apps/256820008/microtrailer.webm?t=1612278985",
      thumbnail: "img/portrait.png",
      comment:
        "Hi, the game is super repeat some minecraft game mechanics. It's great that it works on any PC and anyone can play the game. It would be nice to be multiplayer to play with friends. ...",
      user_name: "Hildegard_917",
      play_time: 1.4,
      recommended: 46,
    },
    {
      title: "VALHEIM",
      url: "https://cdn.cloudflare.steamstatic.com/steam/apps/256820008/microtrailer.webm?t=1612278985",
      thumbnail: "img/portrait.png",
      comment:
        "Hi, the game is super repeat some minecraft game mechanics. It's great that it works on any PC and anyone can play the game. It would be nice to be multiplayer to play with friends. ...",
      user_name: "Hildegard_917",
      play_time: 1.4,
      recommended: 46,
    },
    {
      title: "VALHEIM",
      url: "https://cdn.cloudflare.steamstatic.com/steam/apps/256820008/microtrailer.webm?t=1612278985",
      thumbnail: "img/portrait.png",
      comment:
        "Hi, the game is super repeat some minecraft game mechanics. It's great that it works on any PC and anyone can play the game. It would be nice to be multiplayer to play with friends. ...",
      user_name: "Hildegard_917",
      play_time: 1.4,
      recommended: 46,
    },
  ]);

  return (
    <div className="App">
      {/* <header className="App-header">
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header> */}
      <header>
        <div className="top_menu">
          <div className="container clearfix">
            <h1 className="logo">
              <Link to="index.html">
                <button>
                  <img src="../assets/images/steam_main_logo.png" alt="steam" />
                  steam logo
                </button>
              </Link>
            </h1>
            <nav className="top_menu_wrapper clearfix">
              <ul className="top_menu_list">
                <li>
                  <Link to="#" className="no-bg">
                    <button>
                      <i className="fas fa-question"></i>SUPPORT
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="no-bg">
                    <button>
                      <i className="fas fa-user"></i>MY PAGE
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="#" data-loginbox="#loginbox" className="no-bg">
                    <button>
                      <i className="fas fa-lock"></i>LOGIN
                    </button>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <nav className={`main_menu clearfix ${ScrollY > 0 && "sticky"}`}>
          <div className="container">
            <ul className="main_menu_list clearfix">
              <li>
                <Link to="#">Quick menu</Link>
                <SubMenulist />
              </li>
              <li>
                <Link to="#">Steam store</Link>
                <SubMenulist />
              </li>
              <li>
                <Link to="#">Steam news</Link>
                <SubMenulist />
              </li>
              <li>
                <Link to="#">My favorite</Link>
                <SubMenulist />
              </li>
              <li>
                <Link to="#">Community</Link>
                <SubMenulist />
              </li>
              <li>
                <Link to="steam_ai.html">STEAM AI</Link>
              </li>

              <li>
                <form action="#" method="post">
                  <label htmlFor="search" className="hidden">
                    search
                  </label>
                  <input
                    type="text"
                    id="search"
                    placeholder="Search game&hellip;"
                  />
                  <Link to="#">
                    <i className="fas fa-search"></i>
                  </Link>
                </form>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="banner">
        <div className="slide_wrapper">
          <div className="bn_slides clearfix">
            <div className="bn_slide slide1">
              <div className="contents_wrapper">
                <div className="contents_left">
                  <h3 className="contents-tt">EVE Online</h3>
                  <p className="content-description">
                    Become a Cyberpunk and write a new legend about Night City.
                  </p>

                  <div className="buttons">
                    <span>
                      <Link to="#">
                        <i className="far fa-thumbs-up"></i>
                      </Link>
                    </span>
                    <span>
                      <Link to="#">
                        <i className="far fa-thumbs-down"></i>
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="contents_right">
                  <h4 className="contents-smalltt">Mostly Positive</h4>
                  <p>
                    <Link to="#" className="keywords btn_bg">
                      Universe
                    </Link>
                    <Link to="#" className="keywords btn_bg">
                      Dark
                    </Link>
                    <Link to="#" className="keywords btn_bg">
                      Pvp
                    </Link>
                    <Link to="#" className="keywords btn_bg">
                      Adventure
                    </Link>
                  </p>
                </div>
              </div>
              {/* <!--//contents_wrapper--> */}
            </div>
            {/* <!--//slide--> */}

            <div className="bn_slide slide2">
              <div className="contents_wrapper">
                <div className="contents_left">
                  <h3 className="contents-tt">CYBERPUNK 2077</h3>
                  <p className="content-description">
                    Become a Cyberpunk and write a new legend about Night City.
                  </p>

                  <div className="buttons">
                    <span>
                      <Link to="#">
                        <i className="far fa-thumbs-up"></i>
                      </Link>
                    </span>
                    <span>
                      <Link to="#">
                        <i className="far fa-thumbs-down"></i>
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="contents_right">
                  <h4 className="contents-smalltt">Mostly Positive</h4>
                  <p>
                    <Link to="#" className="keywords btn_bg">
                      Universe
                    </Link>
                    <Link to="#" className="keywords btn_bg">
                      Dark
                    </Link>
                    <Link to="#" className="keywords btn_bg">
                      Pvp
                    </Link>
                    <Link to="#" className="keywords btn_bg">
                      Adventure
                    </Link>
                  </p>
                </div>
              </div>
              {/* <!--//contents_wrapper--> */}
            </div>
            {/* <!--//slide--> */}

            <div className="bn_slide slide3">
              <div className="contents_wrapper">
                <div className="contents_left">
                  <h3 className="contents-tt"> GRAND THEFT AUTO 5</h3>
                  <p className="content-description">
                    Become a Cyberpunk and write a new legend about Night City.
                  </p>

                  <div className="buttons">
                    <span>
                      <Link to="#">
                        <i className="far fa-thumbs-up"></i>
                      </Link>
                    </span>
                    <span>
                      <Link to="#">
                        <i className="far fa-thumbs-down"></i>
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="contents_right">
                  <h4 className="contents-smalltt">Mostly Positive</h4>
                  <p>
                    <Link to="#" className="keywords btn_bg">
                      Universe
                    </Link>
                    <Link to="#" className="keywords btn_bg">
                      Dark
                    </Link>
                    <Link to="#" className="keywords btn_bg">
                      Pvp
                    </Link>
                    <Link to="#" className="keywords btn_bg">
                      Adventure
                    </Link>
                  </p>
                </div>
              </div>
              {/* <!--//contents_wrapper--> */}
            </div>
            {/* <!--//slide--> */}

            <div className="bn_slide slide4">
              <div className="contents_wrapper">
                <div className="contents_left">
                  <h3 className="contents-tt">NFS HEAT</h3>
                  <p className="content-description">
                    Become a Cyberpunk and write a new legend about Night City.
                  </p>

                  <div className="buttons">
                    <span>
                      <Link to="#">
                        <i className="far fa-thumbs-up"></i>
                      </Link>
                    </span>
                    <span>
                      <Link to="#">
                        <i className="far fa-thumbs-down"></i>
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="contents_right">
                  <h4 className="contents-smalltt">Mostly Positive</h4>
                  <p>
                    <Link to="#" className="keywords btn_bg">
                      Universe
                    </Link>
                    <Link to="#" className="keywords btn_bg">
                      Dark
                    </Link>
                    <Link to="#" className="keywords btn_bg">
                      Pvp
                    </Link>
                    <Link to="#" className="keywords btn_bg">
                      Adventure
                    </Link>
                  </p>
                </div>
              </div>
              {/* <!--//contents_wrapper--> */}
            </div>
            {/* <!--//slide--> */}

            <div className="bn_slide slide5">
              <div className="contents_wrapper">
                <div className="contents_left">
                  <h3 className="contents-tt">SID MEIER'S CIVILIZATION VI</h3>
                  <p className="content-description">
                    Become a Cyberpunk and write a new legend about Night City.
                  </p>

                  <div className="buttons">
                    <span>
                      <Link to="#">
                        <i className="far fa-thumbs-up"></i>
                      </Link>
                    </span>
                    <span>
                      <Link to="#">
                        <i className="far fa-thumbs-down"></i>
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="contents_right">
                  <h4 className="contents-smalltt">Mostly Positive</h4>
                  <p>
                    <Link to="#" className="keywords btn_bg">
                      Universe
                    </Link>
                    <Link to="#" className="keywords btn_bg">
                      Dark
                    </Link>
                    <Link to="#" className="keywords btn_bg">
                      Pvp
                    </Link>
                    <Link to="#" className="keywords btn_bg">
                      Adventure
                    </Link>
                  </p>
                </div>
              </div>
              {/* <!--//contents_wrapper--> */}
            </div>
            {/* <!--//slide--> */}
          </div>
          {/* <!--//slides--> */}

          <p className="controls">
            <span className="prev">
              <i className="fas fa-chevron-left"></i>
            </span>
            <span className="next">
              <i className="fas fa-chevron-right"></i>
            </span>
          </p>
        </div>
        {/* <!--//slide_wrapper--> */}
        <p className="pager">
          {/* <!-- <span>0</span>
          <span>1</span>
          <span>2</span> --> */}
        </p>
      </div>
      {/* <!--//banner--> */}

      <main>
        <Section
          title="MOST POPULAR"
          className={`section1 container outer_margin ${
            ScrollY > 100 && "active"
          }`}
        >
          <div className="content_body">
            <div className="sec1_slides">
              {popularData?.map((v) => (
                <DescriptionSlide {...v} />
              ))}
            </div>
          </div>
        </Section>
        <Section
          title="RECENTLY UPDATED"
          className={`section2 container outer_margin ${
            ScrollY > 300 && "active"
          }`}
        >
          <div className="sec2_content_wrapper">
            <ul className="content_ul clearfix">
              {recentData?.map((v) => (
                <VideoCard {...v} />
              ))}
            </ul>
            <button className="load-more" id="load-more">
              <i className="far fa-plus-square"></i>
            </button>
          </div>
        </Section>

        <Banner
          title="Steam AI"
          des={`Steam AI will recommend you some games.\n All you need to do is, just click few times!`}
          buttonText="Find your games"
          linkTo="steam_ai.html"
          onClick={() => {}}
          scroll={ScrollY}
          className={`steam_ai_wrapper outer_margin ${
            ScrollY > 700 && "active"
          }`}
        >
          <div className={`ai_right ${ScrollY > 700 && "active"}`}>
            <img src="/img/mini_slides_pic.png" alt="mini slides" />
          </div>
        </Banner>
        <Section
          title="THE COMMUNITY RECOMMENDS"
          className={`section2 container outer_margin ${
            ScrollY > 900 && "active"
          }`}
        >
          <div className="community_wrapper">
            <Slides data={slideData} />
            <p className="com_controls">
              <span className="com_prev">
                <i className="fas fa-chevron-left"></i>
              </span>
              <span className="com_next">
                <i className="fas fa-chevron-right"></i>
              </span>
            </p>
          </div>
          <div className="com_pager"></div>
        </Section>

        <Banner
          title="We create Worlds"
          des="Learn more about Careers at STEAM"
          buttonText="Explore Careers"
          linkTo="steam_ai.html"
          onClick={() => {}}
          scroll={ScrollY}
          className={`careers_wrapper outer_margin ${
            ScrollY > 100 && "active"
          }`}
        />
      </main>
      <Link to="#" className="back_to_top">
        <i className="fas fa-chevron-circle-up"></i>
      </Link>
      <Footer />
    </div>
  );
};

export default Home;
