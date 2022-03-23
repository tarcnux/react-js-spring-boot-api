import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import './styles.css';

import api from '../../services/api';


import logoImage from '../../assets/logo.png';
import padlockImage from '../../assets/padlock.png';

export default function Login() {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function login(e) {
        e.preventDefault();
        const data = {
            username, 
            password
        };

        try {
            console.log('Autenticando...');
            const response = await api.post('auth/signin', data);
            localStorage.setItem('username', username);
            localStorage.setItem('accessToken', response.data.token);

            history.push('/books');
        } catch (err) {
            console.log('username: ' + username);
            console.log('password: ' + password);
            alert('Falhou o login, tente novamente!');
        }
    }

    return (        
            <div className="login-container">
                <section className="form">
                <img src={logoImage} alt="TNX Logo" />
                    <form onSubmit={login}>
                        <h1>Acessar sua conta</h1>
                        <input 
                            type="text" 
                            placeholder="Username"
                            value={username}
                            onChange={e => setUserName(e.target.value)}
                        />
                        <input 
                            type="password" 
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />

                        <button type="submit" className="button">Login</button>
                    </form>
                </section>
                <img src={padlockImage} alt="Login" />
            </div>
    )
}