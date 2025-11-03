import React, { useState } from "react";

export default function Book({ book }) {
  const [selected, setSelected] = useState(false);

  return (
    <div
      onClick={() => setSelected(!selected)}
      style={{
        width: "220px",
        height: "360px",
        borderRadius: "16px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        background: selected ? "#ffe0b3" : "#fdf6f0",
        boxShadow: selected
          ? "0 0 0 3px #b08968"
          : "0 4px 8px rgba(0,0,0,0.08)",
        cursor: "pointer",
        position: "relative",
      }}
    >
      <img
        src={book.image}
        alt={book.title}
        style={{ maxWidth: "100%", maxHeight: "200px", objectFit: "contain" }}
      />
      <h3 style={{ fontSize: "15px", fontWeight: "bold", textAlign: "center" }}>
        {book.title}
      </h3>
      <p style={{ fontSize: "13px", color: "#8b6f47" }}>{book.price}</p>
      <a
        href={book.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: "13px",
          background: "#b08968",
          color: "white",
          padding: "6px 10px",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        Learn more
      </a>
    </div>
  );
}
