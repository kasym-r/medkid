import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <Sidebar />
      <div className="logo">
        <div className="login">
          <button>LogIn</button>
        </div>
        <img src="https://i.ibb.co/4KtXYDB/logomed.png" alt="" />
        <span>F.S.C.W.</span>
      </div>
    </header>
  );
};

export default Header;
