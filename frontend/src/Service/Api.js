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

export const getClienteId = async (id) =>{
    const response = await instance.get(`/clientes/${id}`)
    const json = await response.data
    // console.log(json)
    return json
}