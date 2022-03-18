import React from "react";
import { Link } from "react-router-dom";
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi'; //https://feathericons.com/

import './styles.css';

import logoImage from '../../assets/logo.png';

export default function Book() {
    return (
       <div className="book-container">
           <header>
               <img src={logoImage} alt="TNX Logo" />
               <span>Bem vindo, <strong>nome</strong>!</span>
               <Link className="button" to="book/new">Adicionar novo livro</Link>
               <button>
                    <FiPower size={18} color="#251fc5" />
               </button>
           </header>
           <h1>Livros cadastrados</h1>
           <ul>
               <li>
                   <strong>Título:</strong>
                   <p>Docker Deep Dive</p>
                   <strong>Autor:</strong>
                   <p>Nigel Poulton</p>
                   <strong>Preço:</strong>
                   <p>R$ 47,90</p>
                   <strong>Data de Lançamento:</strong>
                   <p>18/03/2022</p>

                   <button>
                        <FiEdit size={18} color="#251fc5" />
                   </button>

                   <button>
                        <FiTrash2 size={18} color="#251fc5" />
                   </button>
               </li>

               <li>
                   <strong>Título:</strong>
                   <p>Docker Deep Dive</p>
                   <strong>Autor:</strong>
                   <p>Nigel Poulton</p>
                   <strong>Preço:</strong>
                   <p>R$ 47,90</p>
                   <strong>Data de Lançamento:</strong>
                   <p>18/03/2022</p>

                   <button>
                        <FiEdit size={18} color="#251fc5" />
                   </button>

                   <button>
                        <FiTrash2 size={18} color="#251fc5" />
                   </button>
               </li>

               <li>
                   <strong>Título:</strong>
                   <p>Docker Deep Dive</p>
                   <strong>Autor:</strong>
                   <p>Nigel Poulton</p>
                   <strong>Preço:</strong>
                   <p>R$ 47,90</p>
                   <strong>Data de Lançamento:</strong>
                   <p>18/03/2022</p>

                   <button>
                        <FiEdit size={18} color="#251fc5" />
                   </button>

                   <button>
                        <FiTrash2 size={18} color="#251fc5" />
                   </button>
               </li>

               <li>
                   <strong>Título:</strong>
                   <p>Docker Deep Dive</p>
                   <strong>Autor:</strong>
                   <p>Nigel Poulton</p>
                   <strong>Preço:</strong>
                   <p>R$ 47,90</p>
                   <strong>Data de Lançamento:</strong>
                   <p>18/03/2022</p>

                   <button>
                        <FiEdit size={18} color="#251fc5" />
                   </button>

                   <button>
                        <FiTrash2 size={18} color="#251fc5" />
                   </button>
               </li>
           </ul>
       </div>
    )
}