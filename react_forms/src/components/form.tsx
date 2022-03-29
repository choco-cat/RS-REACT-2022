import React from 'react';

export default class extends React.Component<object> {
  private readonly inputRefFirstname: React.RefObject<HTMLInputElement>;
  private readonly inputRefLastname: React.RefObject<HTMLInputElement>;
  constructor(props: object) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputRefFirstname = React.createRef();
    this.inputRefLastname = React.createRef();
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log('Submit form!');
    console.log('Validation=' + this.inputRefFirstname.current!.value);
    console.log('Validation=' + this.inputRefLastname.current!.value);
    e.preventDefault();
  }

  validationForm(e: React.MouseEvent<HTMLInputElement>) {
    // console.log('Validation=' + this.inputRefFirstname.current!.value);
    /* console.log('Validation=' + this.inputRefLastname.current!.value);
    e.preventDefault(); */
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" ref={this.inputRefFirstname} />
        </label>
        <label>
          Last Name:
          <input type="text" ref={this.inputRefLastname} />
        </label>
        <input type="submit" value="Отправить" onClick={this.validationForm} />
      </form>
    );
  }
}
