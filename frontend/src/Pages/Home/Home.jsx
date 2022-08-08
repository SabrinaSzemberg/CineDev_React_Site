import React from "react";
import { Link } from "react-router-dom";
import ListaClientes from "../ListarClientes/ListaClientes";
import S from "./Home.module.css";

const Home = () => {
  return (
    <main className={S.content}>
      <section className={S.right}>
      </section>
      <section className={S.left}>
        <div className={S.options}>
          <h1>Oque você quer fazer?</h1>
          <nav>
            <Link className={S.link} to="/">Adicionar Cliente</Link>
            <Link className={S.link} to="/get">Lista de Clientes</Link>
            <Link className={S.link} to="/getClienteId">Procurar Cliente</Link>
          </nav>
        </div>
      </section>
    </main>
  );
};

export default Home;
