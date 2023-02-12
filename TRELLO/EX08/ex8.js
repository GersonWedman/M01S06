//obter usuários
const obterUsuarios = async (qtd = 4) => {
  const url = `https://randomuser.me/api/?results=${qtd}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

window.addEventListener('load', async () => {
  //obtem lista da api
  const data = await obterUsuarios(10);
  //obtem ul do html p/ renderizar os itens
  const lista = document.getElementById('lista');
  //percorre dados retornados da API
  data.results.forEach((usuario) => {
    //cria os elementos para exibir no html
    const item = document.createElement('li');
    const nome = document.createElement('h5');
    const email = document.createElement('p');
    const endereco = document.createElement('p');
    const imagem = document.createElement('img');
    //desestrutura o objeto criando variáveis
    const { street, city, state, country } = usuario.location;
    const { title, first, last } = usuario.name;

    //adiciona informações nos itens criados
    nome.innerText = `${title} ${first} ${last}`;
    email.innerText = usuario.email;
    endereco.innerText = `${street.name} ${street.number} ${city} ${state} ${country}`;
    imagem.src = usuario.picture.large;
    imagem.alt = 'imagem do usuario';

    //adiciona itens dentro da li
    item.appendChild(nome);
    item.appendChild(email);
    item.appendChild(endereco);
    item.appendChild(imagem);

    //adiciona li dentro da ul
    lista.appendChild(item);
  });
});
