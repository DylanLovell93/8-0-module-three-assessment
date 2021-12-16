import './personInfo.css';

const personInfo = (props) => {
  const { result } = props;
  const error = <h2>Not Found</h2>;
  const info = (
    <>
      <h2>{result?.name}</h2>
      <h2>{result?.age}</h2>
      <h2>{result?.gender}</h2>
    </>
  );
  return (
    <div className="personInfo">{result !== '' && (result ? info : error)}</div>
  );
};

export default personInfo;
