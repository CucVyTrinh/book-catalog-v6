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
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />
        <input
          placeholder="Book URL"
          value={form.url}
          onChange={(e) => setForm({ ...form, url: e.target.value })}
        />
        <input
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
