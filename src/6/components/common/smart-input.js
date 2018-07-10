import React from 'react'

class SmartInput extends React.Component {
  constructor() {
    super()
    this.state = { value: '' }
  }
  onChange = event => {
    this.setState({ value: event.target.value })
  }
  render() {
    return this.props.render({
      onChange: this.onChange,
      disabled: this.state.value.length < 3
    })
  }
}

export default SmartInput
