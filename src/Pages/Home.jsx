import React from 'react';
import Navbar_Home from '../components/Navbar_Home';
import Sidebar from '../components/Sidebar';
import '/src/assets/style/style.css';
import NoiQuy from '../HeThong/NoiQuy';
const Home = () => {
  return (
    <div className="home">
      <Navbar_Home/>
        <div className="container">
            <Sidebar />
            <NoiQuy />
        </div>
    </div>      
    
  );
};

export default Home;