import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftColumn from "./components/LeftColumn";
import BooksGrid from "./components/BooksGrid";
import AddBookModal from "./components/AddBookModal";
import EditBookModal from "./components/EditBookModal";

export default function App() {
  // Start empty to meet requirement: "The app should be empty of books initially."
  const [books, setBooks] = useState([]);

  const [showModal, setShowModal] = useState(false);

  // Form matches the required fields in your screenshot
  const [form, setForm] = useState({
    title: "",
    author: "",
    publisher: "",
    year: "",
    language: "",
    pages: "",
    coverUrl: "",
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

    const yearNum =
      String(form.year).trim() === "" ? null : Number(String(form.year).trim());
    const pagesNum =
      String(form.pages).trim() === "" ? null : Number(String(form.pages).trim());

    const newBook = {
      title: form.title.trim(),
      author: form.author.trim(),
      publisher: form.publisher.trim(),
      year: yearNum,
      language: form.language.trim(),
      pages: pagesNum,
      coverUrl:
        form.coverUrl?.trim() || "https://via.placeholder.com/150?text=Book+Cover",
      selected: false,
    };

    setBooks((prev) => [...prev, newBook]);

    setForm({
      title: "",
      author: "",
      publisher: "",
      year: "",
      language: "",
      pages: "",
      coverUrl: "",
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
