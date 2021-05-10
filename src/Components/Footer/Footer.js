import React from 'react';
import "./footer.css";

export default function Footer() {
      const year = new Date().getFullYear();
      return (
            <div className="footer">
                  <p>&copy; Design by Pini Shteren in Israel {year} </p>
            </div>
      )
}
