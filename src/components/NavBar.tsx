import React from 'react';

export default function NavBar() {
  return (
    <nav className="navbar">
      <a href="#" className="nav-logo">
        <span style={{ color: "hsl(var(--color-primary))" }}>Ecuador</span> Tierra Viva
      </a>
      <div style={{ display: "flex", gap: "1rem" }}>
        <a href="#festiartes" className="btn-secondary" style={{ padding: "0.5rem 1.5rem", fontSize: "0.9rem" }}>Current Project</a>
        <a href="#partners" className="btn-primary" style={{ padding: "0.5rem 1.5rem", fontSize: "0.9rem" }}>Become a Partner</a>
      </div>
    </nav>
  );
}
