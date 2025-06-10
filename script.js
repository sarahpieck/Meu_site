const botao = document.getElementById("botaoMensagem");
const mensagem = document.getElementById("mensagem");

const mensagens = [
  "Obrigado por visitar! ",
];

let indice = 0;

botao.addEventListener("click", function () {
  mensagem.textContent = mensagens[indice];
  indice = (indice + 1) % mensagens.length;
});
