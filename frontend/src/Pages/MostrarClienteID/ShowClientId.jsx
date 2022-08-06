import React, { useState } from "react";
import S from "./ShowClientId.module.css";

const ShowClientId = () => {
  const [clientes, setClientes] = useState([])
  const [input, setInput] = useState('')

  function handleInput(target){
    setInput(target.value)
    console.log(input)
  }

  return (
    <section className={S.content}>
      <form>
        <label htmlFor="">Selecione o id de um cliente:</label>
        <input type="text" value={input} onChange={({target})=>handleInput(target)}/>
        <button>Pesquisar</button>
      </form>
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
    </section>
  );
};

export default ShowClientId;
