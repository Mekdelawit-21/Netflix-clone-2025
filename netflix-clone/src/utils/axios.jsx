import axios from "axios";
//https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213
//https://image.tmdb.org/t/p/original/
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;
