// Importando a biblioteca readline-sync
const readline = require('readline-sync');

// Capturando o número de pessoas na mesa
const numeroPessoas = readline.questionInt('Digite o numero de pessoas na mesa: ');

// Capturando o valor total da conta
const valorTotal = readline.questionFloat('Digite o valor total da conta: ');

// Capturando o método de pagamento
const metodoPagamento = readline.question('Qual e o metodo de pagamento (PIX, dinheiro ou cartao)? ');

// Aplicando desconto de 10% se o pagamento for via PIX ou dinheiro
let valorComDesconto = valorTotal;

if (metodoPagamento.toLowerCase() === 'pix' || metodoPagamento.toLowerCase() === 'dinheiro') {
  valorComDesconto = valorTotal * 0.9;  // Desconto de 10%
}

// Calculando o valor que cada pessoa deve pagar
const valorPorPessoa = valorComDesconto / numeroPessoas;

// Exibindo os resultados
console.log(`\nValor total da conta (com desconto se aplicável): R$ ${valorComDesconto.toFixed(2)}`);
console.log(`Cada pessoa deve pagar: R$ ${valorPorPessoa.toFixed(2)}`);
