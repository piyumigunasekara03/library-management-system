import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBook, updateBook } from '../services/bookService';
import BookForm from '../components/BookForm';

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await getBook(Number(id));
      setInitialData(response.data);
    };
    fetchBook();
  }, [id]);

  const handleSubmit = async (updatedBook: any) => {
    await updateBook(Number(id), updatedBook);
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Book</h2>
      {initialData ? <BookForm initialData={initialData} onSubmit={handleSubmit} /> : <p>Loading...</p>}
    </div>
  );
};

export default EditBook;
