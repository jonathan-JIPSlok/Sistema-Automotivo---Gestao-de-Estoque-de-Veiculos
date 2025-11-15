// -----------------------------------------------------------Cadastra um veiculo no BD via API
document.getElementById("form-cadastro").addEventListener("submit", async (e) => {
  e.preventDefault(); // Impede o envio padrão do formulário

  
  // JSON com os dados
  const marca = {
    nome: document.getElementById("nome").value
  }

  try {
    const res = await fetch("http://localhost:8081/api/marcas/cadastrarMarca", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(marca)
    });

    if (res.ok) {
      alert("Marca cadastrada com sucesso!");
      e.target.reset(); // Limpa o formulário
      document.location.href='../index.html';
    } else {
      alert("Erro ao cadastrar Marca.");
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
    alert("Erro de conexão com a API.");
  }
});