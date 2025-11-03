import React from "react";

export default function Book({ book, onSelect }) {
  return (
    <div
      className={`book-card ${book.selected ? "selected" : ""}`}
      onClick={() => onSelect(book)}
    >
      <img
        src={book.coverUrl || "https://via.placeholder.com/150?text=Book+Cover"}
        alt={book.title}
      />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      {book.year && <p>{book.year}</p>}
    </div>
  );
}
