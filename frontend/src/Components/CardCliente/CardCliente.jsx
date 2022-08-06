import React from 'react'
import S from './CardCliente.module.css'

const CardCliente = ({name, email, password, payment, club}) => {
  return (
    <div>
        <h3>{name}</h3>
        <p>{email}</p>
        <p>{password}</p>
        <p>{payment}</p>
        <p>{club}</p>
    </div>
  )
}

export default CardCliente