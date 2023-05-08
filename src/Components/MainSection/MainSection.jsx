import "./MainSection.css"
import CallAxiosNews from "../../Services/CallAxiosNews";
import NewsCard from "../NewsCard/NewsCard";
import { useEffect, useState } from 'react';


function MainSection(){

    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1)

    

    const [data, setData] = useState([]);
    useEffect(() => {
        CallAxiosNews().getNews()
          .then((data) => setData(data))
          .catch((error) => console.error(error));
          
      }, []);

      const newData = [...data].sort((a, b) => b.id - a.id);
      const lastThreeIds = newData.slice(-3,3).map((item) => item.id);
      const visibleData = newData
        .filter((item) => !lastThreeIds.includes(item.id))
        .slice((currentPage - 1) * pageSize, currentPage * pageSize);
    
      const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
      };
    
      const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
      };
    
    return(

        <div>
            {visibleData.sort((a, b) => b.id - a.id).map((item)=>(
                <NewsCard customClass="newsCard" key={item.id} id={item.id} title={item.title} url={item.url} news={item.news} />
            ))}
                 {currentPage > 1 && (
        <button onClick={handlePrevPage}>Página anterior</button>
      )}
      {newData.length > currentPage * pageSize &&  (
        <button onClick={handleNextPage}>Cargar más noticias</button>
      )}
        </div>
    )
}
export default MainSection