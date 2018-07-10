import React from 'react'
import PropTypes from 'prop-types'

const Stars = props => <div className="stars">{props.stars}</div>

Stars.propTypes = {
  stars: PropTypes.number.isRequired
}

export default Stars
