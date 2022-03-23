import React, {useEffect, useState} from "react";
//import { Link, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi'; //https://feathericons.com/

import api from '../../services/api';

import './styles.css';

import logoImage from '../../assets/logo.png';

export default function Books() {

     const [books, setBooks] = useState([]);

    //Recuperar access token do LocalStorage
    const username = localStorage.getItem('username');
    const accessToken = localStorage.getItem('accessToken');
    //const history = useHistory();
    const header = {                        
          headers: {
          Authorization: `Bearer ${accessToken}`
          }
     };
    
     //Carrega os dados no carregamento da tela
    useEffect(() => {
          api.get('api/book/v1', header)
          .then(response => {setBooks(response.data._embedded.bookVoes)});
    }, []);

    return (
       <div className="book-container">
           <header>
               <img src={logoImage} alt="TNX Logo" />
               <span>Bem vindo, <strong>{username.toUpperCase()}</strong>!</span>
               <Link className="button" to="book/new">Adicionar novo livro</Link>
               <button>
                    <FiPower size={18} color="#251fc5" />
               </button>
           </header>
           <h1>Livros cadastrados</h1>
           <ul>
               {books.map( book => (               
                    <li key={book.id}>
                         <strong>Título</strong>
                         <p>{book.title}</p>
                         <strong>Autor</strong>
                         <p>{book.author}</p>
                         <strong>Preço</strong>
                         <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(book.price)}</p>
                         <strong>Data de Lançamento</strong>
                         <p>{Intl.DateTimeFormat('pt-BR').format(new Date(book.launchDate))}</p>
     
                         <button>
                              <FiEdit size={18} color="#251fc5" />
                         </button>
     
                         <button>
                              <FiTrash2 size={18} color="#251fc5" />
                         </button>
                    </li>
               ))} 
                              
           </ul>
       </div>
    )
}