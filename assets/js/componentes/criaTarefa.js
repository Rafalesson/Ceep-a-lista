import BotaoConclui from "./concluiTarefa.js";
import BotaoDeleta from "./deletaTarefa.js";
import { carregaTarefa } from "./carregaTarefa.js";

export const handleNovoItem = (evento) => {
  evento.preventDefault();

  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  const input = document.querySelector("[data-form-input]");
  const valor = input.value;

  const calendario = document.querySelector("[data-form-date]");
  const data = moment(calendario.value);
  const horario = data.format("HH:mm"); 

  const dataFormatada = data.format("DD/MM/YYYY");
  const concluida = false;

  const dados = {
    valor,
    dataFormatada,
    horario,
    concluida
  };

  const tarefasAtualizadas = [...tarefas, dados];

  localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas));
  input.value = "";
  input.focus();

  carregaTarefa();
};

export const Tarefa = ({ valor, horario, concluida }, id) => {
  const tarefa = document.createElement("li");
  const div = document.createElement("div");
  const conteudo = `
    <p class="content">${horario}</p>
    <p class="content">${valor}</p>`;

  if (valor === "") {
    return;
  }

  if (concluida) {
    tarefa.classList.add("done");
  }

  tarefa.classList.add("task");
  tarefa.innerHTML = conteudo;
  tarefa.appendChild(div);

  div.classList.add("div-buttons");
  div.appendChild(BotaoConclui(carregaTarefa, id));
  div.appendChild(BotaoDeleta(carregaTarefa, id));

  return tarefa;
};
