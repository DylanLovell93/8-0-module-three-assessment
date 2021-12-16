import './navLinks.css';
import { Link } from 'react-router-dom';

const navLinks = () => {
  return (
    <div className="navLinks">
      <ul>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/location">Location</Link>
        </li>
      </ul>
    </div>
  );
};

export default navLinks;
