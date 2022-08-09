import React, {useState} from "react";
import Loading from "../../Components/Loading/Loading";
import { Link } from "react-router-dom";
import ListaClientes from "../ListarClientes/ListaClientes";
import postClientes from "../AdicionarCliente/AdicionarCliente"
import S from "./Home.module.css";
import { useEffect } from "react";

const Home = () => {

  const [removeLoading, setRemoveLoading] = useState(false)

   //Configuração do tempo
   useEffect(() => {
    setTimeout(() => {
       setRemoveLoading(true)
    }, 3000) 
   })

   return (
     <main className={S.content}>
      {!removeLoading && <Loading />}
      <section className={S.right}>
      </section>
      <section className={S.left}>
        <div className={S.options}>
          <h1>Oque você quer fazer?</h1>
          <nav>
            <Link className={S.link} to="/post">Adicionar Cliente</Link>
            <Link className={S.link} to="/get">Lista de Clientes</Link>
            <Link className={S.link} to="/getClienteId">Procurar Cliente</Link>
          </nav>
        </div>
      </section>
    </main>
  );
};

export default Home;
