// src/components/LeftColumn.jsx
import React from "react";

export default function LeftColumn({ onOpenAdd, onUpdate, onDelete, authors, selectedAuthor, onAuthorFilterChange }) {
  return (
    <div className="left-column">
      <div className="filter-section">
        <label htmlFor="author-filter" className="filter-label">
          Filter by Author:
        </label>
        <select
          id="author-filter"
          className="filter-dropdown"
          value={selectedAuthor}
          onChange={(e) => onAuthorFilterChange(e.target.value)}
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
