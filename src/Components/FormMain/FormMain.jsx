import "./FormMain.css"

function FormMain(){

    return(
        <form className="formMain">
            <div className="formMain-title">
                <label>Título:</label>
                <input></input>
            </div>
            <div className="formMain-image">
                <label>Imagen:</label>
                <div className="formMain-image-inputAndButton">
                    <input></input>
                    <button><span>Examinar documento...</span></button>
                </div>
            </div>
                <div className="formMain-activity">
                <label>Actividad:</label>
                <textarea rows="15"/>
            </div>
            <div className="formMain-postButton">
                <button><span>Publicar</span></button>
            </div>
        </form>
    )
        
}

export default FormMain