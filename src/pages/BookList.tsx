import React, { useEffect, useState } from 'react';
import { getBooks, deleteBook } from '../services/bookService';
import { Link } from 'react-router-dom';

const BookList = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await getBooks();
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteBook(id);
    fetchBooks();
  };

  return (
    <div>
      <h2>Library Books</h2>
      <Link to="/add">Add New Book</Link>
      <ul>
        {books.map((book: any) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
            <Link to={`/edit/${book.id}`}> Edit </Link>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
