import axios from "axios";

const instance = axios.create({
    baseURL: 'https://cinedevjessica.herokuapp.com'
})

export const getClientes = async () =>{
    const response = await instance.get('/clientes')
    const json = await response.data
    console.log(json)
    return json
}