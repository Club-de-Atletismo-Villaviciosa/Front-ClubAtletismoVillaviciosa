import axios from "axios";
import url from "./UrlRequest"

const CallAxiosNews = () => {

const getNews = async () => {
    const res = await axios.get(`${url}/api/v1/news`);
    return res.data;
}

const getNewsById = async (id) => {
    const res =await axios.get (`${url}/api/v1/news/${id}`);
    return res.data
}

const createNews = async (data) => {
    const res = await axios.post(`${url}/api/v1/news`, data);
    return res;
};

const updateNews = async (data) => {
    const res = await axios.put(`${url}/api/v1/news`, data);
    return res;
};

const deleteNews = async (id) => {
    const res = await axios.delete(`${url}/api/v1/news/${id}`);
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