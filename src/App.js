import React, { useState } from "react";
import'./App.css';
import {Connexion} from "./Connexion";
import {Inscription} from "./Inscription" 

function App() {
  const [currentForm, setCurrentForm] = useState('connexion');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      {
        currentForm === "connexion" ? <Connexion onFormSwitch={toggleForm} /> : <Inscription onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
