import { useEffect, useState } from 'react'
import './styles/repositories.scss';

import { RepositoryItem } from "./Repositoryitem";



export function Repositorylist()
{
  const [repositories, setRepositories] = useState ([]);
  useEffect(() =>{
fetch('https://api.github.com/orgs/rocketseat/repos') 

.then(response=> response.json())

.then(data=>setRepositories(data))
  },[])
  return(
    <section className="repository-list">
      <h1>Lista de repositorio</h1>
      <ul>
        {repositories.map(repository=>{
        return<RepositoryItem key ={repository.name} repository = {repository}/>
        })}
      
   
      </ul>
    </section>
  );
}