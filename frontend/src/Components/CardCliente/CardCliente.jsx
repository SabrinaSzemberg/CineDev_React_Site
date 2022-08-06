import React from "react";
import S from "./CardCliente.module.css";

const CardCliente = ({ name, email, password, payment, club }) => {
  return (
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
      <button>Editar</button>
    </div>
  );
};

export default CardCliente;
