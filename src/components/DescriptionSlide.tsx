import React from "react";
import { Link } from "react-router-dom";
import Tag from "./Tag";

export type descriptionSlideType = {
  title: string;
  des: string;
  image: string;
  tags: string[];
  price: string;
};
const DescriptionSlide = ({
  title,
  des,
  image,
  tags,
  price,
}: descriptionSlideType) => {
  return (
    <div className="sec1_slide slide1">
      <img src={image} alt="" />
      <Link to="#">
        <div className="sec1_content_wrapper">
          <div className="sec1_content">
            <h3>{title}</h3>
            <p>Very Positive (348,961)</p>
            <span>{des}</span>
            <p>
              {tags?.map((v) => (
                <Tag text={v} />
              ))}
            </p>
            <p className="price">${price}</p>
          </div>
          {/* <!--//content_wrapper--> */}
        </div>
        {/* <!--//sec1_content--> */}
      </Link>
    </div>
  );
};
export default DescriptionSlide;

// {
//   /* <!--//slide1--> */
// }
// <div className="sec1_slide slide2">
//   <div className="sec1_content_wrapper">
//     <div className="sec1_content">
//       <h3>PUBG</h3>
//       <p>Very Positive (348,961)</p>
//       <span>
//         Dead by Daylight is a multiplayer (4vs1) horror game where one player
//         takes on the role of the savage Killer, and the other four players play
//         as Survivors, trying to escape the Killer and avoid being caught and
//         killed.
//       </span>
//       <p>
//         <Link to="#" className="sec1_keywords">
//           PvP
//         </Link>
//         <Link to="#" className="sec1_keywords">
//           Battle
//         </Link>
//         <Link to="#" className="sec1_keywords">
//           Action
//         </Link>
//       </p>
//       <p className="price">$32.20</p>
//     </div>

//     {/* <!--//content_wrapper--> */}
//   </div>
//   {/* <!--//sec1_content--> */}
// </div>;
// {
//   /* <!--//slide2--> */
// }
// <div className="sec1_slide slide3">
//   <div className="sec1_content_wrapper">
//     <div className="sec1_content">
//       <h3>Football manager 2021</h3>
//       <p>Very Positive (348,961)</p>
//       <span>
//         Dead by Daylight is a multiplayer (4vs1) horror game where one player
//         takes on the role of the savage Killer, and the other four players play
//         as Survivors, trying to escape the Killer and avoid being caught and
//         killed.
//       </span>
//       <p>
//         <Link to="#" className="sec1_keywords">
//           Sports
//         </Link>
//         <Link to="#" className="sec1_keywords">
//           Soccer
//         </Link>
//         <Link to="#" className="sec1_keywords">
//           Football
//         </Link>
//       </p>
//       <p className="price">$32.20</p>
//     </div>
//     {/* <!--//content_wrapper--> */}
//   </div>
//   {/* <!--//sec1_content--> */}
// </div>;
// {
//   /* <!--//slide3--> */
// }
// <div className="sec1_slide slide4">
//   <div className="sec1_content_wrapper">
//     <div className="sec1_content">
//       <h3>CIVILIZATION VI</h3>
//       <p>Very Positive (348,961)</p>
//       <span>
//         Active research in technology and culture unlocks new potential, and
//         competing leaders will pursue their own agendas based on their
//         historical traits as you race for one of five ways to achieve victory in
//         the game.
//       </span>
//       <p>
//         <Link to="#" className="sec1_keywords">
//           strategy
//         </Link>
//         <Link to="#" className="sec1_keywords">
//           Historical
//         </Link>
//         <Link to="#" className="sec1_keywords">
//           Adventure
//         </Link>
//       </p>
//       <p className="price">$32.20</p>
//     </div>
//     {/* <!--//content_wrapper--> */}
//   </div>
//   {/* <!--//sec1_content--> */}
// </div>;
// {
//   /* <!--//slide4--> */
// }
// <div className="sec1_slide slide5">
//   <div className="sec1_content_wrapper">
//     <div className="sec1_content">
//       <h3>EA SPORTS FIFA 21</h3>
//       <p>Very Positive (348,961)</p>
//       <span>
//         Football is back with EA SPORTS™ FIFA 21, featuring more ways to team up
//         on the street or in the stadium to enjoy even bigger victories with
//         friends.
//       </span>
//       <p>
//         <Link to="#" className="sec1_keywords">
//           Sports
//         </Link>
//         <Link to="#" className="sec1_keywords">
//           Soccer
//         </Link>
//         <Link to="#" className="sec1_keywords">
//           Football
//         </Link>
//       </p>
//       <p className="price">$32.20</p>
//     </div>
//     {/* <!--//content_wrapper--> */}
//   </div>
//   {/* <!--//sec1_content--> */}
// </div>;
// {
//   /* <!--//slide5--> */
// }
// <div className="sec1_slide slide6">
//   <div className="sec1_content_wrapper">
//     <div className="sec1_content">
//       <h3>Little Nightmares II</h3>
//       <p>Very Positive (348,961)</p>
//       <span>
//         Little Nightmares II is a suspense adventure game. A young boy trapped
//         in a world that has been distorted by an evil transmission. Together
//         with new friend Six, he sets out to discover the source of the
//         Transmission.
//       </span>
//       <p>
//         <Link to="#" className="sec1_keywords">
//           Horror
//         </Link>
//         <Link to="#" className="sec1_keywords">
//           Adventure
//         </Link>
//         <Link to="#" className="sec1_keywords">
//           Dark
//         </Link>
//       </p>
//       <p className="price">$32.20</p>
//     </div>
//     {/* <!--//content_wrapper--> */}
//   </div>
//   {/* <!--//sec1_content--> */}
// </div>;
// {
//   /* <!--//slide6--> */
// }
