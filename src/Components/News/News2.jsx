import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ApiGetByIdService from '../../Services/ApiGetByIdService';


const News2 = () => {

    const idInState = useLocation().state.id;
    const url = useLocation().state.url;
    const title = useLocation().state.title;
    const news = useLocation().state.news;
    const [data, setData] = useState({});
    const [editNews, setEditNews] = useState(null);
    const navigate = useNavigate();
    const urlGenerate = "http://localhost:8080/api/v1/news";

    useEffect(() => {
        ApiGetByIdService(urlGenerate, idInState)
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, []);

    const handleEdit = () => {
        setEditNews(true);
    }

    return (

        <div>
            {editNews ? (
                <img src={data.url} />
            ) : (
                <div>
                    <p>{data.title}</p>
                    <img src={data.url} alt="Imagen de una noticia" width="300" />
                    <p>{data.news}</p>
                </div>
            )}



        </div>

    )
}

export default News2