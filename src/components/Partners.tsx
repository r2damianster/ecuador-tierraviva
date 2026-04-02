import React from 'react';

export default function Partners() {
  const partners = [
    { src: "/images/partners-bookbus.png", alt: "The Book Bus" },
    { src: "/images/partners-ventureco.png", alt: "Venture Co" },
    { src: "/images/partners-bellavista.png", alt: "Bellavista Cloud Forest" },
    { src: "/images/partners-girandula.jpg", alt: "Girandula Project" }
  ];

  return (
    <section id="partners" className="section" style={{ backgroundColor: "hsla(var(--color-bg-surface), 0.3)" }}>
      <div className="container">
        <h2 className="section-title">Our <span className="text-gradient">Partners</span></h2>
        <p className="section-subtitle">
          We are shifting our focus to build strong, lasting relationships with organizational partners. 
          Together, we can achieve more sustainable impact across Ecuador. Join our network of esteemed collaborators.
        </p>

        <div className="glass-panel" style={{ textAlign: "center", padding: "4rem 2rem" }}>
          <h3 style={{ marginBottom: "2rem", fontSize: "1.8rem" }}>Trusted By</h3>
          
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "4rem", alignItems: "center", marginBottom: "3rem" }}>
            {partners.map((p, i) => (
              <img key={i} src={p.src} alt={p.alt} className="partner-logo" />
            ))}
          </div>

          <a href="mailto:info@ecuador-tierraviva.org" className="btn-primary" style={{ padding: "1.2rem 3rem", fontSize: "1.2rem" }}>
            Become a Partner Today
          </a>
        </div>
      </div>
    </section>
  );
}
