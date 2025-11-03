// src/components/LeftColumn.jsx
import React from "react";

export default function LeftColumn({ onOpenAdd, onUpdate, onDelete }) {
  return (
    <div className="left-column" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div className="add-button" onClick={onOpenAdd}>+ Add</div>
      <button onClick={onUpdate}>Update</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
