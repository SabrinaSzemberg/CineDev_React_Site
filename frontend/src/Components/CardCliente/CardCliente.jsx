import React from "react";
import { Link } from "react-router-dom";
import S from "./CardCliente.module.css";
import { deleteClienteId } from "../../Service/Api";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const CardCliente = ({ id, name, email, password, payment, club }) => {
  const validationSchema = yup.object({
    nome: yup
    .string()
    
    .required("O campo é obrigatório."),
    email: yup
      .string()
      .email("Email invalido ")
      .required("Email invalido"),
    password: yup
      .string()
      .min(8, "Senha no  minimo com 8 caracteres")
      .required("A senha é obrigatória")
  });
  async function requisition() {
    await deleteClienteId(id);
    location.reload()
    }
 

  return (
   <div>
    <Formik
      initialValues={{ name:"" , email: "", password: "" }}
      validationSchema={validationSchema}
    >
    <form>
      
    <div className={S.card}>
      <div>
       <Field/>
        <h3>Nome: {name}</h3>
        <ErrorMessage component="div" name="name" />
        <Field/>
        <p>E-mail: {email}</p>
        <ErrorMessage component="div" name="email" />
        <Field/>
        <p>Senha: {password}</p>
        <ErrorMessage component="div" name="password" />
      </div>
      <div>
        <p>Pagamento: {payment}</p>
        <p>Clube: {club}</p>
      </div>
      <Link to={"/put?id="+ id} className={S.link}>Editar</Link>
      <button onClick={requisition} className={S.link} >Excluir</button>
    </div>
    </form>
    </Formik>
    </div>

  );
};



export default CardCliente;
