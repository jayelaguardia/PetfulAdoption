import React, { Component } from 'react';
import API_ENDPOINT from './config'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      cats: [],
      dogs: [],
      people: [],
      tutorial: true,
      newPerson: ''
      }
  }

  fetchCat = () => {
    fetch(`http://localhost:8000/pets/api/cat`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }}) 
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({cats: data})
      });
  }

  fetchDog = () => {
    fetch(`http://localhost:8000/pets/api/dog`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }}) 
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({dogs: data})
      });
  }

  fetchPeople = () => {
    fetch(`http://localhost:8000/people`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }}) 
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({people: data})
        console.log(this.state)
      });
  }

  removePerson = () => {
    fetch(`http://localhost:8000/people`, {
      method: 'DELETE',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }}) 
      .then((response) => {
        this.fetchPeople()
      })

  }

  addPerson = () => {
    const body = {newPerson: this.state.newPerson}
    fetch(`http://localhost:8000/people`, {
      method: 'POST',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
      body: JSON.stringify(body)
      }) 
      .then((response) => {
        this.fetchPeople()
      })

  }

  tutorialFinished = () => {
    this.setState({
      tutorial: false
    }, this.addPerson())
  }


  componentDidMount(){
    this.fetchCat()
    this.fetchDog()
    this.fetchPeople()
  }


  adoptCat = () => {
    fetch(`http://localhost:8000/pets/api/cat`, {
      method: 'DELETE',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }}) 
      .then((response) => {
        this.fetchCat()

      })
  }

  adoptDog = () => {
    fetch(`http://localhost:8000/pets/api/dog`, {
      method: 'DELETE',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }}) 
      .then((response) => {
        this.fetchDog()
      })
  }

  updateName = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    })
  }

  render() {
    return(
      <main className='App'>
      <h1>ADOPT A PET</h1>
      {this.state.tutorial ? 
        <section>
          <p className='tutorial'>
            You will enter your name.  Then you will wait in line.  Then you
            will adopt as many pets as you can feed.  You will adopt them in the
            order our shelter received them.  Once you are finished, you will
            click "I'm done adopting" and go home and play with them.  Good day.
          </p>
          <form onSubmit={this.tutorialFinished} className="personName">
            <label htmlFor="newPerson">You will input your name.</label>
            <input type="text" name="newPerson" value={this.state.newPerson} onChange={this.updateName} required />

            <button>Yes, I will adopt.</button>
          </form>
          
        </section> :
        '' }

      <section className="petSection">
        
        <div className="catDiv">
          <img src={this.state.cats[0] ? this.state.cats[0].imageURL : ''} alt='a cat'/>
          <ul>
            <li>{this.state.cats[0] ? this.state.cats[0].name : ''}</li>
            <li>{this.state.cats[0] ? this.state.cats[0].age : ''}</li>
            <li>{this.state.cats[0] ? this.state.cats[0].breed : ''}</li>
            <li>{this.state.cats[0] ? this.state.cats[0].gender : ''}</li>
            <li>{this.state.cats[0] ? this.state.cats[0].description : ''}</li>
            <li>{this.state.cats[0] ? this.state.cats[0].story : ''}</li>
          </ul>
          <button disabled={this.state.people[0] !== this.state.newPerson} className="adoptCat" onClick={this.adoptCat}>Adopt Me!</button>
        </div>
        
        <div className="dogDiv">
        <img src={this.state.dogs[0] ? this.state.dogs[0].imageURL : ''} alt='a dog'/>
        <ul>
          <li>{this.state.dogs[0] ? this.state.dogs[0].name : ''}</li>
          <li>{this.state.dogs[0] ? this.state.dogs[0].age : ''}</li>
          <li>{this.state.dogs[0] ? this.state.dogs[0].breed : ''}</li>
          <li>{this.state.dogs[0] ? this.state.dogs[0].gender : ''}</li>
          <li>{this.state.dogs[0] ? this.state.dogs[0].description : ''}</li>
          <li>{this.state.dogs[0] ? this.state.dogs[0].story : ''}</li>
        </ul>
        <button disabled={this.state.people[0] !== this.state.newPerson} className="adoptDog" onClick={this.adoptDog}>Adopt Me!</button>
        </div>
      </section>

      <section>
        <ul>
          {this.state.people ? this.state.people.map(option => <li>{option}</li>) : ''}
        </ul>
        <button className="doneAdopting" onClick={this.removePerson}>I'm done adopting (next person in line)</button>
      </section>

    </main>
    )
  }
}

export default App;