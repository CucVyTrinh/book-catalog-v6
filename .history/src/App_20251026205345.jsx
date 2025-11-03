// src/App.jsx
import React, { useState } from "react";
import "./App.css";
import bookSeed from "./data/books.json";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftColumn from "./components/LeftColumn";
import BooksGrid from "./components/BooksGrid";
import AddBookModal from "./components/AddBookModal";

export default function App() {
  // 👉 Start EMPTY to satisfy “no books initially”
  const [books, setBooks] = useState([]); 
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    title: "",
    author: "",
    image: "https://via.placeholder.com/150",
    url: "#",
    price: "$0.00",
  });

  const handleSelect = (clickedBook) => {
    setBooks((prev) =>
      prev.map((b) =>
        b.title === clickedBook.title
          ? { ...b, selected: !b.selected }
          : { ...b, selected: false }
      )
    );
  };

  const handleDelete = () => {
    setBooks((prev) => prev.filter((b) => !b.selected));
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    setBooks((prev) => [...prev, { ...form, selected: false }]);
    setForm({
      title: "",
      author: "",
      image: "https://via.placeholder.com/150",
      url: "#",
      price: "$0.00",
    });
    setShowModal(false);
  };

  const handleUpdate = () => {
    alert("Update button clicked (no-op)");
  };


  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header title="Vy’s Book Catalog 🫶🐹" />
      <main style={{ flex: 1, padding: "30px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "250px 1fr", gap: "12px" }}>
          <LeftColumn
            onOpenAdd={() => setShowModal(true)}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            onLoadSample={handleLoadSample} // remove this prop if you don’t want the button
          />
          <BooksGrid books={books} onSelect={handleSelect} />
        </div>
      </main>
      <Footer />

      <AddBookModal
        open={showModal}
        form={form}
        setForm={setForm}
        onClose={() => setShowModal(false)}
        onSubmit={handleAddBook}
      />
    </div>
  );
}
