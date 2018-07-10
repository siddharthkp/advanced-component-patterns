import React from 'react'
import Logo from '../common/logo'
import SmartInput, { SmartContext } from '../common/smart-input'

import UserContext from '../../context'

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
          <div>{this.props.children}</div>
        </SmartInput>
      </form>
    )
  }
}

UserForm.Logo = () => <Logo big="true" />

UserForm.Input = props => (
  <UserContext.Consumer>
    {({ data }) => (
      <SmartContext.Consumer>
        {context => (
          <input
            onChange={context.onChange}
            type="text"
            name="username"
            placeholder="github username"
          />
        )}
      </SmartContext.Consumer>
    )}
  </UserContext.Consumer>
)

UserForm.Button = props => (
  <SmartContext.Consumer>
    {context => (
      <button disabled={context.disabled} type="submit">
        See profile
      </button>
    )}
  </SmartContext.Consumer>
)

UserForm.Helptext = () => (
  <div className="helptext">Enter your GitHub username</div>
)

export default UserForm
