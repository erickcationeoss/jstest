//exibe uma mensagem no console
console.log("Olá mundo!");

//declara uma variável e exibe seu valor
let nome = "pinto";
console.log("Bem-vindo," + nome + "!");

//Função para calcular o quadrado de um número
function quadrado(numero) {
     return numero * numero;
}

// Chama a função e exibe o resultado
 let resultado = quadrado(4);
 console.log("O quadrado de 4 é: " + resultado);

 alert("o script está rodando!")

 //interação do usuário no navegador
 document.addEventListener("DOMContentLoaded", function() { 
     let nome = "usuario";
  document.body.innerHTML = "<h1>Olá, " + nome + "!</h1>";
 });