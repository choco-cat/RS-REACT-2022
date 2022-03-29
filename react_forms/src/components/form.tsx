import React from 'react';
import Input from './input';

type formElements = {
  inputName: string;
  type?: string;
  ref?: React.RefObject<HTMLInputElement>;
  rule: string;
};

export default class extends React.Component<object> {
  private readonly inputs: Array<formElements>;

  constructor(props: object) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputs = [
      { inputName: 'First Name', rule: 'alpha' },
      { inputName: 'Last Name', rule: 'alpha' },
      { inputName: 'Date of Birth', rule: 'date' },
      { inputName: 'Accept', rule: 'check', type: 'checkbox' },
      { inputName: 'Radio', rule: 'check', type: 'radio' },
      { inputName: 'Radio', rule: 'check', type: 'radio' },
    ];
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log('Submit form!');
    e.preventDefault();
  }

  validationForm(e: React.MouseEvent<HTMLInputElement>): boolean {
    console.log('onClick');
    this.inputs.map((input: formElements) => {
      const checkValue =
        input.type === 'checkbox' || 'radio'
          ? input.ref!.current!.checked
          : input.ref!.current!.value;
      this.validationRule(input.rule, checkValue);
    });
    return true;
  }

  validationRule(rule: string, checkValue: string | boolean) {
    console.log(`validate input ${checkValue} ${rule}`);
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
              type={input.type}
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
