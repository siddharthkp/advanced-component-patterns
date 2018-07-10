import React from 'react'
import PropTypes from 'prop-types'

const Avatar = props => <img className="avatar" src={props.avatar} alt="avatar" />

Avatar.propTypes = {
  avatar: PropTypes.string.isRequired
}

export default Avatar
