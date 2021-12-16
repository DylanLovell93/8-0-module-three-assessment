import './singleLocation.css';

const singleLocation = (props) => {
  const { location } = props;
  return (
    <li className="singleLocation">
      <h2>Name: {location.name}</h2>
      <h2>Climate: {location.climate}</h2>
      <h2>Terrain: {location.terrain}</h2>
    </li>
  );
};

export default singleLocation;
