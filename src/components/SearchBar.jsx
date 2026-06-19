import { useState } from 'react'

// Barra de busca com cara de terminal: o prefixo "$ gh user" reforça
// o tema do projeto (uma ferramenta de desenvolvedor) e é o elemento
// que dá personalidade à página.
export default function SearchBar({ onBuscar, carregando }) {
  const [texto, setTexto] = useState('')

  function aoEnviar(evento) {
    evento.preventDefault()
    const username = texto.trim()
    if (username) {
      onBuscar(username)
    }
  }

  return (
    <form className="search" onSubmit={aoEnviar}>
      <span className="search__prompt" aria-hidden="true">
        $ gh user
      </span>
      <input
        className="search__input"
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="digite um usuário, ex: torvalds"
        aria-label="Nome de usuário do GitHub"
        autoFocus
      />
      <button className="search__button" type="submit" disabled={carregando}>
        {carregando ? 'buscando…' : 'buscar'}
      </button>
    </form>
  )
}
