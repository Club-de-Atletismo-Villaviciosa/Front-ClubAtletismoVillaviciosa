import "./FormMain.css"
import CallAxiosNews from "../../Services/CallAxiosNews"
import ApiPostService from '../../Services/ApiPostService';
import ApiPutService from '../../Services/ApiPutService';
import React, { useEffect, useState } from 'react';
import {useLocation, useNavigate } from 'react-router-dom';
import InputPhoto from "../InputPhoto/InputPhoto";


function FormMain(){
    const url = "http://localhost:8080/api/v1/news"
    const State = useLocation().state 
    let [data, setData] = useState(State ? State : {title: "", url: "", news: ""})
    const [base64, setBase64] = useState("");
  

function handleSubmit(event) {
        event.preventDefault();
        State ? ApiPutService(url, data, State.id) : ApiPostService(url, data)
  
    }
function handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let temp_data = { ...data};
        if (value !== undefined) {
          temp_data[name] = value;
        }
        setData(temp_data);
      }
    console.info(data.url)

    return(
        <form className="formMain" onSubmit={handleSubmit} method="post">
            <div className="formMain-title">
                <label>Título:</label>
                <input type="text" name="title" onChange={handleChange} id=""  defaultValue={State ? State.title : ""} placeholder="Título" required></input>
            </div>
            <div className="formMain-image">
                <label>Imagen:</label>
                <div className="formMain-image-inputAndButton">
                    <textarea name='url' defaultValue={State ? State.url : base64} required className="form-control" placeholder="Añade una foto"  onChange= {handleChange} id="photo"/>
                    <InputPhoto setBase64 ={setBase64} setData={setData}/> 
                    <p>(Asegurate que la foto esté centrada)</p>
                </div>
            </div>
                <div className="formMain-activity">
                <label>Actividad:</label>
                <textarea rows="10" type="text" name="news"  defaultValue={State ? State.news : ""} onChange={handleChange} id="" required/>
            </div>
            <div className="formMain-postButton">
                <button><span>Publicar</span></button>
            </div>
        </form>
    )
        
}

export default FormMain