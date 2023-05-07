import React, { useEffect, useState } from 'react';
import { MdModeEditOutline } from "react-icons/md";
import { VscTrash } from "react-icons/vsc";
import { useLocation, useNavigate } from 'react-router-dom';
import ApiGetbyIdService from '../../Services/ApiGetIdService';
import ApiDeleteService from '../../Services/ApiDeleteService';


const News = () => {
    // const [news, SetNews] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur molestie blandit. Maecenas rutrum mauris sit amet urna pulvinar feugiat. Cras non nisl quis enim iaculis egestas. Vivamus vehicula tristique hendrerit. Phasellus pharetra sapien vitae arcu porta tempor. Suspendisse quis ante venenatis, efficitur ipsum congue, posuere nibh. Morbi non ante lacus. In hac habitasse platea dictumst.")

    const idInstate = useLocation().state.idInstate;
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [editingData, setEditingData] = useState(null);

    useEffect(() => {
        ApiGetbyIdService(idInstate)
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, []);

    const handleEdit = () => {
        setEditingData(true);
    }

    const handleDelete = () => {
        if (window.confirm("¿Está seguro de querer eliminar este elemento?")) {
            ApiDeleteService(data.id)
                .then(() => navigate("/"))
                .catch(console.error);
        }
    };

    return (
        <div>
            <header>
                <h1>CLUB ATLETISMO VILLAVICIOSA</h1>
            </header>
            {editingData ? (
                <div>
                    <p data={data} onSubmit={handleEdit}></p>
                </div>
            ) : (
                <div>
                    <article>
                        <p> {data.title} <MdModeEditOutline color="gray" onClick={handleEdit} />
                        <VscTrash onClick={handleDelete} /></p>
                    </article>

                    <figure>
                        <img src={data.url} alt="Imagen de una noticia" width="550" />
                    </figure>

                    <section>
                        <p>{data.news}</p>
                    </section>

                </div>
            )}

        </div>
    );
}

export default News