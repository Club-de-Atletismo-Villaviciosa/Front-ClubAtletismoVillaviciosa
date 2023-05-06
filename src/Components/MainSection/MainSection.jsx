import "./MainSection.css"
import CallAxiosNews from "../../Services/CallAxiosNews";
import NewsCard from "../NewsCard/NewsCard";
import { useEffect, useState } from 'react';


function MainSection(){

    const [data, setData] = useState([]);
    useEffect(() => {
        CallAxiosNews().getNews()
          .then((data) => setData(data))
          .catch((error) => console.error(error));
          
      }, []);

      const newData = [...data];
      newData.splice(-3, 3);

    return(

        <div>
            {newData.sort((a, b) => b.id - a.id).map((item)=>(
                <NewsCard  key={item.id} id={item.id} title={item.title} url={item.url} news={item.news}/>
            ))}
        </div>
    )
}
export default MainSection