import React from 'react'
import Avatar from './avatar'
import Description from './description'
import Name from './name'

const UserInfo = props => (
  <div className="section user-info">
    <Avatar avatar={props.data.avatar} />
    <Name url={props.data.url}>{props.data.name}</Name>
    <Description>{props.data.description}</Description>
  </div>
)

export default UserInfo
