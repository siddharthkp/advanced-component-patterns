import React from 'react'
import axios from 'axios'

import Header from './components/common/header'
import UserInfo from './components/user-info'
import UserForm from './components/user-form'
import Repositories from './components/repositories'

import data from './data'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: data }
  }
  onChange(username) {
    axios
      .get(`https://github-user.now.sh/?username=${username}`)
      .then(response => {
        // what do you do here?
      })
  }
  render() {
    return (
      <div>
        <Header />
        <UserForm onChange={this.onChange.bind(this)} />
        <UserInfo data={this.state.data} />
        <Repositories repos={this.state.data.repos} />
      </div>
    )
  }
}

export default App
