import axios from "axios"
const PORT = process.env.REACT_APP_PORT || 8085 // change the default port accordingly
/**
 * note: with axiosInstance you do not need to type the baseURL every time.
 * usage: import axiosInstance to the file you're working on. 
 * Then, call the api as follows: axiosInstance.get('/warehouses')
 */
export const axiosInstance = axios.create({
    baseURL: `http://localhost:${PORT}`,
    'Content-Type': 'application/json'
})