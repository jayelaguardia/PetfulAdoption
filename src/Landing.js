import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Landing extends Component {

  constructor(props){
    super(props)

    this.state = {
      tutorial: true,
      newPerson: ''
      }
  }
  render() {
    return (
      <div>
        <p className='tutorial'>
          You will enter your name. Then you will wait in line. Then you
          will adopt one pet at a time. If you would like more pets, you have to jump back in line. You will adopt them in the
          order our shelter received them.  Once you are finished, you will go home and play with them. Good day.
        </p>
        <button><Link to='/adoption'>Let's adopt!</Link></button>
      </div>
    )
  }
}
