// src/components/Header.jsx
import React from "react";

export default function Header({ title }) {
  return (
    <header
      style={{
        padding: "50px",
        background: "#a97155",
        color: "white",
        textAlign: "center",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "30px" }}>{title}</h1>
    </header>
  );
}
