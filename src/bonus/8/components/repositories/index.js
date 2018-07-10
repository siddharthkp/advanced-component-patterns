import React from 'react'
import Repo from './repo'

const Repositories = props => (
  <div className="section repositories">
    {props.data.repos.map(repo => (
      <Repo
        key={repo.name}
        name={repo.name}
        stars={repo.stars}
        description={repo.description}
        url={repo.url}
      />
    ))}
  </div>
)

export default Repositories
