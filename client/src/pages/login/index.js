import React from "react";
import './styles.css';
import logoImage from '../../assets/logo.png';
import padlockImage from '../../assets/padlock.png';

export default function Login() {
    return (        
            <div className="login-container">
                <section className="form">
                <img src={logoImage} alt="TNX Logo" />
                    <form>
                        <h1>Acessar sua conta</h1>
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password" />

                        <button type="submit" className="button">Login</button>
                    </form>
                </section>
                <img src={padlockImage} alt="Login" />
            </div>
    )
}