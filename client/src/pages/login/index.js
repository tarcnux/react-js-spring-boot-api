import React from "react";
import './styles.css';
import logoImage from '../../assets/logo.png';
import padlockImage from '../../assets/padlock.png';

export default function Login() {
    return (        
            <div className="login-container">
                <section className="fom">
                    <img src={logoImage} alt="Erudio Logo" />
                    <form>
                        <h1>Access your Account</h1>
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password" />

                        <button type="submit">Login</button>
                    </form>
                </section>
                <img src={padlockImage} alt="Login" />
            </div>
    )
}