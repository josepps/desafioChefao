import axios from "axios";

const api = axios.create({
    baseURL:"https://caca-vet.herokuapp.com/",
    headers: {"Content-Type": "application/json"},
});

export default api;