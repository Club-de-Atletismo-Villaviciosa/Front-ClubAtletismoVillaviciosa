import axios from "axios";
import url from "./UrlRequest"

const CallAxiosAthletes = () => {

const getAthletes = async () => {
    const res = await axios.get(`${url}/api/v1/athlete`);
    
    return res.data;
}

const getListOfHonors = async () => {
    const res = await axios.get(`${url}/api/v1/listOfHonors`);
    return res.data;
}

const getNewsById = async (id) => {
    const res =await axios.get (`${url}/api/v1/news/${id}`);
    return res.data
}

const createListOfHonors = async (data) => {
    console.info(data)
    const res = await axios.post(`${url}/api/v1/listOfHonors/save`, data);
    return res;
};

const updateNews = async (data,id) => {
    const res = await axios.put(`${url}/api/v1/news/update/${id}`, data);
    return res;
};

const deleteNews = async (id) => {
    const res = await axios.delete(`${url}/api/v1/news/delete/${id}`);
    return res.data;
};

return{    
    getAthletes,
    getListOfHonors,
    getNewsById,
    createListOfHonors,
    updateNews,
    deleteNews
}
}

export default CallAxiosAthletes