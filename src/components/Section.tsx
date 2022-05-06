import { type } from "os";
import React, { HTMLAttributes, ReactChild, ReactNode } from "react";

type SectionType = {
  title: string;
  className: string;
  children: JSX.Element | JSX.Element[];
};

const Section = ({ title, className, children }: SectionType) => {
  return (
    <section className={className}>
      <div className="content_top">
        <h2 className="big-title">{title || "--"}</h2>
        <p className="sec1_controls">
          {/* <button> */}
          <span className="sec1_prev">
            <i className="fas fa-chevron-left"></i>
            {"<"}
          </span>
          {/* </button> */}
          {/* <button> */}
          <span className="sec1_next">
            <i className="fas fa-chevron-right"></i>
            {">"}
          </span>
          {/* </button> */}
        </p>
      </div>
      {children}
    </section>
  );
};
export default Section;
