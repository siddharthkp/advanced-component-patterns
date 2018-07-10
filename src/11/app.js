import React from 'react'
import axios from 'axios'

import Header from './components/common/header'
import UserInfo from './components/user-info'
import UserForm from './components/user-form'
import Repositories from './components/repositories'

import data from './data'
import UserContext from './context'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: data }
  }
  onChange(username) {
    axios
      .get(`https://github-user.now.sh/?username=${username}`)
      .then(response => {
        this.setState({ data: response.data })
      })
  }
  render() {
    return (
      <div>
        <UserContext.Provider value={{ data: this.state.data }}>
          <Header />
          <UserForm onChange={this.onChange.bind(this)}>
            <UserForm.Logo />
            <UserForm.Input />
            <UserForm.Button />
            <UserForm.Helptext />
          </UserForm>
          <UserInfo />
          <Repositories repos={this.state.data.repos} />
        </UserContext.Provider>
      </div>
    )
  }
}

export default App
