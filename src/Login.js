import React, { useState } from "react";

export const Login = (props) => {
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
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/> 
				</div>  
				<button type="submit">Login</button>
			</form>
			<button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
	)
}

export default Login  