import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import CardCliente from "../../Components/CardCliente/CardCliente";
import { deleteClienteId } from "../../Service/Api";
import { getClientes } from '../../Service/Api';
import S from "./Delete.module.css"



const Delete = () => {
  const params = useParams()
  const {id} = params
  const [dadosAntigos, setDadosAntigos] = useState({
        cliente: '',
        email: '',
        senha: '',
        planos: '',
  })

  function handleInput(e, key) {
    setDadosAntigos({...dadosAntigos, [key]: e.target.value})
  };

    async function requisition() {
    await deleteClienteId(id);
    }

  return (
      <section className={S.content}>
        {/* <div className={S.form}>
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
          {!!clientes &&
            clientes.map((cliente) => {
              return (
                <CardCliente
                  key={cliente.ID}
                  name={cliente.NAME}
                  email={cliente.EMAIL}
                  password={cliente.PASSWORD}
                  payment={cliente.PAYMENT}
                  club={cliente.CLUB}
                />
              );
            })}
        </div> */}
      </section>
  );
    
}

export default Delete