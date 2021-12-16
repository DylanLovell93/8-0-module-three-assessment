import './singleLocation.css';

const singleLocation = (props) => {
  const { location } = props;
  return (
    <div className="singleLocation">
      <h2>{location.name}</h2>
      <h2>{location.climate}</h2>
      <h2>{location.terrain}</h2>
    </div>
  );
};

export default singleLocation;
