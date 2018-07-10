import React from 'react'
import Repo from './repo'

class Repositories extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }
  render() {
    if (this.state.hasError) return <div>oops</div>
    return (
      <div className="section repositories">
        {this.props.repos.map((repo, index) => (
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
  }
}

export default Repositories
