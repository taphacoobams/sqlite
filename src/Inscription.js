import React, { useState } from "react";

export const Inscription = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Inscription</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nom complet</label>
            <input value={name}  onChange={(e) => setName(e.target.value)} id="name"name="name"/>
            <label htmlFor="email">E-mail</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" id="email" name="email" />
            <label htmlFor="number">Numero de mobile</label>
            <input value={number} onChange={(e) => setNumber(e.target.value)}type="number" id="number" name="number" />
            <label htmlFor="password">Mot de passe</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" />
            <button type="submit">S'inscrire</button>
        </form>
    </div>
    )
}