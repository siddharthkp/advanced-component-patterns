import React from 'react'
import { Consumer } from '../../state'

const Avatar = props => (
  <img className="avatar" src={props.avatar} alt="avatar" />
)

export default Avatar
