import "./NewsCard.css"
import { Navigate, useNavigate } from 'react-router-dom'
import pencil from "../../assets/img/pencil.png"
import trash from "../../assets/img/trash.png"
import ApiDeleteService from "../../Services/ApiDeleteService"
import ApiGetByIdService from "../../Services/ApiGetByIdService"
import Confirmation from "../Confirmation/Confirmation"
import { useState } from "react"
import { useContext } from "react"
import { AuthContext } from "../../Services/AuthContext"

function NewsCard({ id, url, title, news, customClass }) {

    const [data, setData] = useState({});

    const urlGeneral = "http://localhost:8080/api/v1/news"
    let navigate = useNavigate()
    const [confirmation, setConfirmation] = useState(false)
    let { isLogged } = useContext(AuthContext)

    const handleDelete = () => {
        ApiDeleteService(urlGeneral, id)
            .then(() => window.location.reload())
            .catch((error) => console.error(error));
    }
    const maxLength = 300;

    function handleClose() {
        setConfirmation(false)
    }

    function handleClickSubmit(event) {
        event.preventDefault();
        setConfirmation(true)
    }

    function getById(){
    ApiGetByIdService(urlGeneral,id)
    .then((data) => setData(data))
    .catch((error) => console.error(error));
}
console.info(data)

    return (
        <div className={`${customClass}`}>
            {confirmation && <Confirmation type={"delete"} handleAction={handleDelete} handleClose={handleClose} />}
            <img className={`newsCard-imgNews ${customClass}`} alt="Imagen de la noticia" onClick={() => { navigate("/NewsPage", { state: { id, title, url, news } }) }} tabIndex="0" title="Haz clic para leer la noticia completa" src={url}></img>
            <div className="newsCard-containerNews">
                <div className="newsCard-titlePencilTrash">
                    <h2  onClick={() => { navigate("/NewsPage", { state: { id, title, url, news } }) }} alt="Título de la noticia">{title}</h2>
                    {isLogged && (<><img onClick={() => { navigate("/NewsPage", { state: { id, title, url, news, edit: true} }) }} src={pencil} />
                    <p>{data.date}</p>
                    <img onClick={handleClickSubmit} src={trash} /></>)}
                </div>
                <p className="newsCard-bodyNews" alt="Texto de la noticia" >{news ? news.substring(0, maxLength) : ""}<span className="newsCard-span" onClick={() => { navigate("/NewsPage", { state: { id, title, url, news } }) }}>... Leer mas</span></p>
            </div>
        </div>
    )
}


export default NewsCard