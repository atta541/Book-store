'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

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

async function deleteBook(id) {
  try {
    const res = await fetch(`http://localhost:3001/books/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      throw new Error('Failed to delete');
    }
    alert('Book deleted successfully');
    window.location.href = '/'; 
  } catch (error) {
    console.error('Error deleting book:', error);
    alert('Failed to delete book');
  }
}

export default function BookDetailPage({ params }) {
  const { id } = params;
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadBook() {
      try {
        const data = await fetchBook(id);
        setBook(data);
      } catch (error) {
        setError('Failed to load book');
      } finally {
        setLoading(false);
      }
    }
    loadBook();
  }, [id]);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!book) return <p className="text-center text-red-500">Book not found.</p>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen w-full">
      <div className="max-w-7xl w-full bg-white shadow-lg rounded-lg p-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-extrabold mb-4 text-gray-800">
              <strong>Title:</strong> {book.title}
            </h1>
            <div className="flex flex-col sm:flex-row sm:justify-start mb-4">
              <p className="text-gray-800 text-lg mb-2 sm:mb-0 sm:mr-4">
                <strong>Author:</strong> {book.author}
              </p>
              <p className="text-gray-800 text-lg mb-2">
                <strong>Published Date:</strong> {new Date(book.publishedDate).toDateString()}
              </p>
            </div>
            <p className="text-gray-800 text-lg mb-6">
              <strong>Description:</strong> {book.description}
            </p>
          </div>
          <div className="self-start flex space-x-4">
            <Link href={`/books/${book._id}/edit`}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300">
                Edit
              </button>
            </Link>
            <button 
              onClick={() => deleteBook(book._id)} 
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
