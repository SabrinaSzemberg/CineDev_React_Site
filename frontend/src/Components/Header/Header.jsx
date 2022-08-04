import React from 'react'
import { Link } from 'react-router-dom'
import S from './Header.module.css'

const Header = () => {
  return (
    <header className={S.header}>
      <Link className="titulo" to="/">CineDev</Link>
      <nav>
      <Link className="crud" to="/">Post</Link>
      <Link className="crud" to="/get">Get</Link>
      <Link className="crud" to="/getClienteId">Get Id</Link>
      <Link className="crud" to="/">Put</Link>
      <Link className="crud" to="/">Delete</Link>
      </nav>
    </header>
  )
}

export default Header