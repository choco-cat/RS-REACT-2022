import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
type MyProps = { pageName: string };
type MyState = { state: string };

export default class extends React.Component<MyProps, MyState> {
  static propTypes = {
    pageName: PropTypes.string,
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <Link to="/about">About</Link>
          <Link to="/">Home</Link>
        </nav>
        <div>{this.props.pageName}</div>
      </header>
    );
  }
}
