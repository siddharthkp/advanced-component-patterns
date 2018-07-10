import React from 'react'

const { Provider, Consumer } = React.createContext({})

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
      <Provider
        value={{
          onChange: this.onChange,
          disabled: this.state.value.length < 3
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export default SmartInput
export { Consumer }
