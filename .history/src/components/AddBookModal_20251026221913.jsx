// src/components/AddBookModal.jsx
import React from "react";

export default function AddBookModal({ open, form, setForm, onClose, onSubmit }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <form className="modal-form" onClick={(e) => e.stopPropagation()} onSubmit={onSubmit}>
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
          placeholder="Year"
          type="number"
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
          type="number"
          value={form.pages}
          onChange={(e) => setForm({ ...form, pages: e.target.value })}
        />
        <input
          placeholder="Cover URL"
          value={form.coverUrl}
          onChange={(e) => setForm({ ...form, coverUrl: e.target.value })}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
