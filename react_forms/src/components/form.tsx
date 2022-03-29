import React from 'react';
import Input from './input';
type formElements = { inputName: string; ref: React.RefObject<HTMLInputElement>; rule: string };
type InputProps = { inputName: string; ref: React.RefObject<HTMLInputElement>; rule: string };

export default class extends React.Component<InputProps> {
  private readonly inputs: Array<formElements>;
  constructor(props: InputProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    //const inputField = React.useRef() ;
    this.inputs = [
      { inputName: 'inputRefFirstName', ref: React!.createRef(), rule: 'alpha' },
      { inputName: 'inputRefLastName', ref: React.createRef(), rule: 'alpha' },
      { inputName: 'inputRefDate', ref: React.createRef() as React.RefObject<HTMLInputElement>, rule: 'date' },
    ];
    this.validationForm.bind(this);
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log('Submit form!');
    e.preventDefault();
  }

  validationForm(e: React.MouseEvent<HTMLInputElement>) {
    console.log('onClick');
    console.log('validate inputRefFirstName =' + this.inputs[0].ref.current!.value);
    console.log('validate inputRefLastName=' + this.inputs[1].ref.current!.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input inputName={this.inputs[0].inputName} ref={this.inputs[0].ref} rule={this.inputs[0].rule} />
        <input ref={this.inputs[0].ref} />
        <Input inputName={this.inputs[1].inputName} ref={this.inputs[1].ref} rule={this.inputs[1].rule} />
        <input
          type="submit"
          value="Отправить"
          onClick={(e: React.MouseEvent<HTMLInputElement>) => this.validationForm(e)}
        />
      </form>
    );
  }
}
