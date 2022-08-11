export function validaEmail(email){
    return email.indexOf("@") > 3
}

function validaSenha(senha){
    return senha.length >= 5
}

export async function validacao(body, func){
    if(validaEmail(body.email) && validaSenha(body.password)){
        await func()
    }else{
        alert("Email e/ou Senha Inválido(s)")
    }
}