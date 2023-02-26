import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.scss'

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="">
        Pediatrics
      </a>
      <a className="menu-item" href="">
        Smth1
      </a>
      <a className="menu-item" href="">
        Smth2
      </a>
      <a className="menu-item" href="">
        Smth3
      </a>
      <a className="menu-item" href="">
        Smth4
      </a>
      <a className="menu-item" href="">
        Smth5
      </a>
    </Menu>
  );
};