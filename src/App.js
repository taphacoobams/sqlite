import React  from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Connexion from './Connexion';
import Inscription from './Inscription';
import Accueil from './Accueil';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Connexion />} />
          <Route path="/register" element={<Inscription />} />
          <Route path="/home" element={<Accueil />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
