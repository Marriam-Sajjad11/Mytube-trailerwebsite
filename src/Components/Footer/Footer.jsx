import React from 'react';
import './Footer.css'
function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Shifa Ashfaq. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;