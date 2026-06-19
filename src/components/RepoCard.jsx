import { corDaLinguagem, tempoRelativo, formatarNumero } from '../utils/format'

// Cartão de um repositório. A borda colorida à esquerda usa a cor da
// linguagem principal — informação, não só decoração.
export default function RepoCard({ repo }) {
  const cor = corDaLinguagem(repo.language)

  return (
    <a
      className="repo"
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ '--cor-linguagem': cor }}
    >
      <h3 className="repo__name">{repo.name}</h3>

      <p className="repo__desc">
        {repo.description || 'Sem descrição.'}
      </p>

      <div className="repo__meta">
        {repo.language && (
          <span className="repo__lang">
            <span className="repo__dot" style={{ backgroundColor: cor }} />
            {repo.language}
          </span>
        )}

        <span className="repo__stars" title="Estrelas">
          ★ {formatarNumero(repo.stargazers_count)}
        </span>

        <span className="repo__updated">
          atualizado {tempoRelativo(repo.updated_at)}
        </span>
      </div>
    </a>
  )
}
