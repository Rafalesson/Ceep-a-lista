const log = console.log;
const novaTarefa = document.querySelector("[data-form-button]");

const criarTarefa = (event) => {
  event.preventDefault();

  const input = document.querySelector("[data-form-input]");
  const lista = document.querySelector("[data-list]");
  const valor = input.value;
  const tarefa = document.createElement("li");
  const conteudo = `<p class="content">${valor}</p>`;

  tarefa.innerHTML = conteudo;
  tarefa.classList.add("task");
  lista.appendChild(tarefa);

  input.value = "";
  input.focus();
};


novaTarefa.addEventListener("click", criarTarefa);
