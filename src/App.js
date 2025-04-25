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

     
    </div>
  );
}

export default App;