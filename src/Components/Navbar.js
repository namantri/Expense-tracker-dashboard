import React from "react";
import { useState } from "react";
import "./Navbar.css";
const Navbar = (props) => {
  const [news, setNews] = useState(false);

  const showNews = () => {
    setNews((prev) => !prev);
  };
  return (
    <div className="nav">
      <i className="fa fa-bars icon bars" onClick={props.toggleSidebar} ></i>
      <select>
        <option value={"english"}>English</option>
        <option value={"german"}>German</option>
      </select>
      <button className="login" type="button">Log Out</button>
    </div>
  );
};

export default Navbar;
