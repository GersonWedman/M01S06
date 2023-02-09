// Crie uma função chamada sleep, que recebe como argumento um valor qualquer.

// Quando chamada, essa função precisa retornar, após 3 segundos (setTimeout), uma Promise resolvida com o valor que foi passado como argumento.

// Ex.:
const a = 4;

let sleep = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (a !== null) {
      resolve('Success');
    } else {
      reject('Failed');
    }
  }, 3000);
})
  .then((resultado) => {
    console.log(a);
  })
  .catch((err) => {
    console.log('ERRO');
  });
