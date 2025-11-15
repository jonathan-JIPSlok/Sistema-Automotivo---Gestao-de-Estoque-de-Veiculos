// -----------------------------------------------------------Cadastra um veiculo no BD via API
document.getElementById("form-cadastro").addEventListener("submit", async (e) => {
  e.preventDefault(); // Impede o envio padrão do formulário

  
  // JSON com os dados
  const modelo = {
    modelo: document.getElementById("nome").value
  }
  console.log(modelo);

  try {
    const res = await fetch("http://localhost:8081/api/modelo/cadastrarModelo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(modelo)
    });

    if (res.ok) {
      alert("Modelo cadastrado com sucesso!");
      e.target.reset(); // Limpa o formulário
      document.location.href='../index.html';
    } else {
      alert("Erro ao cadastrar modelo.");
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
    alert("Erro de conexão com a API.");
  }
});