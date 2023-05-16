import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ApiGetByIdService from '../../Services/ApiGetByIdService';
import pencil from "../../assets/img/pencil.png";
import "./News.css";
import FormNews from '../FormNews/FormNews';

const News = () => {
    const state = useLocation().state
    const idInState = state.id;
    const [data, setData] = useState({});
    const urlGeneral = "http://localhost:8080/api/v1/news";
    const [isOpen, setIsOpen] = useState(false);

    const handleDropdownClick = () => {
        setIsOpen(!isOpen);
    };

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
                    <img onClick={handleDropdownClick} className='news-pencil' src={pencil} alt="button to edit" />
                </div>
                <div className={`formNewsDropdown ${isOpen ? 'open' : 'close'}`}>
                    <FormNews item={data} />
                </div>
                <img className='news-newsUrl' src={data.url} alt="Imagen de una noticia" width="750" />
                <p className='pre-wrap'>{data.news}</p>
            </div>
        </div>

    )
}

export default News