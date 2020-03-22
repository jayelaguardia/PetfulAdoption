import React, { Component } from 'react'

export default class Adoption extends Component {
  
  
  render() {
    return (
      <>
        {this.props.state.tutorial ? 
        <section className='tutorial'>
          <form onSubmit={this.props.propsPassed.tutorialFinished} className="personName">
            <label htmlFor="newPerson">You will input your name.</label>
            <input type="text" name="newPerson" value={this.props.state.newPerson} onChange={this.props.propsPassed.updateName} required />

            <button>Yes, I will adopt.</button>
          </form>
          
        </section> :
        '' }



        
        <section className="petSection">
        
        <div className="catDiv">
          <img src={this.props.state.cats[0] ? this.props.state.cats[0].imageURL : ''} alt='a cat'/>
          <ul>
            <li>{this.props.state.cats[0] ? this.props.state.cats[0].name : ''}</li>
            <li>{this.props.state.cats[0] ? this.props.state.cats[0].age : ''}</li>
            <li>{this.props.state.cats[0] ? this.props.state.cats[0].breed : ''}</li>
            <li>{this.props.state.cats[0] ? this.props.state.cats[0].gender : ''}</li>
            <li>{this.props.state.cats[0] ? this.props.state.cats[0].description : ''}</li>
            <li>{this.props.state.cats[0] ? this.props.state.cats[0].story : ''}</li>
          </ul>
          <button disabled={this.props.state.people[0] !== this.props.state.newPerson} className="adoptCat" onClick={this.props.propsPassed.adoptCat}>Adopt Me!</button>
        </div>
        
        <div className="dogDiv">
        <img src={this.props.state.dogs[0] ? this.props.state.dogs[0].imageURL : ''} alt='a dog'/>
        <ul>
          <li>{this.props.state.dogs[0] ? this.props.state.dogs[0].name : ''}</li>
          <li>{this.props.state.dogs[0] ? this.props.state.dogs[0].age : ''}</li>
          <li>{this.props.state.dogs[0] ? this.props.state.dogs[0].breed : ''}</li>
          <li>{this.props.state.dogs[0] ? this.props.state.dogs[0].gender : ''}</li>
          <li>{this.props.state.dogs[0] ? this.props.state.dogs[0].description : ''}</li>
          <li>{this.props.state.dogs[0] ? this.props.state.dogs[0].story : ''}</li>
        </ul>
        <button disabled={this.props.state.people[0] !== this.props.state.newPerson} className="adoptDog" onClick={this.props.propsPassed.adoptDog}>Adopt Me!</button>
        </div>
      </section>

      <section>
        <ul>
          {this.props.state.people ? this.props.state.people.map(option => <li>{option}</li>) : ''}
        </ul>
        <button className="doneAdopting" onClick={this.props.propsPassed.removePerson}>I'm done adopting (next person in line)</button>
      </section>
    </>   
    )
  }
}
