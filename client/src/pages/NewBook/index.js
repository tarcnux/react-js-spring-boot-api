import React, {useState, useEffect} from "react";
import { Link, useHistory, useParams } from "react-router-dom";
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

    //Parâmetro de URL, o mesmo que em routes.js :bookId
    const {bookId} = useParams(); //

    //Recuperar access token do LocalStorage
    //const username = localStorage.getItem('username');
    const accessToken = localStorage.getItem('accessToken');

    useEffect(() => {
        async function loadBook(id){
            if (bookId === '0') return;

            console.log(`Carregar livro Id: ${bookId}`);

            try {
                    const response = await api.get(`api/book/v1/${bookId}`,{
                        headers: {
                        Authorization: `Bearer ${accessToken}`
                        }
                });

                let ajusteDate = response.data.launchDate.split('T',10)[0];
                setId(response.data.id);
                setTitle(response.data.title);
                setAuthor(response.data.author);
                setPrice(response.data.price);
                setLaunchDate(ajusteDate);                

            } catch(error) {
                alert(`Erro ao tentar carregar o livro ${id}. Tente novamente!`);
                history.push('/books');
            }
        };    
        
        loadBook();
        
    },[bookId]);

    const history = useHistory();

    async function saveOrUpdate(e) {
        e.preventDefault();

        const data = {
            title, author, launchDate, price,
        };
        
        const header = {                        
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        };

        try {

            if (bookId === '0') {
                await api.post('api/book/v1', data, header);
            } else {
                data.id = id;
                await api.put('api/book/v1', data, header);
            }

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
                    {/* <code>DEBUG: {bookId}</code> */}
                    <p>Preencha os dados e clique 'Adicionar'</p>                                        
                    <Link className="back-link" to="/books">
                        <FiArrowLeft size={16} color="251fc5" />
                        <span>Retornar</span>
                    </Link>
                </section>
                <form onSubmit={saveOrUpdate}>
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
                    <button type="submit" className="button">{bookId==='0'?'Adicionar':'Salvar'}</button>
                </form>
            </div>
        </div>
    );
}