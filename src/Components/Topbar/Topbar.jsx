import "./Topbar.css";
import SinglePost from "../SinglePost/Singlepost";
import { Link } from "react-router-dom";

export default function Topbar() {
  const user = true; // Example: can be replaced with auth state
  return (
    <div className="topbar">
      {/* Left section */}
      <div className="topLeft">
        <i className="topSearchIcon fas fa-search"></i>
      </div>

      {/* Social icons */}
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>

      {/* Center section */}
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/about">ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/register">REGISTER</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/login">LOGIN</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">WRITE</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/settings">SETTINGS</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/logout">LOGOUT</Link>
          </li>
        </ul>
      </div>

      {/* Post section */}
      <SinglePost />

      {/* Footer section */}
      <footer className="footer">
        <div className="footerContent">
          <p>© {new Date().getFullYear()} My Blog. All rights reserved.</p>
          <div className="footerLinks">
            <Link className="footerLink" to="/privacy">Privacy Policy</Link>
            <Link className="footerLink" to="/terms">Terms of Service</Link>
            <Link className="footerLink" to="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
