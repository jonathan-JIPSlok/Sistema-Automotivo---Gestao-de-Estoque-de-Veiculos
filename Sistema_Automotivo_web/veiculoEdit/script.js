document.getElementById("procurar").addEventListener("click", async function (event) {
    event.preventDefault();

    const section = document.getElementById("editar");
    const id = document.getElementById("id").value;
    let res;

    try{
        res = await fetch(`http://localhost:8081/api/veiculos/listarVeiculo/${id}`);
        if (!res.ok) throw new Error("Erro ao buscar veículos");
        let veiculo = await res.json();
        console.log(veiculo);

        let idVeiculo = document.createElement("input");
        idVeiculo.value = veiculo.idVeiculo;
        idVeiculo.disabled = true;
        idVeiculo.id = "inputID"
        // Cria o label
        const idLabel = document.createElement("label");
        idLabel.textContent = "ID do veículo";
        idLabel.setAttribute("for", "inputID");
        section.appendChild(idLabel)
        section.appendChild(idVeiculo);

        let anoVeiculo = document.createElement("input");
        anoVeiculo.value = veiculo.ano;
        anoVeiculo.disabled = true;
        anoVeiculo.id = "inputAno"
        // Cria o label
        const anoLabel = document.createElement("label");
        anoLabel.textContent = "Ano do veículo";
        anoLabel.setAttribute("for", "inputAno");
        section.appendChild(anoLabel)
        section.appendChild(anoVeiculo);

        let corVeiculo = document.createElement("input");
        corVeiculo.value = veiculo.cor;
        corVeiculo.disabled = true;
        corVeiculo.id = "inputCor"
        // Cria o label
        const corLabel = document.createElement("label");
        corLabel.textContent = "Cor do veículo";
        corLabel.setAttribute("for", "inputCor");
        section.appendChild(corLabel)
        section.appendChild(corVeiculo);

        let marcaVeiculo = document.createElement("input");
        marcaVeiculo.value = veiculo.marca.nome;
        marcaVeiculo.disabled = true;
        marcaVeiculo.id = "inputMarca"
        // Cria o label
        const marcaLabel = document.createElement("label");
        marcaLabel.textContent = "Marca do veículo";
        marcaLabel.setAttribute("for", "inputMarca");
        section.appendChild(marcaLabel)
        section.appendChild(marcaVeiculo);

        let modeloVeiculo = document.createElement("input");
        modeloVeiculo.value = veiculo.modelo.modelo;
        modeloVeiculo.disabled = true;
        modeloVeiculo.id = "inputModelo"
        // Cria o label
        const modeloLabel = document.createElement("label");
        modeloLabel.textContent = "Modelo do veículo";
        modeloLabel.setAttribute("for", "inputModelo");
        section.appendChild(modeloLabel)
        section.appendChild(modeloVeiculo);

        let precoVeiculo = document.createElement("input");
        precoVeiculo.value = veiculo.preco;
        precoVeiculo.id = "inputpreco"
        precoVeiculo.type="number"
        precoVeiculo.required=true;
        // Cria o label
        const precoLabel = document.createElement("label");
        precoLabel.textContent = "Preço do veículo";
        precoLabel.setAttribute("for", "inputpreco");
        section.appendChild(precoLabel)
        section.appendChild(precoVeiculo);

        let quilometragemVeiculo = document.createElement("input");
        quilometragemVeiculo.value = veiculo.quilometragem;
        quilometragemVeiculo.id = "inputQuilometragem";
        quilometragemVeiculo.type="number";
        quilometragemVeiculo.required=true;
        // Cria o label
        const quilometragemLabel = document.createElement("label");
        quilometragemLabel.textContent = "quilometragem do veículo";
        quilometragemLabel.setAttribute("for", "inputQuilometragem");
        section.appendChild(quilometragemLabel)
        section.appendChild(quilometragemVeiculo);

        let statusVeiculo = document.createElement("select");
        statusVeiculo.id = "statusVeiculo";
        statusVeiculo.required=true;

        // Cria o label
        const statusLabel = document.createElement("label");
        statusLabel.textContent = "Status do veículo:";
        statusLabel.setAttribute("for", "statusVeiculo");

        const opcoes = [
            { texto: "INDISPONIVEL", valor: "INDISPONIVEL" },
            { texto: "DISPONIVEL", valor: "DISPONIVEL" },
            { texto: "MANUTENCAO", valor: "MANUTENCAO" },
            { texto: "VENDIDO", valor: "VENDIDO" },
            { texto: "DESCONTINUADO", valor: "DESCONTINUADO" }
            ];

        opcoes.forEach(opcao => {
        const optionElemento = new Option(opcao.texto, opcao.valor);
        
        statusVeiculo.add(optionElemento);
        });
        statusVeiculo.value = veiculo.statusDisponibilidade;

        section.appendChild(statusLabel);
        section.appendChild(statusVeiculo);

        let editButton = document.createElement("button");
        editButton.type = 'button';
        editButton.id="editButton";
        editButton.textContent='Editar';
        editButton.onclick=function () {editarVeiculo(veiculo);};
        section.appendChild(editButton);
        
    } catch (error) {
        console.error("Erro ao listar veículos:", error.message || error);
        alert("Erro ao carregar a lista de veículos: " + (error.message || error));
    }

});

async function editarVeiculo(json) {
    console.log("foi?")
    let quilometragemVeiculo = document.getElementById("inputQuilometragem");
    console.log(quilometragemVeiculo.value);
    let precoVeiculo = document.getElementById("inputpreco");
    console.log(precoVeiculo.value);
    let statusVeiculo = document.getElementById("statusVeiculo")

    const jsonAtualizado = json
        jsonAtualizado.quilometragem = quilometragemVeiculo.value;
        jsonAtualizado.preco = precoVeiculo.value;
        jsonAtualizado.statusDisponibilidade = statusVeiculo.value;

    try {
        const res = await fetch(`http://localhost:8081/api/veiculos/atualizarVeiculo/id=${jsonAtualizado.idVeiculo}`, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonAtualizado)
        });

        if (res.ok) {
        alert("Veículo editado com sucesso!");
        location.reload();
        } else {
        alert("Erro ao editar veículo.");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
        alert("Erro de conexão com a API.");
    }
}