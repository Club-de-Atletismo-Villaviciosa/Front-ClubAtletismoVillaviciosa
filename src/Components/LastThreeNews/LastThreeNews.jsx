import "./LastThreeNews.css"
import CallAxiosNews from "../../Services/CallAxiosNews";
import NewsCard from "../NewsCard/NewsCard";
import { useEffect, useState } from 'react';

function LastThreeNews(){

const [latestNews, setLatestNews] = useState([]);

useEffect(() => {
  CallAxiosNews().getNews()
    .then((data) => setLatestNews(data.sort((a, b) => b.id - a.id).slice(0, 3)))
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
            className={`news-card ${index === 2 ? "biggest-news" : ""}`}
          />
        ))}
    </div>
  </div>
);
}

    
export default LastThreeNews
