import React, { ReactChild } from "react";
import { Link } from "react-router-dom";

type bannerType = {
  title: string;
  des: string;
  buttonText: string;
  onClick: () => void;
  linkTo: string;
  image?: string;
  className: string;
  scroll: number;
  id?: string;
  children?: ReactChild;
};
const Banner = ({
  title,
  des,
  buttonText,
  onClick,
  linkTo,
  className,
  scroll,
  id,
  children,
}: bannerType) => {
  return (
    <>
      <div className={className} id={id}>
        <div className="content_wrapper clearfix container">
          <div className={`content ${scroll > 500 && "active"}`}>
            <h3 className="pic_contents-tt">{title}</h3>
            <p className="pic_contents-desription">{des}</p>

            <span className="btn">
              <Link to={linkTo}>{buttonText}</Link>
            </span>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Banner;
