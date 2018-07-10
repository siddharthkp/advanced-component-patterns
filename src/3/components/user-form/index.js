import React from 'react'
import Logo from '../common/logo'

class UserForm extends React.Component {
  onSubmit(event) {
    event.preventDefault()
    const username = event.target[0].value
    this.props.onChange(username)
  }
  render() {
    return (
      <form className="user-form" onSubmit={this.onSubmit.bind(this)}>
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
