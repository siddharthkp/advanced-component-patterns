import React from 'react'
import PropTypes from 'prop-types'

const Name = props => (
  <a className="name" href={props.url}>
    {props.children}
  </a>
)

Name.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

export default Name
