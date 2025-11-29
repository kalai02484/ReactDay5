import React, { use, useEffect, useState } from "react";

const ComA = () => {
  const [items, setitems] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setitems(data);
      console.log(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>Component A - Fetching Data from Fake Store API</h2>

      {items.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
            marginTop: 16,
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #e0e0e0",
                borderRadius: 8,
                padding: 12,
                background: "#fff",
                boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  height: 140,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 8,
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <h3
                style={{
                  fontSize: 14,
                  margin: "8px 0",
                  height: 36,
                  overflow: "hidden",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "#555",
                  height: 40,
                  overflow: "hidden",
                  margin: "6px 0",
                }}
              >
                {item.description}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 8,
                }}
              >
                <strong style={{ color: "#111" }}>${item.price}</strong>
                <button
                  style={{
                    padding: "6px 10px",
                    background: "#1976d2",
                    color: "#fff",
                    border: "none",
                    borderRadius: 4,
                    cursor: "pointer",
                  }}
                >
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ComA;
