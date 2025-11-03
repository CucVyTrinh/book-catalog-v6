// src/components/BooksGrid.jsx
import React from "react";
import Book from "./Book";

export default function BooksGrid({ books, loans, onSelect }) {
  return (
    <div className="books-grid" style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
      {books.map((book) => {
        const isLoaned = loans.some((loan) => loan.bookTitle === book.title);
        return (
          <Book key={book.title} book={book} isLoaned={isLoaned} onSelect={onSelect} />
        );
      })}
    </div>
  );
}
