import React, { useState } from "react";
import S from "./ShowClientId.module.css";

const ShowClientId = () => {
  const [clientes, setClientes] = useState([]);
  const [input, setInput] = useState();

  function handleInput(target) {
    setInput(target.value);
    console.log(input);
  }

  return (
    <section className={S.content}>
      <div className={S.form}>
        <form >
          <label htmlFor="" className={S.label}>Selecione o id de um cliente:</label>
          <input
            type="number"
            value={input}
            onChange={({ target }) => handleInput(target)}
            className={S.input}
          />
          <button className={S.button}>Pesquisar</button>
        </form>
      </div>

      <div className={S.cliente}>
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
    </section>
  );
};

export default ShowClientId;
