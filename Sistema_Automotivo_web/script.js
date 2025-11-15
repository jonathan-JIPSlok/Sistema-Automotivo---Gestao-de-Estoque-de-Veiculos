const API_BASE = "http://localhost:8081/api/veiculos";

// ---------------------------------Carrega os modelos cadastrados
async function carregarModelos() {
  const res = await fetch("http://localhost:8081/api/modelo/listarModelos");
  const modelos = await res.json();
  const selectModelo = document.getElementById("modelo");

  selectModelo.innerHTML = ""; 
  console.log("Aqui 1")

  modelos.forEach(m => {
    const option = document.createElement("option");
    option.value = m.id; // ou m.id
    option.textContent = m.modelo;
    option.dataset.nome = m.modelo;
    selectModelo.appendChild(option);

  });
}

// ------------------------------ Carregas as marcas cadastradas
async function carregarMarcas() {
  const res = await fetch("http://localhost:8081/api/marcas/listarMarcas");
  const marcas = await res.json();
  const selectMarca = document.getElementById("marca");

  selectMarca.innerHTML = "";

  marcas.forEach(m => {
    const option = document.createElement("option");
    option.value = m.id; // ou m.id
    option.textContent = m.nome;
    option.dataset.nome = m.nome;
    selectMarca.appendChild(option);
  });
}

// -----------------------------------------------------------Cadastra um veiculo no BD via API
document.getElementById("form-cadastro").addEventListener("submit", async (e) => {
  e.preventDefault(); // Impede o envio padrão do formulário


  const selectModelo = document.getElementById("modelo")
  console.log(selectModelo.value)
  const selectMarca = document.getElementById("marca")
  const selectedOptionModelo = selectModelo.options[selectModelo.selectedIndex];
  const selectedOptionMarca = selectMarca.options[selectMarca.selectedIndex];
  
  // JSON com os dados
  const veiculo = {
    modelo: {id: parseInt(selectModelo.value), modelo: selectedOptionModelo.dataset.nome},
    marca: {id: parseInt(selectMarca.value), nome: selectedOptionMarca.dataset.nome},
    ano: parseInt(document.getElementById("ano").value),
    cor: document.getElementById("cor").value,
    preco: parseFloat(document.getElementById("preco").value),
    quilometragem: parseInt(document.getElementById("km").value),
    statusDisponibilidade: document.getElementById("status").value
  }

  try {
    const res = await fetch("http://localhost:8081/api/veiculos/cadastrarVeiculo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(veiculo)
    });

    if (res.ok) {
      alert("Veículo cadastrado com sucesso!");
      e.target.reset(); // Limpa o formulário
    } else {
      alert("Erro ao cadastrar veículo.");
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
    alert("Erro de conexão com a API.");
  }
});

// --------------------------------------------Deleta um veiculo do DB via API
async function deletarVeiculo() {
  const id = document.getElementById("id-deletar").value;

  if (!id) {
    return alert("Digite um ID válido para deletar.");
  }

  try {
    const res = await fetch(`http://localhost:8081/api/veiculos/deletarVeiculo/${id}`, {
      method: "DELETE"
    });
    console.log(res.status)

    // Trata os códigos de resposta do seu backend
    if (res.status === 204) {
      alert("Veículo deletado com sucesso!");
    } 
    else if (res.status === 404) {
      alert("Veículo não encontrado!");
    }
    else if (res.status === 304) {
      alert("Não é possível deletar este veículo.\nSomente veículos VENDIDO ou DESCONTINUADO podem ser deletados.");
    }
    else {
      alert("Erro inesperado ao tentar deletar o veículo.");
    }

  } catch (err) {
    console.error("Erro ao deletar veículo:", err);
    alert("Veículo deletado com sucesso!");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  carregarModelos();
  carregarMarcas();
});
