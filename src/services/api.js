import axios from 'axios'

const apiCodeBurguer = axios.create({
    baseURL: "http://localhost:3002"
})

export default apiCodeBurguer