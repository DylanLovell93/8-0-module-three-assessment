import './navIcon.css';
import { Link } from 'react-router-dom';
const navIcon = () => {
  const icon = 'https://puu.sh/IwHq7.png';
  return (
    <div className="navIcon">
      <Link to="/">
        <img src={icon} />
      </Link>
    </div>
  );
};
export default navIcon;
