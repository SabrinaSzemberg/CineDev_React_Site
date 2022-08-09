import React, { useState } from 'react'
import { postClientes } from '../../Service/Api'
import S from "./AdicionarCliente.module.css"

const AdicionarCliente = () => {

    const [dadosForms, setDados] = useState({
        NAME:"",
        EMAIL:"",
        PASSWORD:"",
        PAYMENT:"",
        CLUB:""
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
            <form>
                <label htmlFor="">Name</label>
                <input
                    type="text"
                    value={dadosForms.NAME}
                    onChange={({target}) => handleDadosForm(target, "NAME")}
                />
                <label htmlFor="">Email</label>
                <input
                    type="text"
                    value={dadosForms.EMAIL}
                    onChange={({target}) => handleDadosForm(target, "EMAIL")}
                />
                <label htmlFor="">Password</label>
                <input
                    type="text"
                    value={dadosForms.PASSWORD}
                    onChange={({target}) => handleDadosForm(target, "PASSWORD")}
                />
                <label htmlFor="">Payment</label>
                <input
                    type="text"
                    value={dadosForms.PAYMENT}
                    onChange={({target}) => handleDadosForm(target, "PAYMENT")}
                />
                <label htmlFor="">Club</label>
                <input
                    type="text"
                    value={dadosForms.CLUB}
                    onChange={({target}) => handleDadosForm(target, "CLUB")}
                />
            </form>
        </section>
        <section>
            <button onClick={()=>fazerPost()}>Salvar</button>
        </section>
    </section>

  )
}

export default AdicionarCliente
