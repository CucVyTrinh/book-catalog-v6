// src/components/FilterSection.jsx
import React from "react";

export default function FilterSection({ authors, selectedAuthor, onAuthorFilterChange }) {
  return (
    <div className="filter-section-horizontal">
      <label htmlFor="author-filter" className="filter-label-horizontal">
        Filter by Author:
      </label>
      <select
        id="author-filter"
        className="filter-dropdown-horizontal"
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
  );
}
