
```markdown
# Book Management System

## Overview

The **Book Management System** is a full-stack application designed to manage a collection of books. It features a RESTful API built with NestJS and a modern frontend developed with Next.js. The application uses MongoDB for data persistence and provides a user-friendly interface for managing book records.

## Features

### Backend (NestJS)
- **CRUD Operations**: Create, Read, Update, and Delete books.
- **Validation**: Ensures data integrity with `class-validator`.
- **Database Integration**: Uses Mongoose to interface with MongoDB.

### Frontend (Next.js)
- **Pages**:
  - List all books
  - View details of a single book
  - Form for creating new books
  - Form for editing existing books
- **API Integration**: Fetches data from the NestJS backend.
- **Styling**: Utilizes Tailwind CSS for a responsive design.

## Setup and Installation

### Backend Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/atta541/Book-store.git
   cd Book-store/books-api
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the `books-api` directory with the following content:

   ```env
   MONGO_URI=mongodb://localhost:27017/library
   ```

4. **Run the Application**

   ```bash
   npm start
   ```

   The backend server will be available at `http://localhost:3001`.

### Frontend Setup

1. **Navigate to the Frontend Directory**

   ```bash
   cd ../books-frontend/books
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env.local` file in the `books` directory with the following content:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

4. **Run the Application**

   ```bash
   npm run dev
   ```

   The frontend application will be available at `http://localhost:3000`.

## API Endpoints

### Books API

- `GET /books` - Retrieve a list of all books.
- `GET /books/:id` - Retrieve a single book by ID.
- `POST /books` - Create a new book.
- `PUT /books/:id` - Update an existing book by ID.
- `DELETE /books/:id` - Delete a book by ID.

## Acknowledgments

- **NestJS** - A progressive Node.js framework.
- **Next.js** - A React framework for production.
- **MongoDB** - A NoSQL database.
- **Mongoose** - MongoDB object modeling tool.
- **Tailwind CSS** - A utility-first CSS framework.
```


## Screenshots

![Screenshot 1](https://github.com/atta541/Book-store/blob/main/Screenshot%202024-08-07%20031042.png)
![Screenshot 2](https://github.com/atta541/Book-store/blob/main/Screenshot%202024-08-07%20031056.png)
![Screenshot 3](https://github.com/atta541/Book-store/blob/main/Screenshot%202024-08-07%20031111.png)

