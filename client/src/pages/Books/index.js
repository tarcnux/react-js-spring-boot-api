import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi'; //https://feathericons.com/

import api from '../../services/api';

import './styles.css';

import logoImage from '../../assets/logo.png';

export default function Books() {

     const [books, setBooks] = useState([]);
     const [page, setPage] = useState(0);

    //Recuperar access token do LocalStorage
    const username = localStorage.getItem('username');
    const accessToken = localStorage.getItem('accessToken');
    const navigate = useNavigate();
  
    async function logout() {
         console.log('Saindo ...');
         localStorage.clear();
         navigate('/')
    }
    
    async function editBook(id) {
         try {
               navigate(`/book/new/${id}`);
         } catch(error) {
              alert(`Não foi possível editar o livro: ${id}`);
         }
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
          } catch(error) {
               alert(`Não foi possível apagar o livro: ${id}`);
          }
     }

     async function fetchMoreBooks() {
          console.log(`Carregando mais livros da página: ${page}`);

          const response = await api.get('api/book/v1', {                        
               headers: {
                    Authorization: `Bearer ${accessToken}`
               },
               params: {
                    page,
                    limit: 4,
                    direction: 'asc'
               }
          });
          
          if('_embedded' in response.data){
               setBooks([...books, ...response.data._embedded.bookVoes]);
               setPage(page+1);
          }
     };
     
    
     //Carrega os dados no carregamento da tela
     useEffect(() => {
          console.log('Carregando livros');          
          fetchMoreBooks();
     
     }, []);

     return (
       <div className="book-container">
           <header>
               <img src={logoImage} alt="TNX Logo" />
               <span>Bem vindo, <strong>{username.toUpperCase()}</strong>!</span>
               <Link className="button" to="/book/new/0">Adicionar novo livro</Link>
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
     
                         <button onClick={() => editBook(book.id)}>
                              <FiEdit size={18} color="#251fc5" />
                         </button>
     
                         <button onClick={() => deleteBook(book.id)}>
                              <FiTrash2 size={18} color="#251fc5" />
                         </button>
                    </li>
               ))} 
                              
           </ul>
           <button className="button" onClick={fetchMoreBooks}>Carregar mais livros...</button>
       </div>
    )
}