import React from "react";

export type slideType = {
  title: string;
  url: string;
  thumbnail: string;
  comment: string;
  user_name: string;
  play_time: number;
  recommended: number;
};
const Slide = ({
  title,
  url,
  thumbnail,
  comment,
  user_name,
  play_time,
  recommended,
}: slideType) => {
  return (
    <div className="com_slide slide1 clearfix">
      <div className="com_left">
        <h3 className="contents-tt">{title}</h3>
        <video src={url} loop muted></video>
      </div>
      <div className="com_right">
        <div className="com_right_content clearfix">
          <p>{comment}</p>
          <img src={thumbnail} alt="portrait" />
          <dl>
            <dt>{user_name}</dt>
            <dd>Played {play_time} hrs at review time</dd>
            <dd>{recommended} people found this review helpful</dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

const Slides = ({ data }: { data: Array<slideType> }) => {
  return (
    <div className="community_slides">
      {data?.map((v: slideType) => (
        <Slide {...v} />
      ))}
    </div>
  );
};
export default Slides;

{
  /* <div className="com_slide slide2 clearfix">
<div className="com_left">
  <h3 className="contents-tt">Don't Starve</h3>
  <div className="video_box">
    <video
      src="https://cdn.cloudflare.steamstatic.com/steam/apps/2028604/microtrailer.webm?t=1447357797&v=2"
      loop
      muted
    ></video>
  </div>
</div>

<div className="com_right">
  <div className="com_right_content">
    <p>
      "Hi, the game is super repeat some minecraft game
      mechanics. It's great that it works on any PC and anyone
      can play the game. It would be nice to be multiplayer to
      play with friends. ..."
    </p>
    <img src="images/portrait.png" alt="portrait" />
    <dl>
      <dt>Hildegard_917</dt>
      <dd>Played 1.4 hrs at review time</dd>
      <dd>46 people found this review helpful</dd>
    </dl>
  </div>
</div>
</div>
<div className="com_slide slide3 clearfix">
<div className="com_left">
  <h3 className="contents-tt">
    Mass Effect : Andromeda Deluxe Edition
  </h3>
  <video
    src="https://cdn.cloudflare.steamstatic.com/steam/apps/256787752/microtrailer.webm?t=1591887420&v=2"
    loop
    muted
  ></video>
</div>

<div className="com_right">
  <div className="com_right_content">
    <p>
      "Hi, the game is super repeat some minecraft game
      mechanics. It's great that it works on any PC and anyone
      can play the game. It would be nice to be multiplayer to
      play with friends. ..."
    </p>
    <img src="images/portrait.png" alt="portrait" />
    <dl>
      <dt>Hildegard_917</dt>
      <dd>Played 1.4 hrs at review time</dd>
      <dd>46 people found this review helpful</dd>
    </dl>
  </div>
</div>
</div> */
}
