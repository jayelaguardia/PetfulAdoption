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
        <p>
          You will enter your name.  Then you will wait in line.  Then you
          will adopt as many pets as you can feed.  You will adopt them in the
          order our shelter received them.  Once you are finished, you will
          click "I'm done adopting" and go home and play with them.  Good day.
        </p>
        <Link to='/adoption'>Let's adopt!</Link>
      </div>
    )
  }
}
