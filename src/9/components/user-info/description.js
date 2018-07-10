import React from 'react'
import PropTypes from 'prop-types'
import UserContext from '../../context'

const Description = () => (
  <UserContext.Consumer>
    {context => <div className="description">{context.data.description}</div>}
  </UserContext.Consumer>
)

Description.propTypes = {
  children: PropTypes.string.isRequired
}

export default Description
