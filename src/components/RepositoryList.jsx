import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList(){
    return (
        <section>
            <RepositoryItem repository={'repository'}/>
            <RepositoryItem repository={'repository'}/>
        </section>
    );
}