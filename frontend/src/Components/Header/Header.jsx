import React from 'react'
import { Link } from 'react-router-dom'
import S from './Header.module.css'

const Header = () => {
  return (
    <header className={S.header}>
      <Link className="titulo" to="/">CineDev</Link>
      <nav>
      <Link className="crud" to="/">Adicionar</Link>
      <Link className="crud" to="/get">Clientes</Link>
      <Link className="crud" to="/getClienteId">Procurar</Link>
      </nav>
    </header>
  )
}

export default Header