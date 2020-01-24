import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <main>
      <p style={{ textAlign: "center", color: "#272727" }}>404 | Not found</p>
      <div style={{ textAlign: "center" }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            lineHeight: "1.2rem",
            color: "#272727",
            borderBottom: "1px solid black"
          }}
        >
          Start over
        </Link>
      </div>
    </main>
  );
};
