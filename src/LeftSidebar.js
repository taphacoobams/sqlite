import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiPhone } from "react-icons/bi";

function LeftSidebar() {
  return (
    <nav className="left-sidebar">
      <ul>
        <li><AiOutlineHome size="1.5em" /><Link to="/home">Accueil</Link></li>
        <li><AiOutlineMessage size="1.5em" /><Link to="/messages">Messages</Link></li>
        <li><AiOutlineUser size="1.5em" /><Link to="/profile">Profil</Link></li>
        <li><BiPhone size="1.5em" /><Link to="/contact">Contacter un botaniste</Link></li>
        <li><AiOutlinePlusCircle size="1.5em" /><Link to="/post">Demander un gardinnage</Link></li>
        <li><AiOutlineSetting size="1.5em" /><Link to="/settings">Parametres</Link></li>
        <li><AiOutlineLogout size="1.5em" /><Link to="/">Deconnexion</Link></li>
      </ul>
    </nav>
  );
}

export default LeftSidebar;
