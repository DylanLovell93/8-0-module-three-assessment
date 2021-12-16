import './movieOptions.css';

const movieOptions = (props) => {
  const movies = props.movies || [];
  const { handleOption } = props;
  const options = movies?.map((movie, i) => (
    <option value={i}>{movie.title}</option>
  ));
  return (
    <div className="movieOptions">
      <select onChange={handleOption}>
        <option value="">{''}</option>
        {options}
      </select>
    </div>
  );
};

export default movieOptions;
