import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import "./App.css";
import Home from './pages/Home';
import Login from './Pages/Login';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> {/* Navbar luôn hiển thị ở đầu */}
        {/* Các routes để render các component theo yêu cầu */}
        <div className="container">
        
          {/* Các route khác có thể thêm vào đây nếu cần */}
          <Routes>
          
            <Route path="/" element={<Login />} /> 


            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;