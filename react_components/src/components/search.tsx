import React from 'react';
export default class extends React.Component {
  render() {
    return (
      <form action="/" method="get">
        <input type="text" placeholder="Search..." name="search" />
        <button type="submit">Search</button>
      </form>
    );
  }
}
