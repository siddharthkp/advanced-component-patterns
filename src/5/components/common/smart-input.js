import React from 'react'

function smartInput(Component) {
  return class SmartComponent extends React.Component {
    constructor() {
      super()
      this.state = { value: '' }
    }
    onChange = event => {
      this.setState({ value: event.target.value })
    }
    render() {
      return (
        <Component
          {...this.props}
          onChange={this.onChange}
          disabled={this.state.value.length < 3}
        />
      )
    }
  }
}

export default smartInput
