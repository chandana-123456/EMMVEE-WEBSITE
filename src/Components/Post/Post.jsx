import { Link } from "react-router-dom";
import "./post.css";
import React from "react";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
         src="/images/Emmvee_2008.webp" alt="" />
      
      <div className="postInfo">
         <h1>Emmvee’s solar modules comply with internationally recognized quality and safety standards, including IEC 61215 and IEC 61730 for module performance and safety, ISO 45001 for occupational health and safety, and BIS certification (Bureau of Indian Standards). The company is also ISO 9001 (quality management) and ISO 14001 (environmental management) certified. </h1>
        <div className="post Emmvee Solar">
          
          <span className="postEmmvee Solar">
            <Link className="link" to="/posts?Emmvee Solar=Varients">
              about Emmvee
            </Link>
            
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            Posts from Emmvee
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Emmvee is the Premier in Solars
      </p>
    </div>
  );
}
