// ---------------------------------------------------Lista os veiculos cadastrados
async function listarVeiculos() {
  try {
    const res = await fetch("http://localhost:8081/api/veiculos/listarVeiculos");
    if (!res.ok) throw new Error("Erro ao buscar veículos");

    const veiculos = await res.json();
    const lista = document.getElementById("Lista");
    lista.innerHTML = ""; // Limpa conteúdo anterior

    // Cria a tabela e o cabeçalho
    const tabela = document.createElement("table");
    tabela.border = "1";
    tabela.style.borderCollapse = "collapse";
    tabela.style.width = "100%";

    const cabecalho = document.createElement("thead");
    cabecalho.innerHTML = `
      <tr>
        <th>ID</th>
        <th>Modelo</th>
        <th>Marca</th>
        <th>Ano</th>
        <th>Preço</th>
        <th>Cor</th>
        <th>Disponibilidade</th>
      </tr>
    `;
    tabela.appendChild(cabecalho);

    // Corpo da tabela
    const corpo = document.createElement("tbody");

    veiculos.forEach(v => {
      const linha = document.createElement("tr");

      linha.innerHTML = `
        <td>${v.idVeiculo}</td>
        <td>${v.modelo.modelo}</td>
        <td>${v.marca.nome}</td>
        <td>${v.ano}</td>
        <td>${v.preco}</td>
        <td>${v.cor}</td>
        <td>${v.statusDisponibilidade}</td>
      `;

      corpo.appendChild(linha);
    });

    tabela.appendChild(corpo);
    lista.appendChild(tabela);
  } catch (error) {
    console.error("Erro ao listar veículos:", error);
    alert("Erro ao carregar a lista de veículos.");
  }
}

// ----------------------------------------------------------------- Filtro de seleção
document.getElementById("filtro").addEventListener("change", function () {
  const filtro = document.getElementById("filtro");
  const campoTexto = document.getElementById("campoTexto");
  const select = document.getElementById("status");
  campoTexto.disabled = false;
  select.disabled = true;

  if (filtro.options[filtro.selectedIndex].value == "MARCA") {
    campoTexto.type = "text";
    campoTexto.placeholder = "Digite a Marca";
  } else if (filtro.options[filtro.selectedIndex].value == "MODELO") {
    campoTexto.type = "text";
    campoTexto.placeholder = "Digite o Modelo";
  } else if (filtro.options[filtro.selectedIndex].value == "PRECO") {
    campoTexto.type = "number";
    campoTexto.placeholder = "Digite o Valor";
  } else if (filtro.options[filtro.selectedIndex].value == "ANO") {
    campoTexto.type = "number";
    campoTexto.min = 1000;
    campoTexto.max = 9999;
    campoTexto.placeholder = "Digite o Ano";
  } else if (filtro.options[filtro.selectedIndex].value == "STATUS") {
    campoTexto.disabled = true;
    select.disabled = false;    
  };

});

async function listarVeiculosFiltro() {
  const input = document.getElementById("campoTexto");
  const select = document.getElementById("status");
  const filtro = document.getElementById("filtro");

  let res;
  let veiculos;

  try {
    if (!select.disabled) {
      const status = select.options[select.selectedIndex].value;

      res = await fetch(`http://localhost:8081/api/veiculos/listarVeiculos/StatusDisponibilidade=${encodeURIComponent(status)}`);
    } else if (filtro.value == "MARCA") {
      res = await fetch(`http://localhost:8081/api/veiculos/listarVeiculos/marca=${input.value}`);
    } else if (filtro.value == "MODELO") {
        res = await fetch(`http://localhost:8081/api/veiculos/listarVeiculos/modelo=${input.value}`);
    } else if (filtro.value == "PRECO") {
        res = await fetch(`http://localhost:8081/api/veiculos/listarVeiculos/preco=${input.value}`);
    } else if (filtro.value == "ANO") {
        res = await fetch(`http://localhost:8081/api/veiculos/listarVeiculos/ano=${input.value}`);
    }

    if (!res.ok) throw new Error("Erro ao buscar veículos");

    veiculos = await res.json();
    console.log("Veículos recebidos:", veiculos);

    const lista = document.getElementById("Lista");
    lista.innerHTML = ""; // Limpa conteúdo anterior

    const tabela = document.createElement("table");
    tabela.border = "1";
    tabela.style.borderCollapse = "collapse";
    tabela.style.width = "100%";

    const cabecalho = document.createElement("thead");
    cabecalho.innerHTML = `
      <tr>
        <th>ID</th>
        <th>Modelo</th>
        <th>Marca</th>
        <th>Ano</th>
        <th>Preço</th>
        <th>Cor</th>
        <th>Disponibilidade</th>
      </tr>
    `;
    tabela.appendChild(cabecalho);

    const corpo = document.createElement("tbody");

    veiculos.forEach(v => {
      const linha = document.createElement("tr");
      linha.innerHTML = `
        <td>${v.idVeiculo}</td>
        <td>${v.modelo.modelo}</td>
        <td>${v.marca.nome}</td>
        <td>${v.ano}</td>
        <td>${v.preco}</td>
        <td>${v.cor}</td>
        <td>${v.statusDisponibilidade}</td>
      `;
      corpo.appendChild(linha);
    });

    tabela.appendChild(corpo);
    lista.appendChild(tabela);
  } catch (error) {
    console.error("Erro ao listar veículos:", error.message || error);
    alert("Erro ao carregar a lista de veículos: " + (error.message || error));
  }
}