import React from 'react'

const Logo = props => (
  <img className={props.big ? 'logo big' : 'logo'} src="logo.png" alt="logo" {...props} />
)

export default Logo
