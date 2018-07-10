import React from 'react'
import Repo from './repo'

const Repositories = props => (
  <div className="section repositories">
    {props.repos.map(element => {
      return (
        <Repo
          key={element.name}
          name={element.name}
          stars={element.stars}
          description={element.description}
          url={element.url}
        />
      )
    })}
  </div>
)

export default Repositories
