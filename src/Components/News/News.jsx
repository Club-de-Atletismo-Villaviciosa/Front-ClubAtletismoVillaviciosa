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
    let [mode, setMode] = useState("close")

    function handleDropdownClick(e) {
        mode == "close" ? setMode("open") : setMode("close")
    }

    useEffect(() => {
        ApiGetByIdService(urlGeneral, idInState)
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, []);
    
    return (

        <div>
            <div className='news-container'>
                <div className='news-titlePencil'>
                    <h2>{data.title}</h2>
                    <img onClick={(e) => { handleDropdownClick(e) }} src={pencil} alt="button to edit" />
                    <FormNews customClass={mode} title={title} news={news} url={url} />
                </div>
                <img src={data.url} alt="Imagen de una noticia" width="750" />
                <p>{data.news}</p>
            </div>

        </div>

    )
}

export default News