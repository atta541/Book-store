
import React from 'react';
import Link from 'next/link';

const BookList = ({ books }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Book List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book._id}
            className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col items-center text-center"
          >
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/books/${book._id}`} className="text-blue-600 hover:underline">
                {book.title}
              </Link>
            </h2>
            <p className="text-gray-700 mb-2">
              <strong>Author:</strong> {book.author}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Published Date:</strong> {new Date(book.publishedDate).toDateString()}
            </p>
            <p className="text-gray-700 mb-4 line-clamp-3">
              <strong>Description:</strong> {book.description}
            </p>
            <Link href={`/books/${book._id}`}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mt-4">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
