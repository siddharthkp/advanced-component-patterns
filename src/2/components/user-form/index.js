import React from 'react'
import Logo from '../common/logo'

class UserForm extends React.Component {
  onSubmit(event) {}
  render() {
    return (
      <form
        className="user-form"
        onSubmit={this.onSubmit.bind(this)}
        autoComplete="off"
      >
        <Logo big="true" />
        <div>
          <input type="text" name="username" placeholder="github username" />
          <button type="submit">See profile</button>
        </div>
      </form>
    )
  }
}

export default UserForm
