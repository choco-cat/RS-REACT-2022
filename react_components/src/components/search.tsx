import React from 'react';
export default class extends React.Component {
  render() {
    return (
      <form className="form-wrapper" action="/" method="get">
        <input id="search" type="text" placeholder="Search..." name="search" />
        <input type="submit" value="Go!" id="submit" />
      </form>
    );
  }
}
