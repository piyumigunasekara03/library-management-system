import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../services/bookService';
import BookForm from '../components/BookForm';

const AddBook = () => {
  const navigate = useNavigate();

  const handleSubmit = async (bookData: any) => {
    await addBook(bookData);
    navigate('/');
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <BookForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddBook;
