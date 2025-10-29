import React from"react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Emmvee Photovoltaics</span>
        <span className="headerTitleLg">EMMVEE BLOGS</span>
      </div>
      <img
        className="headerImg"
        src="/images/Emmvee.png"
        alt=""
      />
    </div>
  );
}
