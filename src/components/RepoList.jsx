import RepoCard from './RepoCard'

// Lista os repositórios em uma grade. Recebe a lista já pronta do App.
export default function RepoList({ repos }) {
  if (repos.length === 0) {
    return (
      <p className="repos__vazio">
        Este usuário ainda não tem repositórios públicos.
      </p>
    )
  }

  return (
    <section className="repos">
      <h2 className="repos__titulo">
        Repositórios <span>· mais estrelados</span>
      </h2>

      <div className="repos__grid">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </section>
  )
}
