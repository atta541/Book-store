
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const BookForm = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState(initialData || {
    title: '',
    author: '',
    publishedDate: '',
    description: ''
  });
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(formData);
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gray-100 h-70 display-center max-w-md mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">{initialData ? 'Edit Book' : 'Add New Book'}</h1>
      <label className="block mb-4">
        <span className="text-gray-700">Title</span>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
          required
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Author</span>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
          required
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Published Date</span>
        <input
          type="date"
          name="publishedDate"
          value={formData.publishedDate}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
          required
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Description</span>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="form-input mt-1 block w-full h-32" // Adjust the height here
          required
        />
      </label>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        {initialData ? 'Update Book' : 'Add Book'}
      </button>
    </form>
  );
};

export default BookForm;
