import React, {useEffect, useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi'; //https://feathericons.com/

import api from '../../services/api';

import './styles.css';

import logoImage from '../../assets/logo.png';

export default function Books() {

     const [books, setBooks] = useState([]);

    //Recuperar access token do LocalStorage
    const username = localStorage.getItem('username');
    const accessToken = localStorage.getItem('accessToken');
    const history = useHistory();
  
    async function logout() {
         console.log('Saindo ...');
         localStorage.clear();
         history.push('/')
    }
    
    async function deleteBook(id) {
     console.log(`Excluíndo livro ${id}...`);
          try {
               await api.delete(`api/book/v1/${id}`, {                        
                    headers: {
                    Authorization: `Bearer ${accessToken}`
                    }
               });

               setBooks(books.filter(book => book.id !== id));
          } catch(err) {
               alert('Não foi possível apagar!');
          }
     }
    
     //Carrega os dados no carregamento da tela
    useEffect(() => {
         console.log('Carregando livros');
          api.get('api/book/v1', {                        
               headers: {
               Authorization: `Bearer ${accessToken}`
               },
               params: {
                    page: 0,
                    limit: 4,
                    direction: 'asc'
               }
          }).then(response => {setBooks(response.data._embedded.bookVoes)});
    }, []);

    return (
       <div className="book-container">
           <header>
               <img src={logoImage} alt="TNX Logo" />
               <span>Bem vindo, <strong>{username.toUpperCase()}</strong>!</span>
               <Link className="button" to="book/new">Adicionar novo livro</Link>
               <button onClick={() => logout()}>
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
     
                         <button onClick={() => deleteBook(book.id)}>
                              <FiTrash2 size={18} color="#251fc5" />
                         </button>
                    </li>
               ))} 
                              
           </ul>
       </div>
    )
}