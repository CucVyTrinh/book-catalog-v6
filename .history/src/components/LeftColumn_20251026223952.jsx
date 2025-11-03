// src/components/LeftColumn.jsx
import React from "react";

export default function LeftColumn({ onOpenAdd, onUpdate, onDelete }) {
  return (
    <div className="left-column">
      <div className="add-button" onClick={onOpenAdd}>+ Add</div>
      <button onClick={onUpdate}>Update</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
