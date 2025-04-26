import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-white border-bottom border-primary">
    <div className="container">
      {/* Logo and School Name */}
      <div className="d-flex align-items-center">
        <a className="navbar-brand" href="/">
          <img src="logo-huit.svg" alt="Logo HUIT" className="logo-img" style={{ height: "80px"}} />
        </a>
      </div>
      {/* Right Section: Ministry and School Name */}
      <div className="text-center">
        <p className="mb-0 text-primary fw-bold">BỘ CÔNG THƯƠNG</p>
        <p className="mb-0 text-primary">TRƯỜNG ĐẠI HỌC CÔNG THƯƠNG TP. HỒ CHÍ MINH</p>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
