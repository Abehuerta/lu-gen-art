import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navContainer'>
      <ul className='navbar'>
        <li className='navItem'>
          <Link to={"/"}>Home</Link>
        </li>
        <li className='navItem'>
          <Link to={"/generate"}>Generate</Link>
        </li>
        <li className='navItem'>
          <Link to={"/gallery"}>Gallery</Link>
        </li>
      </ul>
      <ul className='navbar'>
        <li className='navItem'>
          <a href='https://github.com/Abehuerta/lu-gen-art'>Github</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
