import { Link } from 'react-router-dom';
import React from 'react';

export default function About() {
  return (
    <div>
      <div>ABOUT</div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
        <Link to="/404">Not found</Link>
      </nav>
    </div>
  );
}
