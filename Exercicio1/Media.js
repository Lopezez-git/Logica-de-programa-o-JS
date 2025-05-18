


function Calcular_media() {

    var Nome = document.getElementById("Nome").value;

    var notas = [];

    //adicionando os valores na array

    notas.push(parseFloat(document.getElementById("nota1").value));

    notas.push(parseFloat(document.getElementById("nota2").value));

    notas.push(parseFloat(document.getElementById("nota3").value));

    notas.push(parseFloat(document.getElementById("nota4").value));

    if (Nome && notas[0] && notas[1] && notas[2] && notas[3]) {

        var soma = 0;

        var contador = 0;

        for (var i = 0; i < notas.length; i++) {

            soma += notas[i];

            contador++;

        }

        //Calcula a media do aluno x

        var media = soma / contador;

        if (media >= 6) {

            document.getElementById("res").innerHTML = `<p><strong style = 'color: green;'>A media do(a) aluno(a) ${Nome} é ${media}, parabens!!</strong></p>`;
        }
        else {

            document.getElementById("res").innerHTML = `<p><strong style = 'color: red;'>A media do(a) aluno(a) ${Nome} é ${media}, por favor informe a nota da prova de recuperação, caso tenha feito:</strong></p>`;

            var saida = document.getElementById("res");

            //Criando o elemento html "input" e "button";

            var novo_input = document.createElement("input");

            novo_input.type = "text";

            novo_input.id = "Nota_recu";

            saida.appendChild(novo_input);

            var novo_botao = document.createElement("button");

            novo_botao.innerHTML = "Calcular";

            //chamando a função "recupera" no novo botão;

            novo_botao.onclick = function () {

                recupera(media)
            };

            saida.appendChild(novo_botao);

        }


    }
    else {

        document.getElementById("res").innerHTML = "<p style = 'color: red;'>Coloque todas as informações</p>";
    }
}

function recupera(media) {

    var Nota_recupera = parseFloat(document.getElementById("Nota_recu").value);

    //Calculando media final

    var media_final = (media + Nota_recupera) / 2;

    if (media_final >= 6) {

        document.getElementById("res3").innerHTML = `<strong style = 'color: green;'>Sua media final é: ${media_final}</strong>`;
    }
    else {

        document.getElementById("res3").innerHTML = `<strong style = 'color: red;'>Sua media final é: ${media_final}</strong>`;
    }

}