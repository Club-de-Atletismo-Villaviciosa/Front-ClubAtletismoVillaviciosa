import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ApiGetByIdService from '../../Services/ApiGetByIdService';
import pencil from "../../assets/img/pencil.png";
import "./News.css";
import FormNews from '../FormNews/FormNews';

const News = () => {

    const idInState = useLocation().state.id;
    const url = useLocation().state.url;
    const title = useLocation().state.title;
    const news = useLocation().state.news;
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const urlGeneral = "http://localhost:8080/api/v1/news";
    const [isOpen, setIsOpen] = useState(false);

    const handleDropdownClick = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
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
                    <div className={`formDropdown ${isOpen ? 'open' : 'close'}`}>
                        <FormNews  title={title} news={news} url={url} />
                    </div>
                </div>
                <img className='news-newsUrl' src={data.url} alt="Imagen de una noticia" width="750" />
                <p>{data.news}</p>
            </div>

        </div>

    )
}

export default News