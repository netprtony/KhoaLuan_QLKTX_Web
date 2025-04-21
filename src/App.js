import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar navbar-light bg-white border-bottom border-primary">
        <div className="container">
          {/* Logo and School Name */}
          <div className="d-flex align-items-center">
            <a className="navbar-brand" href="/">
              <img src="https://huit.edu.vn/Images/Documents/N00CT/logo-huit-web-chinh-moi-mau-xanh-02.svg?h=80" alt="Logo HUIT" className="logo-img" />
            </a>
          </div>
          {/* Right Section: Ministry and School Name */}
          <div className="text-center">
            <p className="mb-0 text-primary fw-bold">BỘ CÔNG THƯƠNG</p>
            <p className="mb-0 text-primary">TRƯỜNG ĐẠI HỌC CÔNG THƯƠNG TP. HỒ CHÍ MINH</p>
          </div>
        </div>
      </nav>
      
      {/* Banner Section */}
      <section className="banner bg-light text-center py-4">
        <div className="container">
          <h1 className="display-5 fw-bold">Hệ Thống Quản Lý Ký Túc Xá</h1>
          <p className="lead text-muted">Trường Đại học Công Thương TP. Hồ Chí Minh</p>
          <a href="/register" className="btn btn-primary">Đăng Ký Ngay</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Dịch Vụ Chính</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">Đăng Ký Nội Trú</h5>
                  <p className="card-text text-muted">Đăng ký và nhận phòng dễ dàng, nhanh chóng.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">Yêu Cầu Sửa Chữa</h5>
                  <p className="card-text text-muted">Gửi yêu cầu sửa chữa thiết bị trong phòng.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">Thanh Toán Online</h5>
                  <p className="card-text text-muted">Thanh toán phí nội trú và dịch vụ tiện lợi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-4">
        <div className="container">
          <div className="row">
            {/* Left Section: Contact Info and Social Links */}
            <div className="col-md-6 mb-3">
              <h5 className="fw-bold">THÔNG TIN LIÊN HỆ</h5>
              <p><i className="bi bi-house-door me-2"></i>Địa chỉ: Trường Đại học Công Thương TP. Hồ Chí Minh</p>
              <p><i className="bi bi-geo-alt me-2"></i>140 Lê Trọng Tấn, Phường Tây Thạnh, Quận Tân Phú, TP.HCM</p>
              <p><i className="bi bi-telephone me-2"></i>Điện thoại: 0283 8163 318</p>
              <p><i className="bi bi-envelope me-2"></i>Email: info@huit.edu.vn</p>
              {/* Social Media Links */}
              <div className="social-links mt-3">
                <a href="https://youtube.com" className="text-white me-3"><i className="bi bi-youtube fs-4"></i></a>
                <a href="https://instagram.com" className="text-white me-3"><i className="bi bi-instagram fs-4"></i></a>
                <a href="https://zalo.me" className="text-white me-3"><i className="bi bi-chat fs-4"></i></a>
                <a href="https://facebook.com" className="text-white me-3"><i className="bi bi-facebook fs-4"></i></a>
                <a href="https://tiktok.com" className="text-white"><i className="bi bi-tiktok fs-4"></i></a>
              </div>
            </div>

            {/* Right Section: Quick Links */}
            <div className="col-md-6 mb-3">
              <h5 className="fw-bold">KẾT NỐI VỚI CHÚNG TÔI</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">Thông tin tuyển dụng</a></li>
                <li><a href="#" className="text-white text-decoration-none">Bán HUIT</a></li>
                <li><a href="#" className="text-white text-decoration-none">Thư điện tử</a></li>
                <li><a href="#" className="text-white text-decoration-none">Media</a></li>
                <li><a href="#" className="text-white text-decoration-none">Văn bản, quy định</a></li>
                <li><a href="#" className="text-white text-decoration-none">Tra cứu văn bằng</a></li>
                <li><a href="#" className="text-white text-decoration-none">Elearning</a></li>
                <li><a href="#" className="text-white text-decoration-none">Thống kê truy cập</a></li>
              </ul>
            </div>
          </div>
          {/* Copyright */}
          <div className="text-center border-top pt-3">
            <p className="mb-0">© 2025 HUIT.edu.vn</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;