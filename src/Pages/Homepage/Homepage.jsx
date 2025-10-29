import { useLocation } from "react-router-dom";


import "./homepage.css";

import Header from "../../Components/header/header";
import Sidebar from "../../Components/sidebar/sidebar";
import Post from "../../Components/post/post";

export default function Homepage() {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <Header />
      <div className="home">
        <Post />
        <Sidebar />
        
        <Header />
      </div>
    </>
  );
}
