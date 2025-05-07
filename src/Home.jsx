import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Navbar_Home  from "./components/Navbar_Home";
import Sidebar from "./components/Sidebar";
function Home() {
  return (
    <div className="App">
      <Router>
        {/* Navbar luôn hiển thị */}
        <Navbar_Home />
       
        {/* Các routes để render các component theo yêu cầu */}
      <Sidebar />
        {/* Footer luôn hiển thị ở cuối */}
    
      </Router>
    </div>
  );
}

export default Home;