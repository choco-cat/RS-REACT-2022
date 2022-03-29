import React from 'react';
type formElements = { ref: React.RefObject<HTMLInputElement>; rule: string };

export default class extends React.Component<object> {
  private readonly inputRefFirstName: formElements;
  private readonly inputRefLastName: formElements;
  private readonly inputRefDate: formElements;
  constructor(props: object) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputRefFirstName = { ref: React.createRef(), rule: 'alpha' };
    this.inputRefLastName = { ref: React.createRef(), rule: 'alpha' };
    this.inputRefDate = { ref: React.createRef(), rule: 'date' };
    this.validationForm.bind(this);
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log('Submit form!');
    e.preventDefault();
  }

  validationForm(e: React.MouseEvent<HTMLInputElement>) {
    console.log('onClick');
    console.log('validate inputRefFirstName =' + this.inputRefFirstName.ref.current!.value);
    console.log('validate inputRefLastName=' + this.inputRefLastName.ref.current!.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" ref={this.inputRefFirstName.ref} />
        </label>
        <label>
          Last Name:
          <input type="text" ref={this.inputRefLastName.ref} />
        </label>
        <label>
          Date:
          <input type="text" ref={this.inputRefDate.ref} />
        </label>
        <input
          type="submit"
          value="Отправить"
          onClick={(e: React.MouseEvent<HTMLInputElement>) => this.validationForm(e)}
        />
      </form>
    );
  }
}
