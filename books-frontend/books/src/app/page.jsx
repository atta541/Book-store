import React from 'react';
import BookList from '../components/BookList';

async function fetchBooks() {
  try {
    const res = await fetch('http://localhost:3001/books', {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error('Failed to fetch');
    }
    return await res.json();
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
}

export default async function Home() {

  const books = await fetchBooks();
  return <BookList books={books} />;
}
