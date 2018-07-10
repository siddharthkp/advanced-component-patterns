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
          SMART_onChange={this.onChange}
          SMART_disabled={this.state.value.length < 3}
        />
      )
    }
  }
}

export default smartInput
