import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="  Sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="/images/Emmvee_Module.png"
          alt=""
        />
        <p>
          Lets Explore the Categories of Emmvee Photovoltaics
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Emmvee 1">
              Emmvee 1
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Emmvee 2 ">
              Emmvee 2
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Emmvee 3">
              Emmvee 3
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Emmvee 4">
              Emmvee 4
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Emmvee 5">
              Emmvee 5
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Emmvee 6">
              Emmvee 6
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
