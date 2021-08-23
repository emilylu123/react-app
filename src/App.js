import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'


class App extends Component {
  constructor() {
    super();
    this.state = {
      Header: "Hello Star War",
      starWars: [],
    };
  }

  componentDidMount() {
    console.log("componentDidMount")
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(res => this.setState({ starWars: res.results }));

  }
  componentDidUpdate() {
    console.log("componentDidUpdate")
    console.log(this.state.starWars)
  }

  render() {
    return (
      <div className='App'>
        <h1>{this.state.Header}</h1>
        <CardList stars={this.state.starWars} />
      </div>
    );
  }
}

export default App;
