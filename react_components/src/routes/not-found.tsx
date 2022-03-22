import React from 'react';
import Header from '../components/header';

export default class extends React.Component {
  render() {
    return (
      <header className="App-header">
        <Header />
        <div>Not found</div>
      </header>
    );
  }
}
