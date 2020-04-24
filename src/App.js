import React, { Component } from 'react';
import api from './config'
import Landing from './Landing'
import Adoption from './Adoption'
import { Route, Link } from 'react-router-dom'


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      cats: [],
      dogs: [],
      people: [],
      tutorial: true,
      newPerson: '',
      confirmation: '',
      inFront: 0
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

addRandomPerson = () => {
  let randos = ['Elvis Presley', 'George Washington', 'Ben Franklin', 'Faker', 'Gimli', 'Bilbo Baggins', 'Gandalf', 'Your 3rd Grade Teacher']
  let randoRando = Math.floor(Math.random() * 8);
  
  let newRando = randos[randoRando]
  console.log(newRando)
  const body = {newPerson: newRando}
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
  this.simulateNewCustomers()

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
        confirmation: `${this.state.people[0]} has adopted ${this.state.cats[0].name}`
      }, this.fetchCat())
    })
    .then(() => {
      this.removePerson()
    })
}

adoptCatUser = () => {
  this.adoptCat()
  this.setState({
    tutorial: true
  })
  window.scrollTo(0, 0)
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
        confirmation: `${this.state.people[0]} has adopted ${this.state.dogs[0].name}`
      }, this.fetchDog())
    })
    .then(() => {
      this.removePerson()
    })
}

adoptDogUser = () => {
  this.adoptDog()
  this.setState({
    tutorial: true
  })
  window.scrollTo(0, 0)
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
    this.setState({
      newPerson: ''
    })
  }


  simulateNewCustomers = () => {
    setTimeout(this.simulateLine, 5000)
    
  }

  simulateLine = () => {
    
    if(this.state.people.indexOf(this.state.newPerson) === -1) {
      return this.setState({
        newPerson: '',
        tutorial: true
      })

    }
    if(this.state.people[0] !== this.state.newPerson) {
      let flippedCoin = Math.floor(Math.random() * 2) + 1;
      if(flippedCoin === 1) {
        this.adoptCat()
      } else {this.adoptDog()}
      setTimeout(this.simulateLine, 5000)
    }
    if (this.state.people[0] === this.state.newPerson && this.state.people.length < 6) {
      this.addRandomPerson()
      setTimeout(this.simulateLine, 5000)
    }
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
    simulateLine: this.simulateLine,
    adoptCatUser: this.adoptCatUser,
    adoptDogUser: this.adoptDogUser
  }

  

  render() {
    
    return(
    <>
      <Link to="/"><h1 id='top' >ADOPT A PET</h1></Link>  
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