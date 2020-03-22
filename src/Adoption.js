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

        <p>{this.props.state.confirmation}</p>
        
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
          <button disabled={this.props.state.people[0] !== this.props.state.newPerson} className="adoptCat" onClick={this.props.propsPassed.adoptCat}> <a href="#top">Adopt Me!</a></button>
          <p>Next up</p>
          <img src={this.props.state.cats[1] ? this.props.state.cats[1].imageURL : ''} alt='a cat'/>
          <ul>
            <li>{this.props.state.cats[1] ? this.props.state.cats[1].name : ''}</li>
            <li>{this.props.state.cats[1] ? this.props.state.cats[1].age : ''}</li>
            <li>{this.props.state.cats[1] ? this.props.state.cats[1].breed : ''}</li>
            <li>{this.props.state.cats[1] ? this.props.state.cats[1].gender : ''}</li>
            <li>{this.props.state.cats[1] ? this.props.state.cats[1].description : ''}</li>
            <li>{this.props.state.cats[1] ? this.props.state.cats[1].story : ''}</li>
          </ul>
          <p>Next up</p>
          <img src={this.props.state.cats[2] ? this.props.state.cats[2].imageURL : ''} alt='a cat'/>
          <ul>
            <li>{this.props.state.cats[2] ? this.props.state.cats[2].name : ''}</li>
            <li>{this.props.state.cats[2] ? this.props.state.cats[2].age : ''}</li>
            <li>{this.props.state.cats[2] ? this.props.state.cats[2].breed : ''}</li>
            <li>{this.props.state.cats[2] ? this.props.state.cats[2].gender : ''}</li>
            <li>{this.props.state.cats[2] ? this.props.state.cats[2].description : ''}</li>
            <li>{this.props.state.cats[2] ? this.props.state.cats[2].story : ''}</li>
          </ul>

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
        <button disabled={this.props.state.people[0] !== this.props.state.newPerson} className="adoptDog" onClick={this.props.propsPassed.adoptDog}> <a href="#top">Adopt Me!</a></button>
        <p>Next up</p>
        <img src={this.props.state.dogs[1] ? this.props.state.dogs[1].imageURL : ''} alt='a dog'/>
        <ul>
          <li>{this.props.state.dogs[1] ? this.props.state.dogs[1].name : ''}</li>
          <li>{this.props.state.dogs[1] ? this.props.state.dogs[1].age : ''}</li>
          <li>{this.props.state.dogs[1] ? this.props.state.dogs[1].breed : ''}</li>
          <li>{this.props.state.dogs[1] ? this.props.state.dogs[1].gender : ''}</li>
          <li>{this.props.state.dogs[1] ? this.props.state.dogs[1].description : ''}</li>
          <li>{this.props.state.dogs[1] ? this.props.state.dogs[1].story : ''}</li>
        </ul>
        <p>Next up</p>
        <img src={this.props.state.dogs[2] ? this.props.state.dogs[2].imageURL : ''} alt='a dog'/>
        <ul>
          <li>{this.props.state.dogs[2] ? this.props.state.dogs[2].name : ''}</li>
          <li>{this.props.state.dogs[2] ? this.props.state.dogs[2].age : ''}</li>
          <li>{this.props.state.dogs[2] ? this.props.state.dogs[2].breed : ''}</li>
          <li>{this.props.state.dogs[2] ? this.props.state.dogs[2].gender : ''}</li>
          <li>{this.props.state.dogs[2] ? this.props.state.dogs[2].description : ''}</li>
          <li>{this.props.state.dogs[2] ? this.props.state.dogs[2].story : ''}</li>
        </ul>
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
