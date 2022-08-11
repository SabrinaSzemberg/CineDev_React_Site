import React, { useState, useEffect } from 'react'
import {getClienteId, putClientes} from '../../Service/Api'
import S from "./EditarCliente.module.css"
import {useSearchParams, useNavigate} from "react-router-dom";
import { validacao } from '../../utils/Validate';

const AdicionarCliente = () => {
    const [searchParams] = useSearchParams();
    const [dadosForm, setDadosForm] = useState({});
    const navigate = useNavigate()

    useEffect(() => requisition,[])

    async function requisition() {
        const response = await getClienteId(searchParams.get('id'));
        setDadosForm(response[0])
        console.log(response[0])
    }

    function handleDadosForm(target, nomeInput){
        const value = target.value;
        setDadosForm({...dadosForm, [nomeInput]: value});
    }

    const fazerPut = async () => {
        // if(dadosForm.email.indexOf("@") > 3){
        //     await putClientes(dadosForm, dadosForm.id)
        //     navigate("/get")
        // }else{
        //     alert("Email Inválido")
        // }
        validacao(dadosForm, ()=>{
            putClientes(dadosForm, dadosForm.id)
            alert("Informações alteradas com sucesso!")
            navigate("/get")
        })
        console.log(dadosForm)
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
                    placeholder="Email" 
                    value={dadosForm.email}
                    onChange={({target}) => handleDadosForm(target, "email")}
                />
                <label htmlFor="">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    value={dadosForm.password}
                    onChange={({target}) => handleDadosForm(target, "password")}
                />
        
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
        </section>
        <section className={S.lowerSection}>
            <button onClick={fazerPut}>Salvar</button>
        </section>
    </section>
    
  )
}

export default AdicionarCliente
