import React from 'react';
import Header from '../components/header';

export default class extends React.Component {
  pageName = 'Page not found';
  render() {
    return <Header pageName={this.pageName} />;
  }
}
