import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search.component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      Header: "Hello Star War",
      starWars: [],
      searchField: ''
    };
  }
  handleSearch() {
    console.log("Search for: " + this.searchField)
  }

  componentDidMount() {
    console.log("componentDidMount")
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(res => this.setState({ starWars: res.results }));

  }
  // componentDidUpdate() {
  //   console.log("componentDidUpdate")
  //   console.log(this.state.starWars)
  // }

  render() {
    const { starWars, searchField } = this.state;
    const filteredStar = starWars.filter(star => {
      return star.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (
      <div className='App' >
        <h1>{this.state.Header}</h1>
        <SearchBox placeholder="search stars" handleChange={e => {
          this.setState({ searchField: e.target.value },
          );
        }} />

        <CardList stars={filteredStar} />
      </div >
    );
  }
}

export default App;
