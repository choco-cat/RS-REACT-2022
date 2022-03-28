import React from 'react';
import Header from '../components/header';
import Search from '../components/search';
import Cards from '../components/cards';

type SearchProps = { searchValue: string };

export default class extends React.Component<SearchProps> {
  pageName = 'Home page';
  state = {
    search: '',
  };

  onChangeVal(val: string) {
    this.onChangeVal = this.onChangeVal.bind(this);
    this.setState({ search: val });
  }

  render() {
    return (
      <>
        <Header pageName={this.pageName} />
        <main>
          <Search
            searchValue={this.state.search}
            onChange={(val: string) => this.onChangeVal(val)}
          />
          <Cards />
        </main>
      </>
    );
  }
}
