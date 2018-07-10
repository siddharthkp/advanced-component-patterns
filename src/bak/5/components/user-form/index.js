import React from 'react'
import Logo from '../common/logo'
import smartSubmit from './smart-submit'

class UserForm extends React.Component {
  onSubmit = event => {
    event.preventDefault()
    this.props.onChange({ username: event.target[0].value })
  }
  render() {
    return (
      <form className="user-form" onSubmit={event => this.onSubmit(event)}>
        <Logo big="true" />
        <div>
          <input
            onChange={this.props.SMARTSUBMIT_onChange}
            type="text"
            placeholder="github username"
          />
          <button disabled={this.props.SMARTSUBMIT_disabled} type="submit">
            See profile
          </button>
        </div>
      </form>
    )
  }
}

const SmartUserForm = smartSubmit(UserForm)

export default SmartUserForm
