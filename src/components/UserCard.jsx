import { formatarNumero } from '../utils/format'

// Cartão com os dados do perfil: avatar, nome, bio e estatísticas.
export default function UserCard({ usuario }) {
  return (
    <section className="user">
      <img
        className="user__avatar"
        src={usuario.avatar_url}
        alt={`Avatar de ${usuario.login}`}
      />

      <div className="user__info">
        <h2 className="user__name">{usuario.name || usuario.login}</h2>

        <a
          className="user__login"
          href={usuario.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          @{usuario.login}
        </a>

        {usuario.bio && <p className="user__bio">{usuario.bio}</p>}

        <ul className="user__stats">
          <li>
            <strong>{formatarNumero(usuario.public_repos)}</strong>
            <span>repositórios</span>
          </li>
          <li>
            <strong>{formatarNumero(usuario.followers)}</strong>
            <span>seguidores</span>
          </li>
          <li>
            <strong>{formatarNumero(usuario.following)}</strong>
            <span>seguindo</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
