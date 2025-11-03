import React, { useState } from "react";
import Book from "./components/Book";
import dataJSON from "./data/books.json";
import "./App.css";


export default function App() {
  const [books, setBooks] = useState(dataJSON);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    title: "",
    author: "",
    publisher: "",
    year: "",
    language: "",
    pages: "",
  });

  const handleRemove = (isbn13) => {
    setBooks((prev) => prev.filter((book) => book.isbn13 !== isbn13));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false); // just close modal, do nothing else for now
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(to bottom, #faf3e0, #fff)",
      }}
    >
      {/* Header */}
      <header
        style={{
          padding: "50px",
          background: "#a97155",
          color: "white",
          textAlign: "center",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "30px" }}>Vy’s Book Catalog 🫶🏼🐹</h1>
      </header>

      {/* Content */}
     <main style={{ flex: 1, padding: "30px" }}>
  <div style={{ display: "grid", gridTemplateColumns: "250px 1fr", gap: "12px" }}>
    {/* Column 1: Add button */}
    <div
      className="add-button"
      onClick={() => setShowModal(true)}
    >
      + Add
    </div>

    {/* Column 2: Books */}
    <div className="books-grid">
      {books.map((book) => (
        <Book key={book.isbn13} book={book} onRemove={handleRemove} />
      ))}
    </div>
  </div>
</main>

{/* Modal */}
{showModal && (
  <div className="modal-overlay" onClick={() => setShowModal(false)}>
    <form
      className="modal-form"
      onClick={(e) => e.stopPropagation()}
      onSubmit={handleSubmit}
    >
      <h2>Add New Book</h2>
      <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
      <input placeholder="Author" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} required />
      <input placeholder="Publisher" value={form.publisher} onChange={(e) => setForm({ ...form, publisher: e.target.value })} />
      <input placeholder="Publication Year" value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} />
      <input placeholder="Language" value={form.language} onChange={(e) => setForm({ ...form, language: e.target.value })} />
      <input placeholder="Pages" value={form.pages} onChange={(e) => setForm({ ...form, pages: e.target.value })} />
      <button type="submit">Submit</button>
    </form>
  </div>
)}


      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "50px",
          fontSize: "20px",
          background: "#d4a373",
          color: "#fff",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          marginTop: "auto",
        }}
      >
        © {new Date().getFullYear()} Vy’s Book Catalog 🫶🏼🐹
      </footer>

      {/* Modal */}
{showModal && (
  <div className="modal-overlay" onClick={() => setShowModal(false)}>
    <form
      className="modal-form"
      onClick={(e) => e.stopPropagation()}
      onSubmit={handleSubmit}
    >
      <h2>Add New Book</h2>
      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
      />
      <input
        placeholder="Author"
        value={form.author}
        onChange={(e) => setForm({ ...form, author: e.target.value })}
        required
      />
      <input
        placeholder="Publisher"
        value={form.publisher}
        onChange={(e) => setForm({ ...form, publisher: e.target.value })}
      />
      <input
        placeholder="Publication Year"
        value={form.year}
        onChange={(e) => setForm({ ...form, year: e.target.value })}
      />
      <input
        placeholder="Language"
        value={form.language}
        onChange={(e) => setForm({ ...form, language: e.target.value })}
      />
      <input
        placeholder="Pages"
        value={form.pages}
        onChange={(e) => setForm({ ...form, pages: e.target.value })}
      />
      <button type="submit">Submit</button>
    </form>
  </div>
)}
    </div>
  );
}
