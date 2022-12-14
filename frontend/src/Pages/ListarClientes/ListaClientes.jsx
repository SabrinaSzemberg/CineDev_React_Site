import React, { useEffect, useState } from 'react'
import CardCliente from '../../Components/CardCliente/CardCliente'
import Loading from '../../Components/Loading/Loading'
import { getClientes } from '../../Service/Api'
import S from './ListaClientes.module.css'

const ListaClientes = () => {
  const [clientes, setClientes] = useState([])
  

  async function requisition(){
    const response = await getClientes();
    setClientes(response)
    console.log(clientes)
  }
  
  useEffect(()=>{
    requisition()
  },[])

  return (
    <div className={S.content}>
      <h2 className={S.titulo}>Lista de Clientes:</h2>
      <div className={S.clientes}>
        {!!clientes ? clientes.map((cliente) => {
            return (
              <CardCliente
                key={cliente.id}
                id={cliente.id}
                name={cliente.name}
                email={cliente.email}
                password={cliente.password}
                payment={cliente.payment}
                club={cliente.club}
              />
            );
          }) : <Loading/>}
      </div>
    </div>
  )
}

export default ListaClientes