import React from 'react'
import Avatar from './avatar'

const UserInfo = props => (
  <div className="section user-info">
    <Avatar avatar={props.data.avatar} />
    <br />
    <a className="name" href={props.data.url}>
      {props.data.name}
    </a>
  </div>
)

export default UserInfo
