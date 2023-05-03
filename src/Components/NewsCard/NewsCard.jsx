import "./NewsCard.css"
import { Navigate, useNavigate } from 'react-router-dom'




function NewsCard({id,url,title,activity}){
   
    let navigate = useNavigate()
    
    function truncateText(activity, maxLength) {
        return activity.length > maxLength ? activity.slice(0, maxLength) + '...' : activity;
      }

    return(

    <div className="newsCard" onClick={()=>{navigate ("/NewsPage", {state: {id,title,url,activity}})}} tabIndex="0" title="Haz clic para leer la noticia completa">
        <img alt="Imagen de la noticia" src={url}></img>
        <div>
            <div className="newsCard-titlePencilTrash">
                <h2 alt="Título de la noticia">{title}</h2>
                {/* <img src={pencil}></img>
                <img src={trash}></img> */}
            </div>
            <p alt="Texto de la noticia" >{truncateText(activity, 50)}<span onClick={()=>{navigate ("/NewsPage", {state: {id,title,url,activity}})}}>Leer mas...</span></p>
        </div>
    </div>
    )
}

export default NewsCard