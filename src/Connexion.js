import React, { useState } from "react";

export const Connexion = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const handleSubmit = (e) => {
	e.preventDefault();
	console.log(email);
}

    return (
        <div className="auth-form-container">
			<h2>Connexion</h2>
            <form className="login-form" onSubmit={handleSubmit}> 
				<label htmlFor="email">Email</label>
				<input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/> 
				<label htmlFor="password">Mot de passe</label>
				<input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>  
				<button type="submit">Se connecter</button>
			</form>
			<button className="link-btn" onClick={() => props.onFormSwitch('register')}>Vous n’avez pas de compte ? Inscrivez-vous</button>
        </div>
	)
}

export default Connexion  