const concluirTarefa = (atualiza, id) => {
  const tarefaCadastrada = JSON.parse(localStorage.getItem("tarefas"));

  tarefaCadastrada[id].concluida = !tarefaCadastrada[id].concluida;
  localStorage.setItem("tarefas", JSON.stringify(tarefaCadastrada));

  atualiza();
};

const BotaoConclui = (atualiza, id) => {
  const botaoConclui = document.createElement("button");

  botaoConclui.classList.add("check-button");
  botaoConclui.innerText = "Concluir";
  botaoConclui.addEventListener("click", () => concluirTarefa(atualiza, id));

  return botaoConclui;
};

export default BotaoConclui;
