import React from 'react'
import { Consumer } from '../../state'

const Description = props => (
  <Consumer>
    {context => (
      <div debug={console.log(context)} className="description">
        {context.data.description}
      </div>
    )}
  </Consumer>
)

export default Description
