import "./NewsCard.css"
import { Navigate, useNavigate } from 'react-router-dom'
import pencil from "../../assets/img/pencil.png"
import trash from "../../assets/img/trash.png"
import ApiDeleteService from "../../Services/ApiDeleteService"
import ApiPutService from "../../Services/ApiPutService"




function NewsCard({id,url,title,news, customClass}){
   
    const urlGeneral = "http://localhost:8080/api/v1/news"
    let navigate = useNavigate()

    const handleDelete = () => {
        ApiDeleteService(urlGeneral, id)
          .then(() => window.location.reload())
          .catch((error) => console.error(error));
      }
    const maxLength = 100;
   
    return(

    <div className={` ${customClass}`}>
        <img className={`newsCard-imgNews ${customClass}`} alt="Imagen de la noticia" onClick={()=>{navigate ("/NewsPage", {state: {id,title,url,news}})}} tabIndex="0" title="Haz clic para leer la noticia completa" src={url}></img>
        <div className="newsCard-containerNews">
            <div className="newsCard-titlePencilTrash">
                <h2 alt="Título de la noticia">{title}</h2>
                <img onClick={()=>{navigate ("/NewsPage", {state: {id,title,url,news}})}} src={pencil}></img>
                <img onClick={handleDelete} src={trash}></img>
            </div>
            <p className="newsCard-bodyNews" alt="Texto de la noticia" >{news ? news.substring(0, maxLength): ""}<span onClick={()=>{navigate ("/NewsPage", {state: {id,title,url,news}})}}>Leer mas...</span></p>
            
        </div>
    </div>
    )
}

export default NewsCard