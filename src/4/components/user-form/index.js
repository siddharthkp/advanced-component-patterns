import React from 'react'
import Logo from '../common/logo'

class UserForm extends React.Component {
  constructor() {
    super()
    this.state = { disabled: true }
  }
  onSubmit = event => {
    event.preventDefault()
    const username = event.target[0].value
    this.props.onChange(username)
  }
  onChange = event => {
    this.setState({ disabled: !event.target.value.length })
  }
  render() {
    return (
      <form className="user-form" onSubmit={this.onSubmit}>
        <Logo big="true" />
        <div>
          <input
            onChange={this.onChange}
            type="text"
            name="username"
            placeholder="github username"
          />
          <button disabled={this.state.disabled} type="submit">
            See profile
          </button>
        </div>
      </form>
    )
  }
}

export default UserForm
