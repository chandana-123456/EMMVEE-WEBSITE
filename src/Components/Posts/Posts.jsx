import { Link } from "react-router-dom";

import "./Posts.css";


export default function Post({img}) {
  return (
    <div>
      <h1>Commercial and Residential Rooftops Solar Systems </h1>
      <p> This solar rooftop system complements the architecture and design of the building while turning sunlight into electricity. No health hazards are involved, and no pollutants are emitted by these rooftop solar panels. No extra land is required to set up rooftops which reduces the cost of electricity. With more widespread usage, solar rooftop panels can help in minimizing global warming in the foreseeable future. The commercial and residential rooftop solar PV Power Plants are backed with assured product support by Emmvee for their entire life of 25 years.</p>
      
      <img className="topImg" src="/images/Emmvee_Module.jpg" alt="" />
      
     
      
    </div>

    
  );
}