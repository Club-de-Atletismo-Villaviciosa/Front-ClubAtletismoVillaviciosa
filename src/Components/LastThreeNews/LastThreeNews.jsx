import "./LastThreeNews.css"
import ApiGetService from "../../Services/ApiGetService";
import NewsCard from "../NewsCard/NewsCard";
import { useEffect, useState } from 'react';

function LastThreeNews(){
const urlGeneral = "http://localhost:8080/api/v1/news"
const [latestNews, setLatestNews] = useState([]);

useEffect(() => {
  
  ApiGetService(urlGeneral).then((data) => setLatestNews(data.sort((a, b) => b.id - a.id).slice(0, 3)))
    .catch((error) => console.error(error));
}, []);

return (
  <div className="LastThreeNews">
    <div className="news-grid">
      {latestNews.length > 0 &&
        latestNews.map((item, index) => (
          <NewsCard
            key={item.id}
            id={item.id}
            title={item.title}
            url={item.url}
            news={item.news}
            date={item.date}
            customClass={`first-cards ${
              index === 0 ? "item1" :
              index === 1 ? "item2" : 
              index === 2 ? "item3" :
               "" }`}
          />
        ))}
    </div>
  </div>
);
}
    
export default LastThreeNews