import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import ApiPutService from '../../Services/ApiPutService'
import InputPhoto from '../../Components/InputPhoto/InputPhoto';
import "./FormNews.css";

const FormNews = ({ news, title, url, customClass }) => {

    const urlGeneral = "http://localhost:8080/api/v1/news"
    const State = useLocation().state
    let [data, setData] = useState({ title: title, url: url, news: news })
    const [base64, setBase64] = useState("");


    function handleSubmit(event) {
        event.preventDefault();
        ApiPutService(urlGeneral, data, State.id)
            .then(response => console.log("API response:", response))
            .catch(error => console.error("API error:", error));
    }

    function handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let temp_data = { ...data };
        if (value !== undefined) {
            temp_data[name] = value;
        }
        setData(temp_data);

        console.log("data:", data);
    }
    console.info(data)
    console.info(customClass)

    return (
        <form className={`formMain ${customClass}`} onSubmit={handleSubmit} method="post">
            <div className="formMain-title">
                <label>Título:</label>
                <input type="text" name="title" value={data.title} onChange={handleChange} id="" placeholder="Título" required></input>
            </div>
            <div className="formMain-image">
                <label>Imagen:</label>
                <div className="formMain-image-inputAndButton">
                    <textarea name='url' onChange={handleChange} defaultValue={data.url} required className="form-control" placeholder="Añade una foto" id="photo" />
                    <InputPhoto setBase64={setBase64} setData={setData} />
                    <p>(Asegurate que la foto esté centrada)</p>
                </div>
            </div>
            <div className="formMain-activity">
                <label>Actividad:</label>
                <textarea rows="10" type="text" name="news" onChange={handleChange} defaultValue={data.news} id="" required />
            </div>
            <div className="formMain-postButton">
                <button><span>Publicar</span></button>
            </div>
        </form>
    )
}

export default FormNews