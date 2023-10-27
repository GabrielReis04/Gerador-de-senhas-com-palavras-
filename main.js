const fs = require('fs'); // Importa o módulo 'fs' para lidar com arquivos

const palavras1 = ['hello', 'goodbye', 'apple', 'banana', 'cat', 'dog'];
const palavras2 = ['donuts', 'coffee', 'pizza', 'chocolate', 'icecream', 'admin'];

function escolherPalavra(lista) {
  const indice = Math.floor(Math.random() * lista.length);
  return lista[indice];
}

function gerarSenha() {
  const palavra1 = escolherPalavra(palavras1);
  const palavra2 = escolherPalavra(palavras2);
  const numero = Math.floor(Math.random() * 10000);

  const senha = `${palavra1}${palavra2}${numero}`;
  return senha;
}

const numSenhas = 100000; // Defina o número de senhas que você deseja gerar
const senhas = [];

for (let i = 0; i < numSenhas; i++) {
  senhas.push(gerarSenha());
}

// Converter o array de senhas em uma string, uma senha por linha
const senhasString = senhas.join('\n');

// Escrever as senhas em um arquivo de texto
fs.writeFileSync('senhas.txt', senhasString);

console.log(`Arquivo 'senhas.txt' criado com sucesso!`);
