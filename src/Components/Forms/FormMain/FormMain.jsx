import "./FormMain.css"
import CallAxiosNews from "../../../Services/CallAxiosNews"
import ApiPostService from '../../../Services/ApiPostService';
import ApiPutService from '../../../Services/ApiPutService';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import InputPhoto from "../../InputPhoto/InputPhoto";
import Confirmation from "../../Confirmation/Confirmation";


function FormMain({ type, editForm }) {
    const url = "http://localhost:8080/api/v1/news"

    let [data, setData] = useState({})
    let [edit, setEdit] = useState({})
    const [confirmation, setConfirmation] = useState(false)
    const [base64, setBase64] = useState("");
    useEffect(() => {
        if (editForm) {
            setEdit(editForm)
            setData(editForm)
        }
    }, [editForm])

    console.log(data)   
    async function handleSubmit(event) {
        if (type == "athlete") {
          let response = await  editForm ? ApiPutService("http://localhost:8080/api/v1/athlete", data, editForm.id) : ApiPostService("http://localhost:8080/api/v1/athlete", data)
            return await response.then(()=> {window.location.reload()})
        }
        let response = await editForm ? ApiPutService(url, data, editForm.id) : ApiPostService(url, data)
        await response.then(()=> {window.location.reload()})
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

    return (
        <>
            {confirmation && <Confirmation methodType={editForm ? "put" : "post"} handleAction={handleSubmit} handleClose={handleClose} />}
            <div className="separator"></div>
            {type == "athlete" ?
                <form className="formMain" onSubmit={handleClickSubmit} method="post">

                    <div className="formMain-title">
                        <label>Nombre:</label>
                        <input type="text" name="name" onChange={handleChange} id="" defaultValue={editForm ? edit.name : ""} value={data.name} placeholder="Nombre" required></input>
                    </div>

                    <div className="formMain-image">
                        <label>Imagen:</label>
                        <div className="formMain-image-inputAndButton">
                            <textarea name='url' defaultValue={editForm ? edit.url : base64} value={data.url} required className="form-control" placeholder="Añade una foto" onChange={handleChange}
                                id="photo" />
                            <InputPhoto setBase64={setBase64} setData={setData} />
                            <p>(Asegurate que la foto esté centrada)</p>
                        </div>
                    </div>
                    <div className="formMain-title">
                        <label>Categoría:</label>
                        <input type="text" name="category" onChange={handleChange} value={data.category} id="" defaultValue={editForm ? edit.category : ""} placeholder="Categoría" required></input>
                    </div>
                    <div className="formMain-title">
                        <label>Disciplina:</label>
                        <input type="text" name="discipline" onChange={handleChange} value={data.discipline} id="" defaultValue={editForm ? edit.discipline : ""} placeholder="Disciplina" required></input>
                    </div>
                    <div className="formMain-title">
                        <label>Nº de licencia:</label>
                        <input type="text" name="licenseNumber" onChange={handleChange} value={data.licenseNumber} id="" defaultValue={editForm ? edit.licenseNumber : ""} placeholder="Número de licencia" required></input>
                    </div>
                    <div className="formMain-postButton">
                        <button onClick={handleClickSubmit}><span>Publicar</span></button>
                    </div>
                </form>
                :
                <form className="formMain" onSubmit={handleClickSubmit} method="post">
                    <div className="formMain-title">
                        <label>Título:</label>
                        <input type="text" name="title" onChange={handleChange} id="" defaultValue={editForm ? edit.title : ""} placeholder="Título" required></input>
                    </div>
                    <div className="formMain-image">
                        <label>Imagen:</label>
                        <div className="formMain-image-inputAndButton">
                            <textarea name='url' defaultValue={editForm ? edit.url : base64} required className="form-control" placeholder="Añade una foto" onChange={handleChange}
                                id="photo" />
                            <InputPhoto setBase64={setBase64} setData={setData} />
                            <p>(Asegúrate de que la foto esté centrada)</p>
                        </div>
                    </div>
                    <div className="formMain-activity">
                        <label>Actividad:</label>
                        <textarea rows="15" cols="5" type="text" name="news" defaultValue={editForm ? edit.description : ""} onChange={handleChange} id="" required />
                    </div>
                    <div className="formMain-postButton">
                        <button onClick={handleClickSubmit}><span>Publicar</span></button>
                    </div>
                </form>}
            <div className="separator"></div>
        </>

    )

}

export default FormMain