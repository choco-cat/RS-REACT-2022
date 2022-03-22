import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import React from 'react';

export default class extends React.Component {
  render() {
    return (
      <>
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <Link to="/about">About</Link>
          <Link to="/">Home</Link>
          <Link to="/404">Not found</Link>
        </nav>
      </>
    );
  }
}
