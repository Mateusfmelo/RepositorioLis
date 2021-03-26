var numLista = window.prompt("Digite a quantindade de lista: ")//Pedindo a quantidade de lista que será criada.
var texto = window.prompt("Digite um nome: ")//Pedindo que irá estar dentro da lista.

var qtd = 0; //Criando o incrementador.
function myFunction() {
    qtd++ //Sempre que a função for chamada, irá incrementar auqi.

    var criarElemento = document.createElement("LI"); //Fazendo a criacao da tag "<li> </li>" 
    var textoLista = document.createTextNode(`${texto} ${qtd}`);//Adicionando o texto digitado pelo o usuario e a numeracao da quantidade da lista ao lado do texto.
    criarElemento.appendChild(textoLista);
    document.getElementById("myList").appendChild(criarElemento);//Informando o local que irá ficar a lista.
};
for (var i = 0; i < numLista; i++){
    myFunction();
};