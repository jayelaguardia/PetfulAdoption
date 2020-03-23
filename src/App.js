import React, { Component } from 'react';
import api from './config'
import Landing from './Landing'
import Adoption from './Adoption'
import { Route } from 'react-router-dom'



class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      cats: [],
      dogs: [],
      people: [],
      tutorial: true,
      newPerson: '',
      confirmation: ''
      }
  }

  fetchCat = () => {
    fetch(`${api.API_ENDPOINT}/pets/api/cat`, {
    headers : { 
      'Content-Type': 'application/json'
     }}) 
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({cats: data})
    });
}

  fetchDog = () => {
  fetch(`${api.API_ENDPOINT}/pets/api/dog`, {
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
  fetch(`${api.API_ENDPOINT}/people`, {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }}) 
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({people: data})
    });
}

removePerson = () => {
  fetch(`${api.API_ENDPOINT}/people`, {
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
  fetch(`${api.API_ENDPOINT}/people`, {
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
  this.simulateLine()

}

adoptCat = () => {
  fetch(`${api.API_ENDPOINT}/pets/api/cat`, {
    method: 'DELETE',
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }}) 
    .then((response) => {
      this.setState({
        tutorial: true,
        confirmation: `${this.state.people[0]} has adopted ${this.state.cats[0].name}`
      }, this.fetchCat())
    })
    .then(() => {
      this.removePerson()
    })
}

adoptDog = () => {
  fetch(`${api.API_ENDPOINT}/pets/api/dog`, {
    method: 'DELETE',
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }}) 
    .then((response) => {
      this.setState({
        tutorial: true,
        confirmation: `${this.state.people[0]} has adopted ${this.state.dogs[0].name}`
      }, this.fetchDog())
    })
    .then(() => {
      this.removePerson()
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

  componentDidMount(){
    this.fetchCat()
    this.fetchPeople()
    this.fetchDog()
  }

  simulateLine = () => {
    let linePromise = new Promise((resolve, reject) => {
      setTimeout(this.removePerson, 7000)
    }
      


    //  {
    //   setTimeout((this.state.people.push('testperson')), 5000)
    // }
  }

  propsPassed = {
    fetchCat: this.fetchCat,
    fetchDog: this.fetchDog,
    fetchPeople: this.fetchPeople,
    removePerson: this.removePerson,
    addPerson: this.addPerson,
    tutorialFinished: this.tutorialFinished,
    adoptCat: this.adoptCat,
    adoptDog: this.adoptDog,
    updateName: this.updateName,
    simulateLine: this.simulateLine
  }

  

  render() {
    
    return(
    <>
      <h1 id='top'>ADOPT A PET</h1>  
      <main className='App'>      
        
      <Route exact path='/adoption'>  
        <Adoption propsPassed={this.propsPassed} state={this.state} />
      </Route>

      <Route exact path='/'>
        <Landing propsPassed={this.propsPassed} />
      </Route>

      </main>
    </>
    )
  }
}

export default App;