import React from "react";
import { Link } from "react-router-dom";
import Tag from "./Tag";

export type videoCardType = {
  image: string;
  title: string;
  produce: string;
  price: string;
  url: string;
  tags: string[];
};

const VideoCard = ({
  image,
  title,
  produce,
  price,
  url,
  tags,
}: videoCardType) => {
  return (
    <li className="sec2_content">
      <img src={image} alt="redDeadRedemption" />
      <dl>
        <dt>{title}</dt>
        <dd>{produce}</dd>
        <dd>${price}</dd>
      </dl>
      <div className="sec2_content_descirption">
        <h2 className="content_title">{title}</h2>
        <video src={url} muted autoPlay loop></video>
        {tags?.map((v) => (
          <Tag text={v} />
        ))}
      </div>
    </li>
  );
};

export default VideoCard;

// <li className="sec2_content">
// <img src="images/alienIsolation.jpg" alt="alienIsolation" />
// <dl>
//   <dt>Alien - Isolation</dt>
//   <dd>Behaviour Interactive</dd>
//   <dd>$21.00</dd>
// </dl>
// <div className="sec2_content_descirption">
//   <h2 className="content_title">Alien - Isolation</h2>
//   <video
//     src="https://cdn.akamai.steamstatic.com/steam/apps/256686491/microtrailer.webm?t=1496661560&v=2"
//     muted
//     autoPlay
//     loop
//   ></video>
//   <p>
//     <Link to="#" className="sec1_keywords">
//       Horror
//     </Link>
//     <Link to="#" className="sec1_keywords">
//       PvP
//     </Link>
//     <Link to="#" className="sec1_keywords">
//       Adventure
//     </Link>
//   </p>
// </div>
// </li>
// <li className="sec2_content">
// <img src="images/assasinCreedValhalla.jpg" alt="assasinCreed" />
// <dl>
//   <dt>Assasin Creed - Valhalla</dt>
//   <dd>Ubisoft Montreal</dd>
//   <dd>$21.00</dd>
// </dl>
// <div className="sec2_content_descirption">
//   <h2 className="content_title">Assasin Creed - Valhalla</h2>
//   <video
//     src="https://cdn.akamai.steamstatic.com/steam/apps/256658589/microtrailer.webm?t=1528288687&v=2"
//     muted
//     autoPlay
//     loop
//   ></video>
//   <p>
//     <Link to="#" className="sec1_keywords">
//       Horror
//     </Link>
//     <Link to="#" className="sec1_keywords">
//       PvP
//     </Link>
//     <Link to="#" className="sec1_keywords">
//       Adventure
//     </Link>
//   </p>
// </div>
// </li>
// <li className="sec2_content">
// <img src="images/destiny2.jpg" alt="destiny2" />
// <dl>
//   <dt>Destiny 2</dt>
//   <dd>Behaviour Interactive</dd>
//   <dd>$21.00</dd>
// </dl>
// <div className="sec2_content_descirption">
//   <h2 className="content_title">Destiny 2</h2>
//   <video
//     src="https://cdn.akamai.steamstatic.com/steam/apps/256809333/movie480_vp9.webm?t=1612891968"
//     muted
//     autoPlay
//     loop
//   ></video>
//   <p>
//     <Link to="#" className="sec1_keywords">
//       Horror
//     </Link>
//     <Link to="#" className="sec1_keywords">
//       PvP
//     </Link>
//     <Link to="#" className="sec1_keywords">
//       Adventure
//     </Link>
//   </p>
// </div>
// </li>
// <li className="sec2_content">
// <img
//   src="images/BorderlandsTheHandsomeCollection.jpg"
//   alt="Borderlands"
// />
// <dl>
//   <dt>BORDERLANDS</dt>
//   <dd>Behaviour Interactive</dd>
//   <dd>$21.00</dd>
// </dl>
// <div className="sec2_content_descirption">
//   <h2 className="content_title">BORDERLANDS</h2>
//   <video
//     src="https://cdn.akamai.steamstatic.com/steam/apps/2029699/movie480.webm?t=1447359143"
//     muted
//     autoPlay
//     loop
//   ></video>
//   <p>
//     <Link to="#" className="sec1_keywords">
//       Horror
//     </Link>
//     <Link to="#" className="sec1_keywords">
//       PvP
//     </Link>
//     <Link to="#" className="sec1_keywords">
//       Adventure
//     </Link>
//   </p>
// </div>
// </li>
// <li className="sec2_content">
// <img src="images/fortnite.jpg" alt="fortnite" />
// <dl>
//   <dt>FORTNITE</dt>
//   <dd>Epic Games</dd>
//   <dd>$21.00</dd>
// </dl>
// <div className="sec2_content_descirption">
//   <h2 className="content_title">FORTNITE</h2>
//   <video
//     src="https://cdn.akamai.steamstatic.com/steam/apps/256802095/microtrailer.webm?t=1600866008&v=2"
//     muted
//     autoPlay
//     loop
//   ></video>
//   <p>
//     <Link to="#" className="sec1_keywords">
//       Horror
//     </Link>
//     <Link to="#" className="sec1_keywords">
//       PvP
//     </Link>
//     <Link to="#" className="sec1_keywords">
//       Adventure
//     </Link>
//     <Link to="#" className="sec1_keywords">
//       Adventure
//     </Link>
//   </p>
// </div>
// </li>
// <li className="sec2_content">
// <img src="images/warframe.png" alt="warframe" />
// <dl>
//   <dt>WARFRAME</dt>
//   <dd>Digital Extreams</dd>
//   <dd>$21.00</dd>
// </dl>
// <div className="sec2_content_descirption">
//   <h2 className="content_title">WARFRAME</h2>
//   <video
//     src="https://cdn.akamai.steamstatic.com/steam/apps/256788251/movie480.mp4?t=1591656404"
//     muted
//     autoPlay
//     loop
//   ></video>
//   <p>
//     <Link to="#" className="sec1_keywords">
//       Horror
//     </Link>
//     <Link to="#" className="sec1_keywords">
//       PvP
//     </Link>
//     <Link to="#" className="sec1_keywords">
//       Adventure
//     </Link>
//     <Link to="#" className="sec1_keywords">
//       Adventure
//     </Link>
//   </p>
// </div>
// </li>
