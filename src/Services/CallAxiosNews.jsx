import axios from "axios";
import urlRequest from "./UrlRequest"

const CallAxiosNews = () => {

const getNews = async () => {
    const res = await axios.get(`${urlRequest}/api/v1/news`);
    
    return res.data;
}

const getNewsById = async (id) => {
    const res =await axios.get (`${urlRequest}/api/v1/news/${id}`);
    return res.data
}

const createNews = async (data) => {
    console.info(data)
    const res = await axios.post(`${urlRequest}/api/v1/news/save`, data);
    return res;
};

const updateNews = async (data,id) => {
    const res = await axios.put(`${urlRequest}/api/v1/news/update/${id}`, data);
    return res;
};

const deleteNews = async (id) => {
    const res = await axios.delete(`${urlRequest}/api/v1/news/delete/${id}`);
    return res.data;
};

return{    
    getNews,
    getNewsById,
    createNews,
    updateNews,
    deleteNews
}
}

export default CallAxiosNews