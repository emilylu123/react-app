import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'


class App extends Component {
  constructor() {
    super();
    this.state = {
      Header: "My Favorite Shows",
      showList: [
        {
          title: "Friends",
          id: "tt0108778",
          img: "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
        },
        {
          title: "The Big Bang Theory",
          id: "tt0898266",
          img: "https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_.jpg",
        },
        {
          title: "Mad Man",
          id: "tt0804503",
          img: "https://m.media-amazon.com/images/M/MV5BNTgxNDZlODQtNDcwOC00NWQ5LTljNWMtMDhjY2U5YTUzMTc4XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg",
        },
      ],
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
        <header className="App-header">
          <h1>{this.state.Header}</h1>
          <CardList name={this.state.starWars[1]} >
            {this.state.starWars.map(star => (
              <h4 key={star.name}> {star.name}</h4>
            ))}
          </CardList>
          <button onClick={() => this.setState({ Header: "Hello Star War" })}>Switch</button>
        </header>
      </div>
    );
  }
}

export default App;
