// src/components/LoanManagement.jsx
import React, { useState } from "react";

export default function LoanManagement({ books, loans, onCreateLoan, onSwitchToBooks }) {
  const [borrower, setBorrower] = useState("");
  const [selectedBookTitle, setSelectedBookTitle] = useState("");
  const [loanPeriod, setLoanPeriod] = useState(1);

  // Get available books (not currently on loan)
  const availableBooks = books.filter(
    (book) => !loans.some((loan) => loan.bookTitle === book.title)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!borrower.trim() || !selectedBookTitle || loanPeriod < 1 || loanPeriod > 4) {
      return;
    }

    onCreateLoan({
      borrower: borrower.trim(),
      bookTitle: selectedBookTitle,
      loanPeriod: Number(loanPeriod),
    });

    // Reset form
    setBorrower("");
    setSelectedBookTitle("");
    setLoanPeriod(1);
  };

  // Calculate due date for a loan
  const calculateDueDate = (loanDate, weeks) => {
    const date = new Date(loanDate);
    date.setDate(date.getDate() + weeks * 7);
    return date.toLocaleDateString();
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", background: "transparent" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
        <h2 style={{ margin: 0, fontSize: "28px", color: "#8b6f47" }}>Loan Management</h2>
        <button
          onClick={onSwitchToBooks}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "10px",
            border: "1px solid #BB6D40",
            background: "#BB6D40",
            color: "#ffffff",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "#9e5b36";
            e.target.style.color = "#ffffff";
            e.target.style.borderColor = "#9e5b36";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "#BB6D40";
            e.target.style.color = "#ffffff";
            e.target.style.borderColor = "#BB6D40";
          }}
        >
          Back to Book Listing
        </button>
      </div>

      {/* Loan Form */}
      {availableBooks.length > 0 ? (
        <form
          onSubmit={handleSubmit}
          style={{
            background: "#fff8ee",
            padding: "24px",
            borderRadius: "12px",
            border: "2px solid #b08968",
            marginBottom: "32px",
          }}
        >
          <h3 style={{ marginTop: 0, marginBottom: "20px", fontSize: "20px", color: "#6b4a2b" }}>
            Create New Loan
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label
                htmlFor="borrower"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "bold",
                  color: "#6b4a2b",
                }}
              >
                Borrower Name:
              </label>
              <input
                type="text"
                id="borrower"
                value={borrower}
                onChange={(e) => setBorrower(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  border: "2px solid #b08968",
                  background: "#fff",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div>
              <label
                htmlFor="book"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "bold",
                  color: "#6b4a2b",
                }}
              >
                Select Book:
              </label>
              <select
                id="book"
                value={selectedBookTitle}
                onChange={(e) => setSelectedBookTitle(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  border: "2px solid #b08968",
                  background: "#fff",
                  color: "#6b4a2b",
                  cursor: "pointer",
                  boxSizing: "border-box",
                }}
              >
                <option value="">-- Select a book --</option>
                {availableBooks.map((book) => (
                  <option key={book.title} value={book.title}>
                    {book.title} by {book.author}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="loanPeriod"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "bold",
                  color: "#6b4a2b",
                }}
              >
                Loan Period (weeks):
              </label>
              <input
                type="number"
                id="loanPeriod"
                value={loanPeriod}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value >= 1 && value <= 4) {
                    setLoanPeriod(value);
                  }
                }}
                min="1"
                max="4"
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  border: "2px solid #b08968",
                  background: "#fff",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                padding: "12px",
                fontSize: "18px",
                fontWeight: "bold",
                borderRadius: "10px",
                border: "1px solid #BB6D40",
                background: "#BB6D40",
                color: "#ffffff",
                cursor: "pointer",
                transition: "all 0.2s ease",
                marginTop: "8px",
              }}
              onMouseOver={(e) => {
                e.target.style.background = "#9e5b36";
                e.target.style.borderColor = "#9e5b36";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "#BB6D40";
                e.target.style.borderColor = "#BB6D40";
              }}
            >
              Create Loan
            </button>
          </div>
        </form>
      ) : (
        <div
          style={{
            background: "#fff8ee",
            padding: "32px",
            borderRadius: "12px",
            border: "2px solid #b08968",
            marginBottom: "32px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "18px", color: "#6b4a2b", margin: 0 }}>
            All books have been borrowed. No books available for loan.
          </p>
        </div>
      )}

      {/* Loaned Books List */}
      <div>
        <h3 style={{ marginTop: 0, marginBottom: "20px", fontSize: "20px", color: "#8b6f47" }}>
          Loaned Books
        </h3>
        {loans.length > 0 ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {loans.map((loan, index) => (
              <div
                key={`${loan.bookTitle}-${loan.borrower}-${index}`}
                style={{
                  background: "#fff8ee",
                  padding: "20px",
                  borderRadius: "12px",
                  border: "2px solid #b08968",
                }}
              >
                <p style={{ margin: "4px 0", fontSize: "16px", color: "#6b4a2b", fontWeight: "bold" }}>
                  <strong>Borrower:</strong> {loan.borrower}
                </p>
                <p style={{ margin: "4px 0", fontSize: "16px", color: "#6b4a2b" }}>
                  <strong>Book:</strong> {loan.bookTitle}
                </p>
                <p style={{ margin: "4px 0", fontSize: "16px", color: "#6b4a2b" }}>
                  <strong>Due Date:</strong> {calculateDueDate(loan.loanDate, loan.loanPeriod)}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              background: "#fff8ee",
              padding: "32px",
              borderRadius: "12px",
              border: "2px solid #b08968",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "18px", color: "#6b4a2b", margin: 0 }}>
              No books are currently on loan.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

