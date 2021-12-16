import './personSearch.css';

const personSearch = (props) => {
  const { handleSubmit, handleInput } = props;
  return (
    <div className="personSearch">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Find Your Person"
          onChange={handleInput}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default personSearch;
