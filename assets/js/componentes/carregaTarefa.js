import { criaData } from "./criarData.js";
import { removeDatasRepetidas, ordenaPorData } from "../service/data.js";

export const carregaTarefa = () => {
  const lista = document.querySelector("[data-list]");

  const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas")) || [];
  
  lista.innerHTML = "";

  const datasUnicas = removeDatasRepetidas(tarefasCadastradas);
  
  ordenaPorData(datasUnicas);
  

  datasUnicas.forEach((dia) => {
    lista.appendChild(criaData(dia));
  });
};