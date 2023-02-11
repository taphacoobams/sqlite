import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name}  onChange={(e) => setName(e.target.value)} id="name"name="name"/>
            <label htmlFor="email">mail</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" id="email" name="email" />
            <label htmlFor="password">assword</label>
            <input value={pass} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}