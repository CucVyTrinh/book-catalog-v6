// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "50px",
        fontSize: "20px",
        background: "#d4a373",
        color: "#fff",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
        marginTop: "auto",
      }}
    >
      © {new Date().getFullYear()} Vy’s Book Catalog 🫶🐹
    </footer>
  );
}
