// Camada de acesso à API pública do GitHub.
// Mantemos as chamadas de rede separadas dos componentes: assim a interface
// só se preocupa em mostrar dados, e este arquivo cuida de buscá-los.
// A API pública não exige chave para essas consultas básicas.

const BASE_URL = 'https://api.github.com'

// Busca os dados do perfil de um usuário (nome, avatar, bio, etc).
export async function buscarUsuario(username) {
  const resposta = await fetch(`${BASE_URL}/users/${username}`)

  if (resposta.status === 404) {
    throw new Error('Usuário não encontrado.')
  }
  if (resposta.status === 403) {
    // A API do GitHub limita requisições por hora para quem não está logado.
    throw new Error('Limite de buscas atingido. Tente novamente em alguns minutos.')
  }
  if (!resposta.ok) {
    throw new Error('Não foi possível buscar este usuário agora.')
  }

  return resposta.json()
}

// Busca os repositórios do usuário, já ordenados pelos mais estrelados.
export async function buscarRepositorios(username) {
  const resposta = await fetch(
    `${BASE_URL}/users/${username}/repos?per_page=100&sort=updated`,
  )

  if (!resposta.ok) {
    throw new Error('Não foi possível carregar os repositórios.')
  }

  const repos = await resposta.json()

  // Ordena por número de estrelas (do maior para o menor) e pega os 12 primeiros.
  return repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 12)
}
