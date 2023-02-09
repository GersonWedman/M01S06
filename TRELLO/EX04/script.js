const fakeTime = () => parseInt(Math.random() * 10000);

const retornoEmpresa1 = new Promise((resolve) => setTimeout(resolve, fakeTime(), 'Empresa 1'));

const retornoEmpresa2 = new Promise((resolve) => setTimeout(resolve, fakeTime(), 'Empresa 2'));

Promise.race([retornoEmpresa1, retornoEmpresa2])
  .then((result) => {
    console.log('Responsável:', result);
  })
  .catch((err) => {
    console.log('Erro:', err);
  });
