const BASE_URL = 'https://www.omdbapi.com/';
const API_KEY = process.env.EXPO_PUBLIC_OMDB_KEY;

export async function buscarFilmes(termo = 'spider man') {
  const url = `${BASE_URL}?s=${encodeURIComponent(termo)}&apikey=${API_KEY}`;

  const resposta = await fetch(url);
  if (!resposta.ok) {
    throw new Error('Falha na requisição à API');
  }

  const dados = await resposta.json();
  if (dados.Response === 'False') {
    throw new Error(dados.Error || 'Nenhum filme encontrado');
  }

  return dados.Search;
}
