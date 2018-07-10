import React from 'react'
import PropTypes from 'prop-types'
import UserContext from '../../context'

const Avatar = () => (
  <UserContext>
    {context => (
      <img className="avatar" src={context.data.avatar} alt="avatar" />
    )}
  </UserContext>
)

Avatar.propTypes = {
  avatar: PropTypes.string.isRequired
}

export default Avatar
