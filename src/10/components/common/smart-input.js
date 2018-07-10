import React from 'react'

const SmartContext = React.createContext()

class SmartInput extends React.Component {
  constructor() {
    super()
    this.state = { value: '' }
  }
  onChange = event => {
    this.setState({ value: event.target.value })
  }
  render() {
    return (
      <SmartContext.Provider
        value={{
          onChange: this.onChange,
          disabled: this.state.value.length < 3
        }}
      >
        {this.props.children}
      </SmartContext.Provider>
    )
  }
}

export default SmartInput

export { SmartContext }
