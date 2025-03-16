"use client";
export default function Footer() {
    return (
      <footer className="footer">
        <p>&copy; 2025 Mi Sitio Web</p>
  
        <style jsx>{`
          .footer {
            position: fixed;
            bottom: 0;
            width: 100%;
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1rem 0;
          }
        `}</style>
      </footer>
    );
  }
  