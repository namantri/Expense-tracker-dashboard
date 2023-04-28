import React from "react";
import { useState } from "react";
import "./Navbar.css"
const Navbar = () => {
  const [news, setNews] = useState(false);
  const [entertainment, setEntertainment] = useState(false);
  const showNews = () => {
    setNews((prev) => !prev);
  };
  const showEntertainment = () => {
    setEntertainment((prev) => !prev);
  };
  return (
    <div className="nav">
      <div
        className="collapsable"
        onMouseEnter={showNews}
        onMouseLeave={showNews}
      >
        News
        <i style={{ marginLeft: "5px" }} class={"fa-solid fa-chevron-down"}></i>
        {news && (
          <div className="news collapse">
            <div style={{ margin: "20px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        )}
      </div>
      <div
        className="collapsable"
        onMouseEnter={showEntertainment}
        onMouseLeave={showEntertainment}
      >
        Entertainment
        <i style={{ marginLeft: "5px" }} class={"fa-solid fa-chevron-down"}></i>
        {entertainment && (
          <div className="Entertainment collapse">
            <div style={{ margin: "20px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
