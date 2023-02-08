const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const valor = document.getElementById('entrada').value;
  const saida = document.getElementById('output');

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (valor % 2 === 0) {
        resolve(`O número ${valor} é par`);
      } else {
        reject(`O número ${valor} é impar`);
      }
    }, 2000);
  })
    .then((resultado) => {
      saida.innerText = resultado + '\n' + 'O numero foi processado';
    })
    .catch((err) => {
      saida.innerText = err + '\n' + 'O numero foi processado';
    });
});
