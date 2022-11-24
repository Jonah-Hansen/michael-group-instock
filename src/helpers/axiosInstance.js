import axios from "axios"

const {
REACT_APP_PORT: PORT = "8080", // change the default port accordingly
REACT_APP_BACKEND_URL: URL = "http://localhost"
} = process.env; 
/**
 * note: with axiosInstance you do not need to type the baseURL every time.
 * usage: import axiosInstance to the file you're working on. 
 * Then, call the api as follows: axiosInstance.get('/warehouses')
 */
export const axiosInstance = axios.create({
    baseURL: `${URL}:${PORT}`,
    'Content-Type': 'application/json'
})