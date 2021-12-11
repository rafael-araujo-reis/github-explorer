

export function RepositoryItem(props) {
    return (
            <li>
                <h2>{props.repository?.name ?? 'Título indisponível no momento'}</h2>
                <p>{props.repository?.description ?? 'Descrição indisponível no momento'}</p>
                <a href={props.repository.html_url} target="_blank">Acessar repositório</a>
                <hr />
            </li>
    );
}