import React from 'react';
import Input from './input';

type formElements = { inputName: string; ref: React.RefObject<HTMLInputElement>; rule: string };

export default class extends React.Component<object> {
  private readonly inputs: Array<formElements>;
  constructor(props: object) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    //const inputField = React.useRef() ;
    this.inputs = [
      { inputName: 'inputRefFirstName', ref: React.createRef(), rule: 'alpha' },
      { inputName: 'inputRefLastName', ref: React.createRef(), rule: 'alpha' },
      { inputName: 'inputRefDate', ref: React.createRef(), rule: 'date' },
    ];
    this.validationForm.bind(this);
    this.onChangeRef.bind(this);
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log('Submit form!');
    e.preventDefault();
  }

  validationForm(e: React.MouseEvent<HTMLInputElement>) {
    console.log('onClick');
    this.inputs.map((input: formElements, i: number) => {
      console.log(
        'validate =' + input.inputName + ' ' + input.ref.current!.value + ' ' + input.rule
      );
    });
  }

  onChangeRef(val: React.RefObject<HTMLInputElement>, i: number) {
    this.inputs[i].ref = val;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.inputs.map((input: formElements, i: number) => (
          <div className="card-wrapper" key={i}>
            <Input
              inputName={input.inputName}
              rule={input.rule}
              sendRef={(val: React.RefObject<HTMLInputElement>) => this.onChangeRef(val, i)}
            />
          </div>
        ))}
        <input
          type="submit"
          value="Отправить"
          onClick={(e: React.MouseEvent<HTMLInputElement>) => this.validationForm(e)}
        />
      </form>
    );
  }
}
