// src/components/LeftColumn.jsx
import React from "react";

export default function LeftColumn({ onOpenAdd, onUpdate, onDelete, onLoadSample }) {
  return (
    <div className="left-column" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div className="add-button" onClick={onOpenAdd}>+ Add</div>
      <button onClick={onUpdate}>Update</button>
      <button onClick={onDelete}>Delete</button>
      {/* Optional helper to load books.json into state */}
      {onLoadSample && <button onClick={onLoadSample}>Load sample data</button>}
    </div>
  );
}
