import "./NewsCard.css"
import { Navigate, useNavigate } from 'react-router-dom'




function NewsCard({id,url,title,news}){
   
    let navigate = useNavigate()

    const maxLength = 100;
   
    return(

    <div className="newsCard" onClick={()=>{navigate ("/NewsPage", {state: {id,title,url,news}})}} tabIndex="0" title="Haz clic para leer la noticia completa">
        <img className="newsCard-imgNews" alt="Imagen de la noticia" src={url}></img>
        <div>
            <div className="newsCard-titlePencilTrash">
                <h2 alt="Título de la noticia">{title}</h2>
                {/* <img src={pencil}></img>
                <img src={trash}></img> */}
            </div>
            <p alt="Texto de la noticia" >{news ? news.substring(0, maxLength): ""}<span onClick={()=>{navigate ("/NewsPage", {state: {id,title,url,news}})}}>Leer mas...</span></p>
        </div>
    </div>
    )
}

export default NewsCard