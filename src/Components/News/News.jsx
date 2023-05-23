import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ApiGetByIdService from '../../Services/ApiGetByIdService';
import pencil from "../../assets/img/pencil.png";
import "./News.css";
import FormNews from '../FormNews/FormNews';
import { useContext } from 'react';
import { AuthContext } from '../../Services/AuthContext';

const News = () => {
    const state = useLocation().state
    const idInState = state.id;
    const [data, setData] = useState({});
    const urlGeneral = "http://localhost:8080/api/v1/news";
    const [isOpen, setIsOpen] = useState(false);
    let { isLogged } = useContext(AuthContext)

    const handleDropdownClick = () => {
        setIsOpen(!isOpen);
    };

    function replaceDate(text) {
        let date = text.replace("T", " ")
        return date
    }

    useEffect(() => {
        if (state.edit) {
            setIsOpen(!isOpen);
        }

        ApiGetByIdService(urlGeneral, idInState)
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, []);

    return (

        <div>
            <div className='news-container'>
                <div className='news-titlePencilForm'>
                    <h2>{data.title}</h2>
                    {isLogged && <img data-testid="news-pencil" onClick={handleDropdownClick} className='news-pencil' src={pencil} alt="button to edit" />}
                </div>
                <div data-testid="news-dropdown" className={`formNewsDropdown ${isOpen ? 'open' : 'close'}`}>
                    <FormNews item={data} />
                </div>
                <div className='news-image'>
                    <img className='news-newsUrl' src={data.url} alt="Imagen de una noticia" width="750" />
                    <small className='small'>{data.date}</small>
                </div>
                <p className='pre-wrap'>{data.news}</p>
            </div>
        </div>

    )
}

export default News