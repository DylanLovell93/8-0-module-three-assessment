import { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

//Import components
import Nav from './nav/nav';
import Home from './home/home';
import Movies from './movies/movies';
import Locations from './locations/locations';
import People from './people/people';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/locations">
            <Locations />
          </Route>
          <Route path="/people">
            <People />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
