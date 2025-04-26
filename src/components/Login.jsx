
import React from "react";
import FeatureCard from "./FeatureCard";
const Login = () => {
    return (
      <>
       
  
        <section className="login-form py-5 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4">
                <div className="card p-4 shadow-sm">
                  <h3 className="text-center mb-4">CỔNG THÔNG TIN SINH VIÊN</h3>
                  <h5 className="text-center mb-4 text-muted">ĐĂNG NHẬP HỆ THỐNG</h5>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập mã sinh viên"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Nhập mật khẩu"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="graduated"
                    />
                    <label className="form-check-label" htmlFor="graduated">
                      Đã tốt nghiệp
                    </label>
                  </div>
                  <div className="mb-3 d-flex align-items-center">
                    <input
                      type="text"
                      className="form-control me-2"
                      placeholder="Nhập mã"
                      disabled
                    />
                    <button className="btn btn-outline-secondary">
                      <i className="bi bi-arrow-repeat"></i>
                    </button>
                  </div>
                  <button className="btn btn-warning w-100 mb-3">ĐĂNG NHẬP</button>
                  <p className="text-center text-muted mb-3">
                    <small>Dành cho phụ huynh</small>
                  </p>
                  <p className="text-center mb-3">
                    Tải App Mobile sinh viên:
                  </p>
                  <div className="d-flex justify-content-center mb-3">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/8/82/QR_code_icon.svg"
                      alt="QR Code"
                      style={{ width: "50px", marginRight: "10px" }}
                    />
                    <img
                      src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                      alt="App Store"
                      style={{ width: "120px", marginRight: "10px" }}
                    />
                    <img
                      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                      alt="Google Play"
                      style={{ width: "135px" }}
                    />
                  </div>
                  <button className="btn btn-outline-info w-100">
                    Hướng dẫn sử dụng App OneUni
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

export default Login;