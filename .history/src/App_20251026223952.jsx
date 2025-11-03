import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftColumn from "./components/LeftColumn";
import BooksGrid from "./components/BooksGrid";
import AddBookModal from "./components/AddBookModal";
import EditBookModal from "./components/EditBookModal";
import FilterSection from "./components/FilterSection";

export default function App() {
  // Start empty to meet requirement: "The app should be empty of books initially."
  const [books, setBooks] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState("");

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

  // Load books from localStorage on component mount
  useEffect(() => {
    const savedBooks = localStorage.getItem('books');
    if (savedBooks) {
      setBooks(JSON.parse(savedBooks));
    }
  }, []);

  // Save books to localStorage whenever books change
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

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
    const selectedBook = books.find(book => book.selected);
    if (selectedBook) {
      setForm({
        title: selectedBook.title,
        author: selectedBook.author,
        publisher: selectedBook.publisher || "",
        year: selectedBook.year || "",
        language: selectedBook.language || "",
        pages: selectedBook.pages || "",
        coverUrl: selectedBook.coverUrl || "",
      });
      setShowEditModal(true);
    } else {
      alert("Please select a book to edit");
    }
  };

  const handleEditBook = (e) => {
    e.preventDefault();

    const yearNum =
      String(form.year).trim() === "" ? null : Number(String(form.year).trim());
    const pagesNum =
      String(form.pages).trim() === "" ? null : Number(String(form.pages).trim());

    const updatedBook = {
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

    setBooks((prev) =>
      prev.map((book) => (book.selected ? updatedBook : book))
    );

    setForm({
      title: "",
      author: "",
      publisher: "",
      year: "",
      language: "",
      pages: "",
      coverUrl: "",
    });
    setShowEditModal(false);
  };

  const handleAuthorFilterChange = (author) => {
    setSelectedAuthor(author);
  };

  // Get unique authors for filter dropdown
  const authors = [...new Set(books.map(book => book.author))].sort();

  // Filter books based on selected author
  const filteredBooks = selectedAuthor 
    ? books.filter(book => book.author === selectedAuthor)
    : books;

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header title="Vy’s Book Catalog 🫶🐹" />
      <main style={{ flex: 1, padding: "30px" }}>
        <FilterSection
          authors={authors}
          selectedAuthor={selectedAuthor}
          onAuthorFilterChange={handleAuthorFilterChange}
        />
        <div className="main-layout">
          <LeftColumn
            onOpenAdd={() => setShowModal(true)}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
          <BooksGrid books={filteredBooks} onSelect={handleSelect} />
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

      <EditBookModal
        open={showEditModal}
        form={form}
        setForm={setForm}
        onClose={() => setShowEditModal(false)}
        onSubmit={handleEditBook}
      />
    </div>
  );
}
