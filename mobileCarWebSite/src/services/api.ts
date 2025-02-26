import axios from "axios";

const api = axios.create({
    baseURL: 'https://car-website-backend-nine.vercel.app/'
})

export {api}