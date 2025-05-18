function informacoes() {


            //pegando o nome;

            var Name = document.getElementById("nome").value;

            if (Name) {

                //Criando objeto pai
                var Div_pai = document.getElementById("saida");

                //Criando objeto filho

                let lethicia = document.createElement("p");

                //Mudando o HTML do paragrafo filho

                lethicia.innerHTML = `Quanto de ração o ${Name} vai querer? `;


                //Criando novo input
                var novo_input_racao = document.createElement("input");

                lethicia.appendChild(novo_input_racao);

                novo_input_racao.type = "number";

                //Criando o botão

                var novo_botao_racao = document.createElement("button");

                lethicia.appendChild(novo_botao_racao);

                novo_botao_racao.innerHTML = "Start";

                novo_botao_racao.onclick = function () {

                    calculo(novo_input_racao.value, Name)
                };

                //Falando que a div recebe como filho

                Div_pai.appendChild(lethicia);

            }

        }

        //Função para calcular o preço da ração

        function calculo(Quantidade_kg, Name) {

            // Verificando se eu recebi a quantidade em kg, senão acontece um bug;

            if (Quantidade_kg) {

                document.getElementById("erro_message").innerHTML = "";

                var preco_by_kg = 20;

                var preco_final = Quantidade_kg * preco_by_kg;

                var Div_pai = document.getElementById("saida");

                var novo_paragrafo = document.createElement("p");

                novo_paragrafo.innerHTML = `O preço por quilo é R$${preco_by_kg} e a quantidade de quilos desejada pelo ${Name} é ${Quantidade_kg}kg <br> Preço total: R$${preco_final}`;

                Div_pai.appendChild(novo_paragrafo);
            }
            else {

                document.getElementById("erro_message").innerHTML = "<p style = 'color: red;'>Preencha todos os dados</p>";
            }
        }

