import React from 'react'
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
  render() {
    return (
      <div>
        <Header />
        <UserForm />
        <UserInfo data={this.state.data} />
        <Repositories repos={this.state.data.repos} />
      </div>
    )
  }
}

export default App
