import React from 'react';
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="image">
          <img src="logo1.png" alt="Logo" className="logo" />
      </div>  
      <div className="search-container"> 
      <form className="search-form">
        <input type="text" placeholder="Search.." className="search-box" />
        <button type="submit" className="search-button"><AiOutlineSearch/> </button>
      </form>        
      </div>
      <div className="profile">
        <AiOutlineUser size="40px" /><Link to="/profile"></Link>
      </div>    
    </nav>

  );
}

export default Navbar;
