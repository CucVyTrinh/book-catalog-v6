import React, { useState } from "react";
import Book from "./components/Book";
import Modal from "./components/Modal";
import AddForm from "./components/AddForm";
import NewButton from "./components/NewButton";
import data from "./data/books.json";

export default function App() {
  const [books, setBooks] = useState(data);
  const [showModal, setShowModal] = useState(false);

  const addBook = (newBook) => {
    setBooks([...books, { ...newBook, selected: false }]);
    setShowModal(false);
  };

  const toggleSelect = (index) => {
    setBooks(
      books.map((book, i) => ({
        ...book,
        selected: i === index ? !book.selected : false
      }))
    );
  };

  const deleteSelected = () => {
    setBooks(books.filter((book) => !book.selected));
  };

  return (
    <div>
      <h1>Book Catalog</h1>
      <NewButton onClick={() => setShowModal(true)} />
      <button onClick={deleteSelected}>Delete</button>
      <button>Update</button>

      {showModal && (
        <Modal>
          <AddForm addBook={addBook} />
        </Modal>
      )}

      <div className="book-grid">
        {books.map((book, index) => (
          <Book
            key={index}
            book={book}
            onClick={() => toggleSelect(index)}
          />
        ))}
      </div>
    </div>
  );
}
