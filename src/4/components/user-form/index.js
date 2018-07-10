import React from 'react'
import Logo from '../common/logo'

class UserForm extends React.Component {
  constructor() {
    super()
    this.state = { username: '' }
  }
  onSubmit = event => {
    event.preventDefault()
    const username = event.target[0].value
    this.props.onChange(username)
  }
  onChange = event => {
    this.setState({ username: event.target.value })
  }
  render() {
    return (
      <form className="user-form" onSubmit={this.onSubmit} autoComplete="off">
        <Logo big="true" />
        <div>
          <input
            onChange={this.onChange}
            type="text"
            name="username"
            placeholder="github username"
          />
          <button disabled={!this.state.username.length} type="submit">
            See profile
          </button>
        </div>
      </form>
    )
  }
}

export default UserForm
