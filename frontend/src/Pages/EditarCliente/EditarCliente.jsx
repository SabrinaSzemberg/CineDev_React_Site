import React, { useState, useEffect } from 'react'
import {getClienteId, putClientes} from '../../Service/Api'
import S from "./EditarCliente.module.css"
import {useSearchParams} from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const EditarCliente = () => {

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
    const [searchParams] = useSearchParams();
    const [dadosForm, setDadosForm] = useState({});

    useEffect(() => requisition,[])

    async function requisition() {
        const response = await getClienteId(searchParams.get('id'));
        const responseLoweredCaseKeys = parseToLowerOrUpperCase(response[0], false)
        setDadosForm(responseLoweredCaseKeys)
    }

    function handleDadosForm(target, nomeInput){
        const value = target.value;
        setDadosForm({...dadosForm, [nomeInput]: value});
    }

    function parseToLowerOrUpperCase(obj, upper) {
        const entries = Object.entries(obj);

        return Object.fromEntries(
            entries.map(([key, value]) => {
                return [upper ? key.toUpperCase() : key.toLowerCase(), value];
            }),
        );
    }

    const fazerPut = async () => {
        console.log(dadosForm)
        const toUpperKeys = await parseToLowerOrUpperCase(dadosForm, true)
        putClientes(toUpperKeys, dadosForm.id)
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
                    value={dadosForm.name}
                    onChange={({target}) => handleDadosForm(target, "name")}
                />
                <ErrorMessage component="div" name="name" />
                <label htmlFor="">Email</label>
                <input
                    type="text"
                    placeholder="Email" 
                    value={dadosForm.email}
                    onChange={({target}) => handleDadosForm(target, "email")}
                />
                <ErrorMessage component="di" name="email" />
                <label htmlFor="">Password</label>
                <Field
                    type="text"
                    placeholder="Password"
                    
                    value={dadosForm.password}
                    onChange={({target}) => handleDadosForm(target, "password")}
                />
                 <ErrorMessage component="div" name="email" />
                <label htmlFor="">Payment</label>
                <input
                    type="text"
                    placeholder="Payment"
                    value={dadosForm.payment}
                    onChange={({target}) => handleDadosForm(target, "payment")}
                />
                <label htmlFor="">Club</label>
                <input
                    type="text"
                    placeholder="Club"
                    value={dadosForm.club}
                    onChange={({target}) => handleDadosForm(target, "club")}
                />
            </form>
            </Formik>
        </section>
        <section className={S.lowerSection}>
            <button onClick={()=>fazerPut()}>Salvar</button>
        </section>
    </section>

  )
}

export default EditarCliente
