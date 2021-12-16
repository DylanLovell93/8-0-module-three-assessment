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

  handleSubmit = () => {
    const { search, allPeople } = this.state;
    const targetPerson = allPeople.find(
      (person) => person.name.toLowerCase() === search
    );
    this.setState({
      searchResult: targetPerson,
    });
  };

  render() {
    return (
      <div className="people">
        <h1>Select a Movie</h1>
        <PersonSearch />
        <PersonInfo />
      </div>
    );
  }
}

export default people;
