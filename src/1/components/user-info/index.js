import React from 'react'
import Avatar from './avatar'
import Description from './description'
import Name from './name'

const UserInfo = props => (
  <div className="section user-info">
    <Avatar avatar="https://avatars3.githubusercontent.com/u/69631?v=4" />
    <Name url="https://github.com/facebook">Facebook</Name>
    <Description>
      We work hard to contribute our work back to the web, mobile, big data, &
      infrastructure communities. NB: members must have two-factor auth.
    </Description>
  </div>
)

export default UserInfo
