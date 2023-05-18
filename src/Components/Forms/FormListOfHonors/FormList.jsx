import React, { useState } from 'react'
import ApiPutService from '../../../Services/ApiPutService';
import ApiPostService from '../../../Services/ApiPostService';
import Confirmation from '../../Confirmation/Confirmation';

function FormList({ editForm }) {

    let [data, setData] = useState({})
    const [confirmation, setConfirmation] = useState(false)

    console.log(data)
    console.log(editForm)

   async function handleSubmit(event) {
    let response = await editForm.description ? ApiPutService("http://localhost:8080/api/v1/listOfHonors", data, 1) : ApiPostService("http://localhost:8080/api/v1/listOfHonors", data)
        await response.then(()=> {window.location.reload()})
     
       
    }
    function handleClose() {
        setConfirmation(false)
    }

    function handleClickSubmit(event) {
        event.preventDefault();
        setConfirmation(true)
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


    return (
        <>
            {confirmation && <Confirmation handleAction={handleSubmit} handleClose={handleClose} />}
            <form onSubmit={handleClickSubmit} method="post">
                <div className="formList">
                    <label>Editar palmares:</label>
                    <div className="formMain-image-inputAndButton">
                        {/* <input type="url" name="url" onChange={handleChange} defaultValue={State ? State.url: ""} autoComplete="off" placeholder="Enlace de Imgur" required pattern="https?://.+" /> */}

                        <textarea rows="15" cols="112" name='description' defaultValue={editForm.description} value={data.description} required className="form-control" placeholder="Ingrese aquí los logros o títulos obtenidos" onChange={handleChange}
                            id="photo" />
                    </div>
                    <div className="formMain-postButton">
                        <button onClick={handleClickSubmit}><span>Publicar</span></button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default FormList