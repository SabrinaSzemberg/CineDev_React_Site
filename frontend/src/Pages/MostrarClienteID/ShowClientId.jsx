import React, { useState } from "react";
import CardCliente from "../../Components/CardCliente/CardCliente";
import Loading from "../../Components/Loading/Loading";
import { getClienteId } from "../../Service/Api";
import S from "./ShowClientId.module.css";

const ShowClientId = () => {
  const [clientes, setClientes] = useState([]);
  const [input, setInput] = useState();

  function handleInput(target) {
    setInput(target.value);
    console.log(input);
  }

  async function requisition() {
    const response = await getClienteId(input);
    setClientes(response)
  }

  return (
    <section className={S.content}>
      <div className={S.form}>
        <form>
          <label htmlFor="" className={S.label}>
            Selecione o id de um cliente:
          </label>
          <input
            type="number"
            value={input}
            onChange={({ target }) => handleInput(target)}
            className={S.input}
          />
          <button className={S.button} onClick={(event) => {
            event.preventDefault()
            requisition()}}>
            Pesquisar
          </button>
        </form>
      </div>
      <div className={S.cliente}>
        {!!clientes ?
          clientes.map((cliente) => {
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
    </section>
  );
};

export default ShowClientId;
