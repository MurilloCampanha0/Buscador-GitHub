// Mostra mensagens para os estados em que ainda não há repositórios na tela:
// a tela inicial vazia, o carregamento e os erros.
export default function StateMessage({ tipo, mensagem }) {
  if (tipo === 'carregando') {
    return (
      <div className="estado">
        <div className="estado__spinner" aria-hidden="true" />
        <p className="estado__texto">Buscando no GitHub…</p>
      </div>
    )
  }

  if (tipo === 'erro') {
    return (
      <div className="estado">
        <span className="estado__icone" aria-hidden="true">⚠</span>
        <p className="estado__texto">{mensagem}</p>
      </div>
    )
  }

  // Estado inicial (nenhuma busca feita ainda).
  return (
    <div className="estado">
      <span className="estado__icone estado__icone--inicial" aria-hidden="true">
        {'</>'}
      </span>
      <p className="estado__texto">
        Digite um nome de usuário acima para ver o perfil e os repositórios.
      </p>
    </div>
  )
}
