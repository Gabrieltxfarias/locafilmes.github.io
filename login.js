function Entrar() {

    var usuario = document.getElementById("usuarioid");
    var senha = document.getElementById("senhaid");

    if (usuario.value == "acesso" && senha.value=="123"){
        alert("Entrou");
    }

    else{
        alert("Usuário ou Senha estão Incorretos!");
    }

}
