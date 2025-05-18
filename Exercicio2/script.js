/**Pedro comprou um saco de ração com peso em Kg.
 *  Ele possui dois gatos,para os quais fornece a quantidade de ração em gramas.
 *  A quantidade diária de ração fornecida para cada gato é sempre a mesma.
 *  Crie um algoritmo que receba o peso do saco de ração e a quantidade de ração fornecida para cada
 *  gato.
 *  Calcule e mostre quanto restará de ração no saco após cinco dias.  */

const { createElement } = require("react");

function calculo(){

    var Nome = document.getElementById("nome").value;

    var inputs = document.getElementById("respostas");

    var novo_paragrafo_racao = document.createElement("p");

    inputs.appendChild(novo_paragrafo_racao);

    novo_paragrafo_racao.innerHTML = `Qual é a quantidade de ração desejada? `;

    //criando um novo input

    var novo_input_racao = document.createElement("input");

    novo_paragrafo_racao.appendChild(novo_input_racao);

    //criando um novo botão para esse input

    var novo_botao_racao = document.createElement("button");

    novo_botao_racao.innerHTML = "Start";

    novo_paragrafo_racao.appendChild(novo_botao_racao);
}



