import { Link } from 'react-router-dom';
import React from 'react';

export default function NotFound() {
  return (
    <div>
      <div>Page not found</div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
        <Link to="/404">Not found</Link>
      </nav>
    </div>
  );
}
