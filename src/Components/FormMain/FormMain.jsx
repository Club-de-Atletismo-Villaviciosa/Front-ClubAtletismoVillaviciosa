import "./FormMain.css"
import CallAxiosNews from "../../Services/CallAxiosNews"
import { useEffect, useState } from 'react';

function FormMain(){
    let [data, setData] = useState(State ? State : {title: "", url: "", activity: ""})
    const State = useLocation().state

function handleSubmit(event) {
        event.preventDefault();
        State ? CallAxiosNews().updateNews(data, State.id) : CallAxiosNews().createNews(data)
        notify()
        setIsSubmitted(true);
          
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
    

    return(
        <form className="formMain" onSubmit={handleSubmit} method="post">
            <div className="formMain-title">
                <label>Título:</label>
                <input type="text" name="title" onChange={handleChange} id=""  defaultValue={State ? State.title : ""} placeholder="Título" required></input>
            </div>
            <div className="formMain-image">
                <label>Imagen:</label>
                <div className="formMain-image-inputAndButton">
                    <input type="url" name="url" onChange={handleChange} defaultValue={State ? State.url: ""} autoComplete="off" placeholder="Imagen" required></input>
                    <button><span>Examinar documento...</span></button>
                </div>
            </div>
                <div className="formMain-activity">
                <label>Actividad:</label>
                <textarea rows="15" type="text" name="activity"  defaultValue={State ? State.description : ""} onChange={handleChange} id="" required/>
            </div>
            <div className="formMain-postButton">
                <button><span>Publicar</span></button>
            </div>
        </form>
    )
        
}

export default FormMain