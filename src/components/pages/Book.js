// Book.js

import '../styles/Book.css';
import PropTypes from 'prop-types';

const Book = ({ book }) => {
  const { title, author } = book;
  return (
    <li className="book">
      <span className="title">{ title }</span>
      <span className="author">{ author }</span>
      <button type="button">Delete</button>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default Book;
