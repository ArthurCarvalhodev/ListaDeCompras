import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";

const listaDeCompras = document.querySelector("#lista-de-compras");


const botaoAdicionar = document.querySelector("#adicionar-item");

botaoAdicionar.addEventListener("click", (evento) => {
  evento.preventDefault();
  const itemDaLista = criarItemDaLista();
  listaDeCompras.appendChild(itemDaLista);  
  verificarListaVazia(listaDeCompras);
});

verificarListaVazia(listaDeCompras);