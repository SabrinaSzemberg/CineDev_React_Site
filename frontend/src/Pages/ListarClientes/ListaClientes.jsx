import React, { useState } from 'react'
import CardCliente from '../../Components/CardCliente/CardCliente'
import S from './ListaClientes.module.css'

const ListaClientes = () => {
  const [clientes, setClientes] = useState([])

  return (
    <div className={S.content}>
      <h2 className={S.titulo}>Lista de Clientes:</h2>
      <div className={S.clientes}>
        {!!clientes &&
          clientes.map((cliente) => {
            return (
              <CardCliente
                key={cliente.id}
                name={cliente.name}
                email={cliente.email}
                password={cliente.password}
                payment={cliente.payment}
                club={cliente.clun}
              />
            );
          })}
      </div>
    </div>
  )
}

export default ListaClientes