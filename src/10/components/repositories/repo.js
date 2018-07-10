import React from 'react'
import PropTypes from 'prop-types'
import Description from './description'
import Stars from './stars'

const Repo = props => (
  <div className="repo">
    <a className="name" href={props.url}>
      {props.name}
    </a>
    <Stars className="stars" stars={props.stars} />
    <Description className="description">{props.description}</Description>
  </div>
)

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  description: PropTypes.string
}

export default Repo
