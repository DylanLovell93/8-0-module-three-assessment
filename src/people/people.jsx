import { Component } from 'react';
import './people.css';
//import components
import PersonSearch from './personSearch/personSearch';
import PersonInfo from './personInfo/personInfo';

class people extends Component {
  constructor() {
    super();
    this.state = {
      allPeople: '',
      searchResult: '',
      search: '',
    };
  }

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/people')
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          allPeople: data,
        })
      );
  }
  handleInput = (event) => {
    const currentInput = event.target.value;
    this.setState({
      search: currentInput,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { search, allPeople } = this.state;
    const targetPerson = allPeople.find(
      (person) => person.name.toLowerCase() === search.toLowerCase()
    );
    this.setState({
      searchResult: targetPerson,
    });
  };

  render() {
    const { searchResult } = this.state;
    return (
      <div className="people">
        <h1>Select a Movie</h1>
        <PersonSearch
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
        <PersonInfo result={searchResult} />
      </div>
    );
  }
}

export default people;
