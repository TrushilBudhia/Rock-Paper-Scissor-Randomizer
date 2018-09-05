import React from 'react'
import { connect } from 'react-redux'
import { generateRandomNumber } from '../../actions/randomNumber'

export const RandomNumber = ({ number, generateRandomNumber }) =>
  <div>
    <div>{number}</div>
    <button onClick={generateRandomNumber}>Generate Random Number</button>
  </div>

export default connect(state => state.number, { generateRandomNumber })(RandomNumber)
