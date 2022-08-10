import React from "react";
import { Link } from "react-router-dom";
import S from "./CardCliente.module.css";
import { deleteClienteId } from "../../Service/Api";



  async function requisition() {
    await deleteClienteId(id);
    location.reload()
    }
 

  return (
   
    <form>
    <div className={S.card}>
      <div>
        <h3>Nome: {name}</h3>
        <p>E-mail: {email}</p>
        <p>Senha: {password}</p>
      </div>
      <div>
        <p>Pagamento: {payment}</p>
        <p>Clube: {club}</p>
      </div>
      <Link to={"/put?id="+ id} className={S.link}>Editar</Link>
      <button onClick={requisition} className={S.link} >Excluir</button>
    </div>
    </form>

  );
};



export default CardCliente;
