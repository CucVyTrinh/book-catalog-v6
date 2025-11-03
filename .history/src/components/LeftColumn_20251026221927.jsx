// src/components/LeftColumn.jsx
import React from "react";

export default function LeftColumn({ onOpenAdd, onUpdate, onDelete, authors, selectedAuthor, onAuthorFilterChange }) {
  return (
    <div className="left-column" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div style={{ marginBottom: "8px" }}>
        <label htmlFor="author-filter" style={{ display: "block", marginBottom: "4px", fontWeight: "bold" }}>
          Filter by Author:
        </label>
        <select
          id="author-filter"
          value={selectedAuthor}
          onChange={(e) => onAuthorFilterChange(e.target.value)}
          style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
        >
          <option value="">All Authors</option>
          {authors.map((author) => (
            <option key={author} value={author}>
              {author}
            </option>
          ))}
        </select>
      </div>
      <div className="add-button" onClick={onOpenAdd}>+ Add</div>
      <button onClick={onUpdate}>Update</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
