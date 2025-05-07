import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Register from "./quanly/Register"; 
import DanhSachPhong from "./Phong/DanhSachPhong";
import PhieuThu from "./ThanhToan/PhieuThu";
import HopDongNoiTru from "./NoiTru/HopDongNoiTru";
import ChiTietPhieuThuBang from "./ThanhToan/ChiTietPhieuThuBang";  
import PhieuThuTienPhong from "./components/PhieuThuTienPhong";
import Login from "./components/login";
import Notifications from "./components/notifications";
import "./App.css"
function App() {
  return (
    <div className="App">
      <Router>
        {/* Navbar luôn hiển thị */}
        <Navbar />
       
        {/* Các routes để render các component theo yêu cầu */}
        <div className="container">
         
          <Notifications />
          <Login />
        </div>
        {/* Footer luôn hiển thị ở cuối */}
    
      </Router>
    </div>
  );
}

export default App;
