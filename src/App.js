import React, { Component } from 'react';
import API_ENDPOINT from './config'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      cats: {},
      dogs: {},
      people: {},
      }
  }

  componentDidMount(){
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

  // lepeople = array => {
  //   return array.map(option => {
  //     return <li>{option ? option : ''}</li>
  //   })
  // }

  // lepeople = this.state.people.map(option => {
  //       return <li>{option ? option : ''}</li>
  //     })


  render() {
    return(
      <main className='App'>
      <h1>ADOPT A PET</h1>
      <section>
        <p className='tutorial'>tutorial page</p>
        <button>tutorial go away</button>
      </section>

      <section>
        <img src={this.state.cats[0] ? this.state.cats[0].imageURL : ''} alt='a cat'/>
        <ul>
          <li>{this.state.cats[0] ? this.state.cats[0].name : ''}</li>
          <li>{this.state.cats[0] ? this.state.cats[0].age : ''}</li>
          <li>{this.state.cats[0] ? this.state.cats[0].breed : ''}</li>
          <li>{this.state.cats[0] ? this.state.cats[0].gender : ''}</li>
          <li>{this.state.cats[0] ? this.state.cats[0].description : ''}</li>
          <li>{this.state.cats[0] ? this.state.cats[0].story : ''}</li>
        </ul>

        <img src={this.state.dogs[0] ? this.state.dogs[0].imageURL : ''} alt='a dog'/>
        <ul>
          <li>{this.state.dogs[0] ? this.state.dogs[0].name : ''}</li>
          <li>{this.state.dogs[0] ? this.state.dogs[0].age : ''}</li>
          <li>{this.state.dogs[0] ? this.state.dogs[0].breed : ''}</li>
          <li>{this.state.dogs[0] ? this.state.dogs[0].gender : ''}</li>
          <li>{this.state.dogs[0] ? this.state.dogs[0].description : ''}</li>
          <li>{this.state.dogs[0] ? this.state.dogs[0].story : ''}</li>
        </ul>
      </section>

      <section>
        <ul>
          {/* {this.state.people ? this.lepeople(this.state.people) : ''} */}
          {this.state.people ? this.state.people.map(option => <li>{option}</li>) : ''}
        </ul>
      </section>

    </main>
    )
  }
}

export default App;