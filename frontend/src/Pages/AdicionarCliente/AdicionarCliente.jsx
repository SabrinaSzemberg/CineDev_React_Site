import React, { useState } from 'react'
import { postClientes } from '../../Service/Api'
import S from "./AdicionarCliente.module.css"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const AdicionarCliente = () => {

    const [dadosForms, setDados] = useState({
        name:"",
        email:"",
        password:"",
        payment:"",
        club:""
    });
    
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

    function handleDadosForm(target, nomeInput){
        const value = target.value;
        setDados({...dadosForms, [nomeInput]: value});
    }

    function fazerPost(){
        postClientes(dadosForms)
    }

  return (
    
    <section className={S.content}>
        <section className={S.upperSection}>
        <Formik
      initialValues={{ nome:"" , email: "", password: "" }}
      validationSchema={validationSchema}
    >
            <form>
                <label htmlFor="">Name</label>
                <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={dadosForms.name}
                    onChange={({target}) => handleDadosForm(target, "name")}/>
                 <ErrorMessage component="div" name="name" />
                <label htmlFor="">Email</label>
                
                <Field
                    type="email" name="email" placeholder="Email" 
                    value={dadosForms.email}
                    onChange={({target}) => handleDadosForm(target, "email")}/>
                    <ErrorMessage component="div" name="email" />
                
                
                <label htmlFor="">Password</label>
                
                <Field
                    type="password" name="password" placeholder="Password" 
                    value={dadosForms.password}
                    onChange={({target}) => handleDadosForm(target, "password")}/>
                    <ErrorMessage component="div" name="password" />
                   
                <label htmlFor="">Payment</label>
                <input
                    type="text"
                    value={dadosForms.payment}
                    onChange={({target}) => handleDadosForm(target, "payment")}
                />
                <label htmlFor="">Club</label>
                <input
                    type="text"
                    value={dadosForms.club}
                    onChange={({target}) => handleDadosForm(target, "club")}
                />
              
            </form>
            </Formik>
            
        </section>
        <section className={S.lowerSection}>
            <button  type="submit" onClick={()=>fazerPost()}>Salvar</button>
          
        </section>
    </section>
    
  )
}

export default AdicionarCliente
