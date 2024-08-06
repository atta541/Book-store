'use client';
import React from 'react';
import BookForm from '../../../components/BookForm';


async function createBook(formData) {
  try {
    const res = await fetch('http://localhost:3001/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    if (!res.ok) {
      throw new Error('Failed to create book');
    }
    return await res.json();
  } catch (error) {
    console.error('Error creating book:', error);
  }
}

export default function NewBookPage() {
  const handleSubmit = async (formData) => {
    await createBook(formData);

  };

  return <BookForm onSubmit={handleSubmit} />;
}
