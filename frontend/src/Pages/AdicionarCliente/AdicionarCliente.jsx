import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postClientes } from "../../Service/Api";
import { validacao } from "../../utils/Validate";
import S from "./AdicionarCliente.module.css";


const AdicionarCliente = () => {
    const navigate = useNavigate()

  const [dadosForms, setDados] = useState({
    name: "",
    email: "",
    password: "",
    payment: "",
    club: "",
  });

  function handleDadosForm(target, nomeInput) {
    const value = target.value;
    setDados({ ...dadosForms, [nomeInput]: value });
  }

  function fazerPost() {
    validacao(dadosForms, () => {
      postClientes(dadosForms);
      alert("Cadastro realizado com sucesso!")
      navigate("/get")
    });
  }

  return (
    <section className={S.content}>
      <section className={S.upperSection}>
        <form>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={dadosForms.name}
            onChange={({ target }) => handleDadosForm(target, "name")}
          />

          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={dadosForms.email}
            onChange={({ target }) => handleDadosForm(target, "email")}
          />

          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={dadosForms.password}
            onChange={({ target }) => handleDadosForm(target, "password")}
          />

          <label htmlFor="">Payment</label>
          <input
            type="text"
            value={dadosForms.payment}
            onChange={({ target }) => handleDadosForm(target, "payment")}
          />

          <label htmlFor="">Club</label>
          <input
            type="text"
            value={dadosForms.club}
            onChange={({ target }) => handleDadosForm(target, "club")}
          />
        </form>
      </section>
      <section className={S.lowerSection}>
        <button type="submit" onClick={() => fazerPost()}>
          Salvar
        </button>
      </section>
    </section>
  );
};

export default AdicionarCliente;
