function confirmarLogin(){

    let usuario = document.getElementById("usuario").value;
    let senha = Number(document.getElementById("senha").value);

    if (usuario == "login" && senha == "1234"){
        resultado = ("Login feito com sucesso!");
    }else{
        resultado = ("Usuário ou senha inválidos!");
    }

    document.getElementById("resultado").textContent = resultado;
}