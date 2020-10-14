import React from 'react';
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header>
        <h1>RESTy</h1>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/history'>History</Link></li>
          <li><Link to='/schedule'>Help</Link></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;