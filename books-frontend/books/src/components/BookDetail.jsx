import React from 'react';

const BookDetail = ({ book }) => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-900">{book.title}</h1>
        <p className="text-lg text-gray-700 mb-2"><strong>Author:</strong> {book.author}</p>
        <p className="text-lg text-gray-700 mb-4"><strong>Published Date:</strong> {new Date(book.publishedDate).toDateString()}</p>
        <p className="text-lg text-gray-700"><strong>Description:</strong> {book.description}</p>
      </div>
    </div>
  );
};

export default BookDetail;
