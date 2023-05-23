import "./MainSection.css"
import CallAxiosNews from "../../Services/CallAxiosNews";
import NewsCard from "../NewsCard/NewsCard";
import { useEffect, useState } from 'react';
import arrowLeft from "../../assets/img/arrowLeft.png"
import arrowRight from "../../assets/img/arrowRight.png"

function MainSection() {
  const PAGE_SIZE = 10;
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    CallAxiosNews().getNews()
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);
  
  const newData = [...data].slice(0,-3).reverse();
  newData.splice(0, (currentPage - 1) * PAGE_SIZE);
  newData.splice(PAGE_SIZE);
  
  const totalPages = Math.ceil(data.length / PAGE_SIZE);
  let pageNumbers = [];

  if (totalPages <= 5) {
    pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else {
    const startPage = Math.max(currentPage - 2, 1);
    const endPage = Math.min(startPage + 4, totalPages);
    
     if (startPage > 1) {
      pageNumbers.push(1, '...');
     
    } else {
      if (pageNumbers[0] === '...') {
        pageNumbers.shift();   
      }
    }
    
    pageNumbers.push(...Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i));
    
    if (endPage < totalPages) {
      pageNumbers.push('....', totalPages);
    }
  }
  
  const handleClick = (event, pageNumber) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };
  
  return (
    <div  className="mainSection">
      {newData.sort((a, b) => b.id - a.id).map((item) =>(
        <NewsCard data-testid="news-card" customClass="newsCard" key={item.id} id={item.id} title={item.title} url={item.url} date={item.date} news={item.news} />
      ))}
      
      <div data-testid="pagination" className="pagination">
        <button className="pagination-buttonLeft" onClick={(e) => handleClick(e, currentPage - 1)} disabled={currentPage === 1}>
        <img className="pagination-arrows" src={arrowLeft}/>
        </button>
        
        {pageNumbers.map((number) => (
          <span key={number} className={currentPage === number ? 'active' : 'numbersPage'} onClick={(e) => handleClick(e, number)}>
            {number}
          </span>
        ))}
        
        <button className="pagination-buttonRight" onClick={(e) => handleClick(e, currentPage + 1)} disabled={currentPage === totalPages}>
          <img className="pagination-arrows" src={arrowRight}/>
        </button>
      </div>
    </div>
    
  );
}

export default MainSection;