import React from "react";

export default function Book({ book, onSelect }) {
  return (
    <div
      className={`book-card ${book.selected ? "selected" : ""}`}
      onClick={() => onSelect(book)}
    >
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.price}</p>
      <a href={book.url} target="_blank" rel="noopener noreferrer">Learn more</a>
    </div>
  );
}
