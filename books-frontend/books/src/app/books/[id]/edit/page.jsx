


'use client'; 
import React from 'react';
import BookForm from '@/components/BookForm';

async function fetchBook(id) {
  try {
    const res = await fetch(`http://localhost:3001/books/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch');
    }
    return await res.json();
  } catch (error) {
    console.error('Error fetching book:', error);
    return null;
  }
}

async function updateBook(id, formData) {
  try {
    const res = await fetch(`http://localhost:3001/books/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    if (!res.ok) {
      throw new Error('Failed to update book');
    }
    return await res.json();
  } catch (error) {
    console.error('Error updating book:', error);
  }
}

export default async function EditBookPage({ params }) {
  const { id } = params;
  const book = await fetchBook(id);

  const handleSubmit = async (formData) => {
    await updateBook(id, formData);
    // Redirect to home or book list page
  };

  if (!book) {
    return <p>Book not found.</p>;
  }

  return <BookForm initialData={book} onSubmit={handleSubmit} />;
}
