import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <div className="text-white text-xl font-bold">
          <Link href="/">Bookstore</Link>
        </div>
        <div className="ml-8 space-x-4">
          <Link href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
            Home
          </Link>
          <Link href="/books/new" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
            Add Books
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
