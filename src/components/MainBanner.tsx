import React from "react";
import { Link } from "react-router-dom";
import Slides from "./Slides";

const Slide = ({
  title,
  des,
  tags,
  reputation,
}: {
  title: string;
  des: string;
  tags: string[];
  reputation: number;
}) => {
  return (
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
  );
};

const SLIDE_GAP = 14;
const SLIDE_MOVING_UNIT = 500;
const IMG_WIDTH = 400;

const MainBanner = ({}) => {
  const [slideSpot, setSlideSpot] = React.useState<number>(0);
  const imgQuantity = 3;
  const slideWidth = IMG_WIDTH * imgQuantity + (imgQuantity - 1) * SLIDE_GAP;

  const hiddenedSlideWidth = slideWidth - window.innerWidth;

  const handlePrevBtn = () => {
    if (Math.abs(slideSpot) < SLIDE_MOVING_UNIT) {
      // 슬라이드 왼쪽으로 남은 값이 한 번에 이동하는 값보다 작으면
      setSlideSpot(0);
      // 움직이지마
    } else {
      setSlideSpot((prev) => prev + SLIDE_MOVING_UNIT);
      // 아니라면 현재 위치에서 한 번에 이동해야 하는 값만큼 왼쪽으로 이동
    }
  };

  const handleNextBtn = () => {
    if (hiddenedSlideWidth - Math.abs(slideSpot) < SLIDE_MOVING_UNIT) {
      // 남아있는 슬라이드의 길이에서 현재 슬라이드의 위치값을 뺀 값이 한번에 움직여야하는 값보다 많으면
      setSlideSpot(slideSpot - (hiddenedSlideWidth - Math.abs(slideSpot)));
      // slideEnd의 값을 slideSpot의 값과 동일하게 만들어 nextBtn을 보이지 않게 한다
    } else {
      // 남아있는 슬라이드의 길이가 한번에 움직여야하는 값보다 크면
      setSlideSpot((prev) => prev - SLIDE_MOVING_UNIT);
      // 한 번에 움직여야하는 만큼 값을 빼준다
    }
  };

  return (
    <div className="banner">
      <div className="slide_wrapper">
        <div className="bn_slides clearfix">
          {[
            {
              title: "sdfds",
              des: "sdfsdf",
              reputation: 1,
              tags: ["sdfdsf", "sdfdsf", "sdfsd"],
            },
            {
              title: "sdfds",
              des: "sdfsdf",
              reputation: 1,
              tags: ["sdfdsf", "sdfdsf", "sdfsd"],
            },
            {
              title: "sdfds",
              des: "sdfsdf",
              reputation: 1,
              tags: ["sdfdsf", "sdfdsf", "sdfsd"],
            },
          ]?.map((v) => (
            <Slide {...v} />
          ))}
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
  );
};
export default MainBanner;

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
</div>;

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
</div>;

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
</div>;

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
</div>;
