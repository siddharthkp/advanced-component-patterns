import React from 'react'
import PropTypes from 'prop-types'
import UserContext from '../../context'

const Name = () => (
  <UserContext.Consumer>
    {context => (
      <a className="name" href={context.data.url}>
        {context.data.name}
      </a>
    )}
  </UserContext.Consumer>
)

Name.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

export default Name
