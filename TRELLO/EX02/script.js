// Utilizando o setInterval, crie uma função que mostre o horário atual e atualize automaticamente a cada 1 segundos.

// O horário deve ser mostrado no formato HH:MM:SS.

let counter = 0;

const timer = setInterval(() => {
  counter++;

  today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  console.log(h + ':' + m + ':' + s);
}, 1000);
