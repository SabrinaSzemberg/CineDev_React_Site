import React, { useState } from 'react'
import { postClientes } from '../../Service/Api'
import S from "./AdicionarCliente.module.css"

const AdicionarCliente = () => {

    const [dadosForms, setDados] = useState({
        name:"",
        email:"",
        password:"",
        payment:"",
        club:""
    });

    function handleDadosForm(target, nomeInput){
        const value = target.value;
        setDadosForms({...dadosForms, [nomeInput]: value});
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
                    value={dadosForms.name}
                    onChange={({target}) => handleDadosForm(target, "name")}
                />
                <label htmlFor="">Email</label>
                <input
                    type="text"
                    value={dadosForms.email}
                    onChange={({target}) => handleDadosForm(target, "email")}
                />
                <label htmlFor="">Password</label>
                <input
                    type="text"
                    value={dadosForms.password}
                    onChange={({target}) => handleDadosForm(target, "password")}
                />
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
        </section>
        <section>
            <button onClick={()=>fazerPost()}>Salvar</button>
        </section>
    </section>

  )
}

export default AdicionarCliente
