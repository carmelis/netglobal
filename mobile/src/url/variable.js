import axios from "axios";
const carmela = "http://192.168.0.73:3001/api";
const gerar = "http://192.168.1.85:3001/api"

export const URLBase = axios.create({
    baseURL: gerar
})


