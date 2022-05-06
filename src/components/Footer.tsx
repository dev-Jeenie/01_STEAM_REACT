import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-contents">
        <div className="content container">
          <div className="clearfix">
            <Link to="#" className="sprite logo">
              steam logo
            </Link>
            <Link to="#" className="sprite valve">
              valve logo
            </Link>
            <span>
              &copy;2021 Valve Corporation. All rights reserved. All trademarks
              are property of their respective owners in the US and other
              countries. <br /> VAT included in all prices where applicable.
            </span>
          </div>
          <ul>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
            <li>
              <Link to="#">Legal</Link>
            </li>
            <li>
              <Link to="#">Steam Subscriber Agreement</Link>
            </li>
            <li>
              <Link to="#">Refunds</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="#">About Valve</Link>
            </li>
            <li>
              <Link to="#">Steamworks</Link>
            </li>
            <li>
              <Link to="#">Jobs</Link>
            </li>
            <li>
              <Link to="#">Steam Distribution</Link>
            </li>
            <li>
              <Link to="#">Gift Cards</Link>
            </li>
            <li>
              <Link to="#">
                <i className="fab fa-twitter-square"></i>Steam
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fab fa-instagram"></i>Steam
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
