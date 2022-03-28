import React from 'react';

export default class extends React.Component<object> {
  private readonly inputRef: React.RefObject<HTMLInputElement>;
  constructor(props: object) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputRef = React.createRef();
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('this.input value=' + this.inputRef.current!.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя:
          <input type="text" ref={this.inputRef} />
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}
