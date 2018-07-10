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
      .then(response => {
        dispatch('USER_CHANGE_FINISHED', { data: response.data })
      })
  }
  componentDidMount() {
    this.onChange({ username: 'siddharthkp' })
  }
  dispatch = (action, data) => {
    if (action === 'USER_CHANGE_STARTED') {
      this.setState({ loading: true })
      this.onChange({ username: data.username })
    } else if ((action === 'USER_CHANGE_FINISHED', data)) {
      this.setState({ data: data, loading: false })
    }
  }

  render() {
    const store = { data: this.state.data, dispatch: this.dispatch }

    return (
      <Provider value={store}>
        <Header />
        <UserForm />
        {store.data.repos ? (
          <React.Fragment>
            <UserInfo />
            <Repositories />
          </React.Fragment>
        ) : null}
      </Provider>
    )
  }
}

export default App
