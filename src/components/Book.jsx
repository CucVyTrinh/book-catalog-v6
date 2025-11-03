// src/components/Book.jsx
import React from "react";

export default function Book({ book, isLoaned, onSelect }) {
  return (
    <div
      className={`book-card ${book.selected ? "selected" : ""} ${isLoaned ? "loaned" : ""}`}
      onClick={() => onSelect(book)}
    >
      {isLoaned && (
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            background: "#6b4a2b",
            color: "#fffaf2",
            padding: "8px 14px",
            borderRadius: "999px",
            fontSize: "14px",
            fontWeight: 800,
            boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
            border: "1px solid rgba(0,0,0,0.08)",
            zIndex: 20,
            pointerEvents: "none",
          }}
        >
          On loan
        </div>
      )}
      <img src={book.coverUrl} alt={book.title} />
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      {book.publisher && <p><strong>Publisher:</strong> {book.publisher}</p>}
      {book.year && <p><strong>Year:</strong> {book.year}</p>}
      {book.language && <p><strong>Language:</strong> {book.language}</p>}
      {book.pages && (
        <p style={{ color: "#4a2c16", fontWeight: "bold" }}>
          <strong>Pages:</strong> {book.pages}
        </p>
      )}
    </div>
  );
}
