import { Component } from 'react';
import './nav.css';

//import components
import NavLinks from './navLinks/navLinks';
import NavIcon from './navIcon/navIcon';

class nav extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav className="nav">
        <NavIcon />
        <NavLinks />
      </nav>
    );
  }
}

export default nav;
