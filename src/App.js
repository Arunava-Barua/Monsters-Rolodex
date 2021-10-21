import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchBar } from "./components/search/search.component.jsx";
// import { render } from "@testing-library/react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // console.log('Hi');
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    // console.log(filteredMonsters);

    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
        <SearchBar
          placeholder="Search monsters"
          handleChange={this.handleChange}
        ></SearchBar>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
