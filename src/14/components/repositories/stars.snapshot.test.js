import React from 'react'
import renderer from 'react-test-renderer'
import Stars from './stars'
// import 'jest-styled-components'

test('Works', () => {
  const component = renderer.create(<Stars stars={24} />)
  const JSONRepresnetation = component.toJSON()
  expect(JSONRepresnetation).toMatchSnapshot()
})
