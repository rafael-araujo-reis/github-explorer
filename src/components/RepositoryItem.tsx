interface RepositoryItemProps {
    repository:{
        name: string,
        description: string,
        html_url: string
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
            <li>
                <h2>{props.repository?.name}</h2>
                <p>{props.repository?.description ?? 'Descrição indisponível no momento'}</p>
                <a href={props.repository.html_url} target="_blank">Acessar repositório</a>
                <hr />
            </li>
    );
}