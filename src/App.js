import React, { Component } from "react";
import Search from "./components/search/search.component.jsx";
import CardList from "./components/card-list/card-list.component";
import { search } from "./utils/search";
import "./App.css";

class App extends Component {
  state = {
    monsters: [],
    searchField: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  handleSearch = ({ currentTarget: input }) => {
    const searchField = input.value;
    this.setState({ searchField });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filtered = search(monsters, searchField);

    return (
      <div>
        <h1>Monsters Rolodex</h1>
        <Search onSearch={this.handleSearch} />
        <CardList monsters={filtered} />
      </div>
    );
  }
}

export default App;
