// WebHeader.js

import { Link } from 'react-router-dom';
import '../styles/WebHeader.css';

function WebHeader() {
  return (
    <div className="WebHeader">
      <h1 className="HeaderTitle">
        Bookstore
      </h1>
      <ul>
        <li>|</li>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/WebCategories">Categories</Link>
        </li>
        <li>|</li>
      </ul>
    </div>
  );
}

export default WebHeader;
