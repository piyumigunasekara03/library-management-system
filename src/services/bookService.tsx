import axios from 'axios';

const API_URL = 'http://localhost:5000/api/books';

export const getBooks = () => axios.get(API_URL);
export const getBook = (id: number) => axios.get(`${API_URL}/${id}`);
export const addBook = (book: any) => axios.post(API_URL, book);
export const updateBook = (id: number, book: any) => axios.put(`${API_URL}/${id}`, book);
export const deleteBook = (id: number) => axios.delete(`${API_URL}/${id}`);
