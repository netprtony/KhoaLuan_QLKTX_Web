import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginSection = () => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const navigate = useNavigate(); // Khai báo useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra thông tin đăng nhập mẫu (giả lập)
    const validStudentId = 'SV123';
    const validPassword = 'password123';

    if (studentId === validStudentId && password === validPassword && captcha) {
      // Đăng nhập thành công, chuyển hướng sang trang Home
      navigate('/home');
    } else {
      alert('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.');
    }
  };

  return (
    <div className="login-section">
      <h1>CỔNG KÝ TÚC XÁ SINH VIÊN</h1>
      <h2>ĐĂNG NHẬP HỆ THỐNG</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Nhập mã sinh viên"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="captcha">
          <label>
            <input type="checkbox" /> Đã tốt nghiệp
          </label>
          <div>
            <span>Nhập mã</span>
            <input
              type="text"
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
              placeholder=""
              required
            />
            <button type="button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9H0m0 0v5h5.582M20 20v-5h-.582m-15.356-2A8.001 8.001 0 0019.418 15H24m0 0v-5h-5.582"></path>
              </svg>
            </button>
          </div>
        </div>
        <button type="submit" className="login-btn">
          ĐĂNG NHẬP
        </button>
      </form>
      <a href="#">Dành cho phụ huynh</a>
      <div className="app-links">
        <p>Tải App Mobile sinh viên:</p>
        <img src="img_qr_oneuni.png" alt="QR Code" />
        <img src="store_appstore.svg" alt="App Store" />
        <img src="google_play.svg" alt="Google Play" />
      </div>
      <button className="guide-btn">Hướng dẫn sử dụng App OneUni</button>
    </div>
  );
};

export default LoginSection;