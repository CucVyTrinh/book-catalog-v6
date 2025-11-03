import React, { useState } from "react";
import Book from "./components/Book";
import dataJSON from "./data/books.json";
import "./App.css";

export default function App() {
  const [books, setBooks] = useState(
    dataJSON.map((b) => ({ ...b, selected: false }))
  );
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    title: "",
    author: "",
    image: "https://via.placeholder.com/150",
    url: "#",
    price: "$0.00",
  });

  // Select a book (only one selected at a time)
  const handleSelect = (clickedBook) => {
    setBooks(
      books.map((b) =>
        b.title === clickedBook.title
          ? { ...b, selected: !b.selected }
          : { ...b, selected: false }
      )
    );
  };

  // Delete selected book
  const handleDelete = () => {
    setBooks(books.filter((b) => !b.selected));
  };

  // Add book from modal form
  const handleAddBook = (e) => {
    e.preventDefault();
    setBooks([...books, { ...form, selected: false }]);
    setForm({ title: "", author: "", image: "https://via.placeholder.com/150", url: "#", price: "$0.00" });
    setShowModal(false);
  };

  // Update button no-op
  const handleUpdate = () => {
    alert("Update button clicked (no-op)");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ padding: "50px", background: "#a97155", color: "white", textAlign: "center", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
        <h1 style={{ margin: 0, fontSize: "30px" }}>Vy’s Book Catalog 🫶🐹</h1>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "30px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "250px 1fr", gap: "12px" }}>
         <div className="left-column" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
  <div className="add-button" onClick={() => setShowModal(true)}>+ Add</div>
  <button onClick={handleUpdate}>Update</button>
  <button onClick={handleDelete}>Delete</button>
</div>

          {/* Right column: Book cards */}
          <div className="books-grid" style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {books.map((book) => (
              <Book key={book.title} book={book} onSelect={handleSelect} />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "50px", fontSize: "20px", background: "#d4a373", color: "#fff", borderTopLeftRadius: "20px", borderTopRightRadius: "20px", marginTop: "auto" }}>
        © {new Date().getFullYear()} Vy’s Book Catalog 🫶🐹
      </footer>

      {/* Add Book Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)} style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <form onClick={(e) => e.stopPropagation()} onSubmit={handleAddBook} style={{ background: "#fff", padding: "20px", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <h2>Add New Book</h2>
            <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
            <input placeholder="Author" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} required />
            <input placeholder="Image URL" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
            <input placeholder="Book URL" value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} />
            <input placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
            <button type="submit">Add Book</button>
          </form>
        </div>
      )}
    </div>
  );
}
