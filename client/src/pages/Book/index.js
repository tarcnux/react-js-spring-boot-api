import React from "react";
import { Link } from "react-router-dom";
import { FiPower } from 'react-icons/fi'; //https://feathericons.com/?query=power

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
       </div>
    )
}