import React from 'react';
import PropTypes from 'prop-types';
type onChangeFunction = (val: string) => void;
type SearchProps = { searchValue: string; onChange: onChangeFunction };

export default class extends React.Component<SearchProps> {
  static defaultProps = {
    searchValue: '',
  };

  static propTypes = {
    searchValue: PropTypes.string,
    onChange: PropTypes.func,
  };

  state = {
    search: '',
  };

  componentDidMount() {
    const searchValue = localStorage.getItem('search') || '';
    this.setValue = this.setValue.bind(this);
    this.setValue(searchValue);
  }

  componentWillUnmount() {
    localStorage.setItem('search', this.state.search);
  }

  setValue(val: string) {
    this.setState({ search: val });
    this.props.onChange(val);
  }

  render() {
    return (
      <form className="form-wrapper" action="/" method="get">
        <input
          id="search"
          type="text"
          placeholder="Search..."
          name="search"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setValue(e.target.value)}
          onBlur={(e: React.ChangeEvent<HTMLInputElement>) => this.setValue(e.target.value)}
          defaultValue={this.state.search}
        />
        <input type="submit" value="Go!" id="submit" />
      </form>
    );
  }
}
