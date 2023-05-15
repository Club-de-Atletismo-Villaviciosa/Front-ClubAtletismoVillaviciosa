import React, { useState } from 'react'
import ApiPutService from '../../../Services/ApiPutService';

function FormList({editForm}) {
    
    let [data, setData] = useState({})
    
    console.log(data)
    
    function handleSubmit(event) {
        event.preventDefault();
        ApiPutService("http://localhost:8080/api/v1/listOfHonors", data, 1)
        window.location.reload()
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
            <form onSubmit={handleSubmit} method="post">
                <div className="formList">
                    <label>Editar palmares:</label>
                    <div className="formMain-image-inputAndButton">
                        {/* <input type="url" name="url" onChange={handleChange} defaultValue={State ? State.url: ""} autoComplete="off" placeholder="Enlace de Imgur" required pattern="https?://.+" /> */}

                        <textarea rows="15" cols="1000" name='description' defaultValue={editForm.description} value={data.description} required className="form-control" placeholder="Ingrese aquí los logros o títulos obtenidos" onChange={handleChange}
                            id="photo" />
                    </div>
                    <div className="formMain-postButton">
                        <button><span>Publicar</span></button>
                    </div>
                </div>
            </form>
    )
}

export default FormList