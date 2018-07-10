import React from 'react'
import Repo from './repo'
import Description from './description'

const Repositories = props => (
  <div className="section repositories">
    <Description description={props.data.description} />
    {props.data.repos.map((repo, index) => (
      <Repo
        key={repo.name}
        name={repo.name}
        url={repo.url}
        description={repo.description}
        stars={repo.stars}
      />
    ))}
  </div>
)

export default Repositories
