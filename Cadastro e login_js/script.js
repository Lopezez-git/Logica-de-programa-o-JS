function cadastrar(){

    let nome = document.getElementById("nome").value;

    let Email = document.getElementById("email").value;

    let senha = document.getElementById("senha").value;

    let NovosUsuarios = {nome: nome,
                    email: Email,
                    senha: senha};

    //console.log(usuarios);

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios.push(NovosUsuarios);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    console.log("Novo usuario!");

}

document.getElementById("botao").onclick = function(){

    cadastrar()
}