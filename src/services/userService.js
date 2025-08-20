import axios from './axios';

const fetchRandomImages = (page) => {
    return axios.get(`/api/users?page=${page}`)
            }

const fetchTest = () => {
    return axios.get(`/api/users/test`)
            }

export { fetchRandomImages, fetchTest };