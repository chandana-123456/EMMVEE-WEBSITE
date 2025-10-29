import { Link } from "react-router-dom";
import "./SinglePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="/images/Emmvee_2008.webp" alt="" />
        
        
        <h1 className="singlePostTitle">
          The story of our success
          <div className="singlePostEdit">
          
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            To know 
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Blogs
              </Link>
            </b>
          </span>
          <span> </span>
        </div>
        <p className="singlePostDesc">
          
          <br />
          
        </p>
      </div>
    </div>
  );
}
