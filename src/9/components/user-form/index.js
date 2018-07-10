import React from 'react'
import Logo from '../common/logo'
import SmartSubmit from './smart-submit'
import { Consumer } from '../../state'

class UserForm extends React.Component {
  render() {
    return (
      <Consumer>
        {({ data, dispatch }) => (
          <form
            className="user-form"
            onSubmit={event => {
              event.preventDefault()
              dispatch('USER_CHANGE_STARTED', {
                username: event.target[0].value
              })
            }}>
            <Logo big="true" />
            <SmartSubmit>
              {({ disabled, onChange }) => (
                <div>
                  <input
                    onChange={onChange}
                    type="text"
                    placeholder="github username"
                  />
                  <button type="submit" disabled={disabled}>
                    See profile
                  </button>
                </div>
              )}
            </SmartSubmit>
          </form>
        )}
      </Consumer>
    )
  }
}

export default UserForm
