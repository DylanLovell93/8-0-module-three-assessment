import './locationInfo.css';
import SingleLocation from './singleLocation/singleLocation';

const locationInfo = (props) => {
  const { showInfo } = props;
  const locations = props.locations || [];
  const info = locations.map((location) => (
    <SingleLocation location={location} />
  ));
  return <div className="locationInfo">{showInfo && info}</div>;
};

export default locationInfo;
