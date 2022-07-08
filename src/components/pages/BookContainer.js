// BookContainer.js

import '../styles/BookContainer.css';
import Book from './Book';

const bookArray = [
  {
    id: 1,
    title: 'The lord of the rings',
    author: 'J R R Tolkien',
  },
  {
    id: 2,
    title: 'Mininos Sabidos',
    author: 'Judá Teixeira',
  },
  {
    id: 3,
    title: 'The Matrix',
    author: 'Wachovsky Brothers',
  },
];

const BookContainer = () => (
  <ul className="book-container">
    {bookArray.map((item) => (
      <Book book={item} key={item.id} />
    ))}
  </ul>
);

export default BookContainer;
