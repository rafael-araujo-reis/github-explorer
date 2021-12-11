import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'
import { useState, useEffect } from "react/cjs/react.development";

const URL_GIT = 'https://api.github.com/orgs/rocketseat/repos';

export function RepositoryList() {
    const [respositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch(URL_GIT)
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {respositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>
        </section>
    );
}