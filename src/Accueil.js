import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <nav className="navbar">
        <div className="left-nav">
          <Link to="/" className="brand">Mon application de jardinage</Link>
        </div>
        <div className="right-nav">
          <ul>
            <li><Link to="/demande-gardinnage">Demander un gardinnage</Link></li>
            <li><Link to="/contacter-botaniste">Contacter un botaniste</Link></li>
            <li><Link to="/gerer-demandes">Gérer mes demandes</Link></li>
            <li><Link to="/gerer-gardinnages">Gérer mes gardinnages</Link></li>
            <li><Link to="/gerer-messages">Mes messages</Link></li>
            <li><Link to="/mon-compte"><img src='./profile-pic.jpg' alt="Profile" className="profile-pic" />Mon compte</Link></li>
            <li><button className="logout">Déconnexion</button></li>
          </ul>
        </div>
      </nav>
      <h1>Bienvenue sur la page d'accueil</h1>
      <p>Vous pouvez accéder à différentes fonctionnalités en utilisant la barre de navigation ci-dessus.</p>
    </div>
  );
}

export default Home;
