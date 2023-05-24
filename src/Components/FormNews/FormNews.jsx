import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ApiPutService from '../../Services/ApiPutService'
import InputPhoto from '../../Components/InputPhoto/InputPhoto';
import "./FormNews.css";
import Confirmation from '../Confirmation/Confirmation';

const FormNews = ({ item, customClass }) => {

    const urlGeneral = "http://localhost:8080/api/v1/news"
    const State = useLocation().state
    let [data, setData] = useState({ title: item.title, url: item.url, news: item.news })
    const [confirmation, setConfirmation] = useState(false)
    const [base64, setBase64] = useState("");

    function handleSubmit(event) {
        ApiPutService(urlGeneral, data, State.id)
            .then(response => console.log("API response:", response))
            .then(()=>{window.location.reload()})
            .catch(error => console.error("API error:", error))
             
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
        }
    function handleClose() {
        setConfirmation(false)
    }

    function handleClickSubmit(event) {
        event.preventDefault();
        setConfirmation(true)
    }

    useEffect(() => {
        setData({ title: item.title, url: item.url, news: item.news });
      }, [item]);

    return (
        <>
            {confirmation && <Confirmation handleAction={handleSubmit} handleClose={handleClose} />}
            <form className={`formMain ${customClass}`} onSubmit={handleClickSubmit} method="post">
                <div className="formMain-title">
                    <label>Título:</label>
                    <input type="text" name="title" value={data.title} onChange={handleChange} id="" placeholder="Título" required></input>
                </div>
                <div className="formMain-image">
                    <label>Imagen:</label>
                    <div className="formMain-image-inputAndButton">
                        <textarea name='url' onChange={handleChange} value={data.url} required className="form-control" placeholder="Añade una foto" id="photo" />
                        <InputPhoto setBase64={setBase64} setData={setData} />
                        <p>(Asegúrate de que la foto esté centrada)</p>
                    </div>
                </div>
                <div className="formMain-activity">
                    <label>Actividad:</label>
                    <textarea rows="10" type="text" name="news" onChange={handleChange} value={data.news} id="" required />
                </div>
                <div className="formMain-postButton">
                    <button onClick={handleClickSubmit}><span>Publicar</span></button>
                </div>
            </form>
        </>
    )
}

export default FormNews