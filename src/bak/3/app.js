import React from 'react'
import axios from 'axios'
import Header from './components/common/header'
import UserInfo from './components/user-info'
import UserForm from './components/user-form'
import Repositories from './components/repositories'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: {} }
  }
  componentDidMount() {
    this.onChange('facebook')
  }
  onChange = username => {
    axios
      .get(`https://github-user.now.sh/?username=${username}`)
      .then(response => this.setState({ data: response.data }))
  }

  render() {
    return (
      <div>
        <Header />
        <UserForm onChange={this.onChange} />

        <React.Fragment>
          <UserInfo data={this.state.data} />
          <Repositories repos={this.state.data.repos} />
        </React.Fragment>
      </div>
    )
  }
}

export default App
