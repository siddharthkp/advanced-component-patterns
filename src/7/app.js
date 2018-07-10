import React from 'react'
import axios from 'axios'
import Header from './components/common/header'
import UserInfo from './components/user-info'
import UserForm from './components/user-form'
import Repositories from './components/repositories'
import { Provider } from './state'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: {} }
  }
  onChange = ({ username }) => {
    this.setState({ data: {} })
    axios
      .get(`https://github-user.now.sh/?username=${username}`)
      .then(response => this.setState({ data: response.data }))
  }
  componentDidMount() {
    this.onChange({ username: 'siddharthkp' })
  }

  render() {
    return (
      <Provider value={{ data: this.state.data }}>
        <div>
          <Header />
          <UserForm onChange={this.onChange} />
          {this.state.data.repos ? (
            <React.Fragment>
              <UserInfo />
              <Repositories />
            </React.Fragment>
          ) : null}
        </div>
      </Provider>
    )
  }
}

export default App
