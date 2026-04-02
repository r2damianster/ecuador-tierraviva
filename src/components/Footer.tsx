import React from 'react';

export default function Footer() {
  return (
    <footer className="footer container">
      <div className="grid-2" style={{ textAlign: "left", marginBottom: "3rem" }}>
        <div>
          <h3 style={{ color: "hsl(var(--color-text-main))" }}>Ecuador Tierra Viva Foundation</h3>
          <p>
            Working to improve the quality of life in Ecuador since our founding. 
            Join us in building a sustainable and culturally rich future.
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <h3 style={{ color: "hsl(var(--color-text-main))" }}>Get in Touch</h3>
          <p>Phone: +593 988 500 314</p>
          <p>Email: info@ecuador-tierraviva.org</p>
          <p>Location: Vicente Ramon Roca E8-18 y 6 de diciembre. 4B</p>
        </div>
      </div>
      <div>
        <p>&copy; {new Date().getFullYear()} Ecuador Tierra Viva Foundation. All rights reserved.</p>
        <p style={{ fontSize: "0.8rem", marginTop: "0.5rem", opacity: 0.5 }}>Archived executed projects preserved for historical record.</p>
      </div>
    </footer>
  );
}
