function funcao1() {
  console.log('Primeiro executa aqui');
}
function funcao2() {
  console.log('2nd executa aqui');
}
function funcao3() {
  console.log('3rd executa aqui');
}

funcao1();
funcao2();
funcao3();

//Função simples
function digaOlaPara(nome) {
  console.log(`Olá ${nome}`);
}

digaOlaPara('Maria');
setTimeout(digaOlaPara, 2000, 'Ana');
digaOlaPara('Pedro');
setTimeout(digaOlaPara, 1000, 'João');

//PROMISE
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ id: 1, nome: 'Thais' });
  }, 3000);
}).then((resultado) => {
  console.log(resultado);
});

//Promise Rejeitada

new Promise((resolve, reject) => {
  setTimeout(() => reject('Erro'), 4000);
}).catch((err) => {
  console.log(err);
});
