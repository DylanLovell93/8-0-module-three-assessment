import { Component } from 'react';
import './movies.css';
// import Components;
import MovieOptions from './movieOptions/movieOptions';
import MovieInfo from './movieInfo/movieInfo';

class movies extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: '',
      currentMovie: '',
    };
  }

  handleOption = (event) => {
    const movieIndex = event.target.value;
    const { allMovies } = this.state;
    this.setState({
      currentMovie: allMovies[movieIndex] || '',
    });
  };

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then((res) => res.json())
      .then((movies) =>
        this.setState({
          allMovies: movies,
        })
      );
  }

  render() {
    const { allMovies, currentMovie } = this.state;
    return (
      <div className="movies">
        <h1>Select a Movie</h1>
        <MovieOptions movies={allMovies} handleOption={this.handleOption} />
        <MovieInfo movie={currentMovie} />
      </div>
    );
  }
}

export default movies;
