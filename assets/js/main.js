const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "footer", texto: "Frase 3" },
  { tag: "section", texto: "Frase 4" },
];
const container = document.querySelector(".container");
const div = document.createElement("div"); //criei a div que vai possuir os elementos

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i]; //metodo de selecionar apenas as chaves do elemento
  let tagCriada = document.createElement(tag); //aqui eu criei os elementos dentro do objeto acima
  //   tagCriada.innerText = texto; //aqui eu criei texto de forma normal
  let textoCriado = document.createTextNode(texto); //aqui eu criei o texto utilizando outro metodo
  tagCriada.appendChild(textoCriado); // utilizando o novo metodo eu preciso dessa declaracao
  div.appendChild(tagCriada); //aqui eu crio a tag abaixo do ultimo elemento que estiver no "container selecionado utilizando appendChild"
}
container.appendChild(div); //aqui eu chamo o div criado atraves do let para ser exibido no "container"
