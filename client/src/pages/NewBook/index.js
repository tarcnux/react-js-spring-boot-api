import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoImage from '../../assets/logo.png';

export default function NewBook() {

    const [id, setId] = useState(null);
    const [author, setAuthor] = useState('');
    const [launchDate, setLaunchDate] = useState('');
    const [price, setPrice] = useState('');
    const [title, setTitle] = useState('');

    const history = useHistory();

    async function createNewBook(e) {
        e.preventDefault();

        const data = {
            title, author, launchDate, price,
        };

        //Recuperar access token do LocalStorage
        //const username = localStorage.getItem('username');
        const accessToken = localStorage.getItem('accessToken');

        const header = {                        
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        };

        try {
            await api.post('api/book/v1', data, header);
            history.push('/books');

        } catch (err) {
            alert('Erro ao tentar salvar o Livro. Tente novamente.');
        }
    }

    return (
        <div className="new-book-container">
            <div className="content">
                <section className="form">
                    <img src={logoImage} alt="TNX Logo" />
                    <h1>Adicionar Novo Livro</h1>
                    <p>Preencha os dados e clique 'Adicionar'</p>
                    <Link className="back-link" to="/books">
                        <FiArrowLeft size={16} color="251fc5" />
                        <span>Retornar</span>
                    </Link>
                </section>
                <form onSubmit={createNewBook}>
                    <input  type="text" placeholder="Título" 
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                    />
                    <input  type="text" placeholder="Autor" 
                            value={author}
                            onChange={e => setAuthor(e.target.value)}
                    />
                    <input  type="date" 
                            value={launchDate}
                            onChange={e => setLaunchDate(e.target.value)}
                    />
                    <input  type="text" placeholder="Preço" 
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                    />
                    <button type="submit" className="button">Adicionar</button>
                </form>
            </div>
        </div>
    );
}