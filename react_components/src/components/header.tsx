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
    //const { pageName } = this.props.children.;
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <Link to="/about">About</Link>
          <Link to="/">Home</Link>
          <Link to="/404">Not found</Link>
        </nav>
        <div>{this.props.pageName}</div>
      </header>
    );
  }
}
