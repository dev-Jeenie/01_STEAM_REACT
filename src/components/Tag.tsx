import React from "react";
import { Link } from "react-router-dom";

const Tag = ({ text }: { text: string }) => {
  return (
    <Link to="#" className="sec1_keywords">
      {text}
    </Link>
  );
};

export default Tag;
