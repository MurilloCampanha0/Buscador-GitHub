import { useState } from 'react'
import SearchBar from './components/SearchBar'
import UserCard from './components/UserCard'
import RepoList from './components/RepoList'
import StateMessage from './components/StateMessage'
import { buscarUsuario, buscarRepositorios } from './api/github'

export default function App() {
  // Guardamos os dados do usuário, a lista de repositórios,
  // o estado de carregamento e uma eventual mensagem de erro.
  const [usuario, setUsuario] = useState(null)
  const [repos, setRepos] = useState([])
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState('')

  async function handleBuscar(username) {
    setCarregando(true)
    setErro('')
    setUsuario(null)
    setRepos([])

    try {
      // Buscamos perfil e repositórios em paralelo para ir mais rápido.
      const [dadosUsuario, listaRepos] = await Promise.all([
        buscarUsuario(username),
        buscarRepositorios(username),
      ])
      setUsuario(dadosUsuario)
      setRepos(listaRepos)
    } catch (e) {
      setErro(e.message)
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div className="app">
      <header className="header">
        <span className="header__logo">gh-explorer</span>
        <span className="header__tag">explore qualquer perfil do GitHub</span>
      </header>

      <main className="main">
        <SearchBar onBuscar={handleBuscar} carregando={carregando} />

        {/* Decide o que mostrar conforme o estado atual */}
        {carregando && <StateMessage tipo="carregando" />}
        {!carregando && erro && <StateMessage tipo="erro" mensagem={erro} />}
        {!carregando && !erro && !usuario && <StateMessage tipo="inicial" />}

        {!carregando && !erro && usuario && (
          <>
            <UserCard usuario={usuario} />
            <RepoList repos={repos} />
          </>
        )}
      </main>

      <footer className="footer">
        Feito com a API pública do GitHub · React + Vite
      </footer>
    </div>
  )
}
