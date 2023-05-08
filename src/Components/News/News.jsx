import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ApiGetByIdService from '../../Services/ApiGetByIdService';


const News = () => {

    const idInstate = useLocation().state.id;
    const url = useLocation().state.url;
    const title = useLocation().state.title;
    const news = useLocation().state.news;
    const [data, setData] = useState({});
    const [editNews, setEditNews] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        ApiGetByIdService(url, idInstate)
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
                    <img src={data.url} alt="Imagen de una noticia" />
                    <p>{data.news}</p>
                </div>
            )}



        </div>

    )
}

export default News