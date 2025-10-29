import React from "react";
import "./About.css"
import Sidebar from "../../Components/sidebar/sidebar";

function About() {
   return (
    <div className="write">
      <h1>Welcome to Emmvee/Emmvee Technologies</h1>
      <div>
      <img src="/images/Emmvee.png" alt="" />
      </div>
      <Sidebar />
    </div>
  
  );
}

export default About;
