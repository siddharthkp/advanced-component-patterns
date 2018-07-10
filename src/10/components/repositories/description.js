import React from 'react'
import PropTypes from 'prop-types'

const Description = props => <div className="description">{props.children}</div>

Description.propTypes = {
  children: PropTypes.string.isRequired
}

export default Description
