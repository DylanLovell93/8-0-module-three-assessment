import './locationButton.css';

const locationButton = (props) => {
  const { toggleInfo, showInfo } = props;
  console.log(props.toggleInfo);
  return (
    <div className="locationButton">
      <button onClick={toggleInfo}>
        {showInfo ? 'Hide Locations' : 'Show Locations'}
      </button>
    </div>
  );
};

export default locationButton;
