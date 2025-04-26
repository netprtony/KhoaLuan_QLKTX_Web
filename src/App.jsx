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

function App() {
  return (
    <div className="App">
      <Router>
        {/* Navbar luôn hiển thị */}
        <Navbar />
        
        {/* Các routes để render các component theo yêu cầu */}
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <Features />
            </>
          } />
          
          {/* Route cho trang đăng ký */}
          <Route path="/quanly/register" element={<Register />} />
        </Routes>
        <div className="bg-gray-50 min-h-screen">
          <HopDongNoiTru />
          <PhieuThuTienPhong />
        </div>
        <DanhSachPhong />
        <PhieuThu />
        <ChiTietPhieuThuBang />  
        {/* Footer luôn hiển thị ở cuối */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
