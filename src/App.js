import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component.jsx';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      assassins: [],
      searchField: ''
    }
    
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({assassins: users}));
  }

  // Arrow functions have lexical scoping.
  handleChange = (event) => {
    // This throws an arrow as 'this' is undefined. Why is it not referencing the class state.
    // The reason is JS doesn't set the scope of 'this' on functions. You have explicitely set the context you want this to refer to.
    // To remedy this, you can store this.handleChange in the class constructor and bind it to 'this' which refers to the class component.
    this.setState({searchField: event.target.value});
  }

  render() {
    const { assassins, searchField } = this.state;
    const filteredAssassins = assassins.filter(assassin =>
      assassin.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      
      <div className="App">
        <h1>Galactic <span>Assassin</span> Directory</h1>
        <SearchBox placeholder="search assassins" handleChange={this.handleChange}/>
        <CardList assassins={filteredAssassins}/>
      </div>
    );
  }
}

export default App;
