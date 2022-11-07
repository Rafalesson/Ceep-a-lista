import  BotaoConclui  from "./componentes/concluiTarefa.js";
import BotaoDeleta from "./componentes/deletaTarefa.js";
const novaTarefa = document.querySelector("[data-form-button]");

const criarTarefa = (event) => {
  event.preventDefault();

  const input = document.querySelector("[data-form-input]");
  const lista = document.querySelector("[data-list]");
  const valor = input.value;
  const div = document.createElement("div");
  const tarefa = document.createElement("li");
  const conteudo = `<p class="content">${valor}</p>`;

  tarefa.innerHTML = conteudo;
  tarefa.classList.add("task");
  tarefa.appendChild(div);

  div.classList.add("div-buttons");
  div.appendChild(BotaoConclui());
  div.appendChild(BotaoDeleta());
  lista.appendChild(tarefa);

  input.value = "";
  input.focus();
};

novaTarefa.addEventListener("click", criarTarefa);