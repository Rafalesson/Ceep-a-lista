const deletarTarefa = (atualiza, id) => {
  const index = id;
  const tarefaCadastrada = JSON.parse(localStorage.getItem("tarefas"));

  tarefaCadastrada.splice(index, 1);

  localStorage.setItem("tarefas", JSON.stringify(tarefaCadastrada));

  atualiza();
};

const BotaoDeleta = (atualiza, id) => {
  const botaoDeleta = document.createElement("button");

  botaoDeleta.classList.add("delete-button");
  botaoDeleta.innerText = "Deletar";
  botaoDeleta.addEventListener("click", () => deletarTarefa(atualiza, id));

  return botaoDeleta;
};

export default BotaoDeleta;
