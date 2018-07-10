import React from 'react'
import Logo from '../common/logo'
import SmartInput, { Consumer } from '../common/smart-input'

class UserForm extends React.Component {
  onSubmit = event => {
    event.preventDefault()
    const username = event.target[0].value
    this.props.onChange(username)
  }
  render() {
    return (
      <form className="user-form" onSubmit={this.onSubmit} autoComplete="off">
        <SmartInput>{this.props.children}</SmartInput>
      </form>
    )
  }
}

UserForm.Logo = () => <Logo big="true" />

UserForm.Input = onChange => (
  <Consumer>
    {context => (
      <input
        onChange={context.onChange}
        type="text"
        name="username"
        placeholder="github username"
      />
    )}
  </Consumer>
)

UserForm.Button = disabled => (
  <Consumer>
    {context => (
      <button disabled={context.disabled} type="submit">
        See profile
      </button>
    )}
  </Consumer>
)

UserForm.Helptext = () => (
  <div className="helptext">Please enter your GitHub username</div>
)

export default UserForm
