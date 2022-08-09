import React, { useState, useEffect } from 'react'
import {getClienteId, putClientes} from '../../Service/Api'
import S from "./EditarCliente.module.css"
import {useSearchParams} from "react-router-dom";

const EditarCliente = () => {

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

    const fazerPut = () => {
        const toUpperKeys = parseToLowerOrUpperCase(dadosForm, true)
        putClientes(toUpperKeys, dadosForm.id)
    }

  return (

    <section className={S.content}>
        <section className={S.upperSection}>
            <form>
                <label htmlFor="">Name</label>
                <input
                    type="text"
                    value={dadosForm.name}
                    onChange={({target}) => handleDadosForm(target, "name")}
                />
                <label htmlFor="">Email</label>
                <input
                    type="text"
                    value={dadosForm.email}
                    onChange={({target}) => handleDadosForm(target, "email")}
                />
                <label htmlFor="">Password</label>
                <input
                    type="text"
                    value={dadosForm.password}
                    onChange={({target}) => handleDadosForm(target, "password")}
                />
                <label htmlFor="">Payment</label>
                <input
                    type="text"
                    value={dadosForm.payment}
                    onChange={({target}) => handleDadosForm(target, "payment")}
                />
                <label htmlFor="">Club</label>
                <input
                    type="text"
                    value={dadosForm.club}
                    onChange={({target}) => handleDadosForm(target, "club")}
                />
            </form>
        </section>
        <section className={S.lowerSection}>
            <button onClick={()=>fazerPut()}>Salvar</button>
        </section>
    </section>

  )
}

export default EditarCliente
