// src/components/BooksGrid.jsx
import React from "react";
import Book from "./Book";

export default function BooksGrid({ books, onSelect }) {
  return (
    <div className="books-grid" style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
      {books.map((book) => (
        <Book key={book.title} book={book} onSelect={onSelect} />
      ))}
    </div>
  );
}
