import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logoImage from '../../assets/logo.png';

export default function NewBook() {
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
                <form>
                    <input type="text" placeholder="Título" />
                    <input type="text" placeholder="Autor" />
                    <input type="date" />
                    <input type="text" placeholder="Preço" />

                    <button type="submit" className="button">Adicionar</button>
                </form>
            </div>
        </div>
    );
}