import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000'
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


export const postClientes = async(clientes) => {
    const response = await instance.post('/clientes', clientes)
    const json = await response.data.msg
    return json
}

export const deleteClienteId = async (id) =>{
    const response = await instance.delete(`/clientes/${id}`)
    console.log(response)
    const alerta = alert("Cliente deletado")
    return alerta

}