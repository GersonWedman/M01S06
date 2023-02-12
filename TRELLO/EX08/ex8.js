//obter usuários
const obterUsuarios = async (qtd = 10) => {
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
  //transforma promise em array
  const data = await obterUsuarios();

  //obtem ul(lista) do html p inserir os itens
  const lista = document.getElementById('lista');
  console.log(data);

  //percorre item por item da API.
  data.results.forEach((usuario) => {
    const item = document.createElement('li');
    const nome = document.createElement('h5');
    const email = document.createElement('p');
    const endereco = document.createElement('p');
    const imagem = document.createElement('img');

    //desestrutura o objeto recebido, criando varios itens a partir de um.
    const { street, city, state, country } = usuario.location;
    const { title, first, last } = usuario.name;

    //organiza informações nos itens criados para "cada variável".
    nome.innerText = `${title} ${first} ${last}`;
    email.innerText = usuario.email;
    endereco.innerText = `${street.name} ${street.number} ${city} ${state} ${country}`;
    imagem.src = usuario.picture.large;
    imagem.alt = 'Imagem do usuário';

    //adiciona as variáveis ao item.
    item.appendChild(nome);
    item.appendChild(imagem);
    item.appendChild(email);
    item.appendChild(endereco);

    //adiciona o item à lista.
    lista.appendChild(item);
  });
});
