import axios from 'axios'
const URL = 'http://localhost:8000/'
const instance = axios.create({
    baseURL: URL,
    timeout: 30000
});

export const callApi = (point, method, body) =>{
    console.log(`Carregando API... ${URL}${point}${method}${body}`)
    return instance.request({
        headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE"},
        url: point,
        method: method,
        data: body ? body : ''
    })
}