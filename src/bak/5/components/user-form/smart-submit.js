import React from 'react'

const smartSubmit = Component => {
  class newComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = { disabled: true }
    }
    onChange = event => {
      if (event.target.value.length > 0) this.setState({ disabled: false })
      else this.setState({ disabled: true })
    }
    render() {
      return (
        <Component
          SMARTSUBMIT_onChange={this.onChange}
          SMARTSUBMIT_disabled={this.state.disabled}
          {...this.props}
        />
      )
    }
  }
  /* return this new component we created */
  return newComponent
}

export default smartSubmit
