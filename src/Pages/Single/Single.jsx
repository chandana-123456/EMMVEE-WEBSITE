  
// import "./single.css";

import Sidebar from "../../Components/sidebar/sidebar";
import SinglePost from "../../Components/SinglePost/Singlepost";
import "./single.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}