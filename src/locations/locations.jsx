import { Component } from 'react';
import './locations.css';
//import locations
import LocationInfo from './locationInfo/locationInfo';
import LocationButton from './locationButton/locationButton';

class locations extends Component {
  constructor() {
    super();
    this.state = {
      locations: '',
      showInfo: false,
    };
  }

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/locations')
      .then((res) => res.json())
      .then((info) =>
        this.setState({
          locations: info,
        })
      );
  }

  toggleInfo = () => {
    const { showInfo } = this.state;
    this.setState({
      showInfo: !showInfo,
    });
  };

  render() {
    const { locations, showInfo } = this.state;
    return (
      <div className="locations">
        <h1>List of Locations</h1>
        <LocationButton toggleInfo={this.toggleInfo} showInfo={showInfo} />
        <LocationInfo locations={locations} showInfo={showInfo} />
      </div>
    );
  }
}

export default locations;
