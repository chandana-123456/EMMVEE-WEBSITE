
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./Components/Topbar/Topbar";
import Login from "./Pages/login/login";
import Write from "./Pages/Write/Write";
import About from "./Pages/About/About";
import Homepage from "./Pages/homepage/homepage";
import Contact from "./Pages/Contact/Contact";
import Logout from "./Pages/Logout/Logout";
import Post from "./Components/posts/posts";
import Register from "./Pages/register/register";
import Settings from "./Pages/settings/settings";
import Single from "./Pages/single/single";




function App() {
  return (
    <div className='App'>
      <Router>

        <Routes>
          <Route path="/" element={<Topbar />} />
        <Route path='/login'element={<Login/>}/>   
        <Route path='/Homepage'element={<Homepage/>}/>
        <Route path='/Register'element={<Register/>}/>
        <Route path='/Settings'element={<Settings/>}/>
        <Route path='/Single'element={<Single/>}/>
        <Route path='/write'element={<Write/>}/>
        <Route path='/About'element={<About/>}/>
        <Route path='/Contact'element={<Contact/>}/>
         <Route path='/Logout'element={<Logout/>}/>
          <Route path='/posts'element={<Post />}/>
          
          
          
        


        </Routes>

      </Router>
      
    </div>

  );
}

export default App;

