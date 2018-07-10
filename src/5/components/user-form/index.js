import React from 'react'
import Logo from '../common/logo'
import smartInput from '../common/smart-input'

class UserForm extends React.Component {
  onSubmit = event => {
    event.preventDefault()
    const username = event.target[0].value
    this.props.onChange(username)
  }
  render() {
    return (
      <form className="user-form" onSubmit={this.onSubmit} autoComplete="off">
        <Logo big="true" />
        <div>
          <input
            onChange={this.props.SMART_onChange}
            type="text"
            name="username"
            placeholder="github username"
          />
          <button disabled={this.props.SMART_disabled} type="submit">
            See profile
          </button>
        </div>
      </form>
    )
  }
}

export default smartInput(UserForm)
