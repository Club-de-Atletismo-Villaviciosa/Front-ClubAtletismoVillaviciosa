import axios from "axios";

const CallAxiosNews = () => {



const getNews = async () => {
    const res = await axios.get(`${url}`);
    return res.data;
}

const getNewsById = async (id) => {
    const res =await axios.get (`${url}/${id}`);
    return res.data
}

const createNews = async (data) => {
    const res = await axios.post(`${url}`, data);
    return res;
};

const updateNews = async (data) => {
    const res = await axios.put(`${url}`, data);
    return res;
};

const deleteNews = async (id) => {
    const res = await axios.delete(`${url}/${id}`);
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