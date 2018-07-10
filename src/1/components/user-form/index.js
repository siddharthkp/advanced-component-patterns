import React from 'react'
import Logo from '../common/logo'

class UserForm extends React.Component {
  render() {
    return (
      <form className="user-form" autoComplete="off">
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
