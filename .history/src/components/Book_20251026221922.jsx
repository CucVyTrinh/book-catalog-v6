// src/components/Book.jsx
import React from "react";

export default function Book({ book, onSelect }) {
  return (
    <div
      className={`book-card ${book.selected ? "selected" : ""}`}
      onClick={() => onSelect(book)}
    >
      <img src={book.coverUrl} alt={book.title} />
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      {book.publisher && <p><strong>Publisher:</strong> {book.publisher}</p>}
      {book.year && <p><strong>Year:</strong> {book.year}</p>}
      {book.language && <p><strong>Language:</strong> {book.language}</p>}
      {book.pages && <p><strong>Pages:</strong> {book.pages}</p>}
    </div>
  );
}
