import React, { useState } from "react";

export const Connexion = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const handleSubmit = (e) => {
	e.preventDefault();
	console.log(email);
}

    return (
        <div>
            <form className="login-form" onSubmit={handleSubmit}> 
				<div> 
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/> 
				</div> 
				<div> 
					<label htmlFor="password">Mot de passe</label>
					<input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/> 
				</div>  
				<button type="submit">Se connecter</button>
			</form>
			<button className="link-btn" onClick={() => props.onFormSwitch('register')}>Vous n’avez pas de compte ? Inscrivez-vous</button>
        </div>
	)
}

export default Connexion  