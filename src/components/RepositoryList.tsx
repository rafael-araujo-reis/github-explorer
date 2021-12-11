import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'
import { useState, useEffect } from "react";

const URL_GIT = 'https://api.github.com/orgs/rocketseat/repos';

interface Repository{
    name: string
    description: string,
    html_url: string,
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch(URL_GIT)
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>
        </section>
    );
}