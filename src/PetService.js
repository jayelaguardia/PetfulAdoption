import api from './config'


const PetService = {
  
  fetchCat () {
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
},

  fetchDog () {
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
},

fetchPeople () {
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
},

removePerson () {
  fetch(`${api.API_ENDPOINT}/people`, {
    method: 'DELETE',
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }}) 
    .then((response) => {
      this.fetchPeople()
    })

},


addPerson () {
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

},

tutorialFinished () {
  this.setState({
    tutorial: false
  }, this.addPerson())

},

adoptCat () {
  fetch(`${api.API_ENDPOINT}/pets/api/cat`, {
    method: 'DELETE',
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }}) 
    .then((response) => {
      this.fetchCat()

    })
},

adoptDog () {
  fetch(`${api.API_ENDPOINT}/pets/api/dog`, {
    method: 'DELETE',
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }}) 
    .then((response) => {
      this.fetchDog()
    })
},

updateName (event) {
  event.preventDefault();
  const target = event.target;
  const name = target.name;
  const value = target.value;
  this.setState({
    [name]: value,
  })
}
}

export default PetService;