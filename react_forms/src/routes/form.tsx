import React from 'react';
import Header from '../components/header';
import HTMLForm from '../components/form';

export default class extends React.Component {
  pageName = 'Form';

  render() {
    return (
      <>
        <Header pageName={this.pageName} />
        <HTMLForm />
      </>
    );
  }
}
