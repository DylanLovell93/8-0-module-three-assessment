import './movieInfo.css';

const movieInfo = (props) => {
  const { movie } = props;
  const info = (
    <>
      <h2>{movie.title}</h2>
      <p>{movie.release_date}</p>
      <p>{movie.description}</p>
    </>
  );
  return <div className="movieInfo">{movie && info}</div>;
};

export default movieInfo;
