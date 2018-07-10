import React from 'react'
import Logo from '../common/logo'
import SmartInput from '../common/smart-input'

class UserForm extends React.Component {
  onSubmit = event => {
    event.preventDefault()
    const username = event.target[0].value
    this.props.onChange(username)
  }
  render() {
    return (
      <form className="user-form" onSubmit={this.onSubmit} autoComplete="off">
        <SmartInput>
          {({ onChange, disabled }) => <div>{this.props.children}</div>}
        </SmartInput>
      </form>
    )
  }
}

UserForm.Logo = () => <Logo big="true" />

UserForm.Input = props => (
  <input
    onChange={props.onChange}
    type="text"
    name="username"
    placeholder="github username"
  />
)

UserForm.Button = props => (
  <button disabled={props.disabled} type="submit">
    See profile
  </button>
)

UserForm.Helptext = () => (
  <div className="helptext">Enter your GitHub username</div>
)

export default UserForm
