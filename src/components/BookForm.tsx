import React, { useState, useEffect } from 'react';

interface Book {
  title: string;
  author: string;
  description: string;
}

interface Props {
  initialData?: Book;
  onSubmit: (data: Book) => void;
}

const BookForm: React.FC<Props> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState<Book>({
    title: '',
    author: '',
    description: ''
  });

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input name="title" value={formData.title} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Author:
        <input name="author" value={formData.author} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Save</button>
    </form>
  );
};

export default BookForm;
