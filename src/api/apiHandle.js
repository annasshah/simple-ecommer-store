import axios from "axios"

const url = 'https://api.escuelajs.co/api/v1/'

export const apiHandle = () => {
    return axios.create({
        baseURL:url
    })
}