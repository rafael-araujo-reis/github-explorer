

export function RepositoryItem(props){
    return (
        <>
            <strong>{props.title ?? 'Título padrão'}</strong>
            <p>{props.description ?? 'lorem ipsum'}</p>
            <a href="#">Acessar repositório</a>
        </>
    );
}