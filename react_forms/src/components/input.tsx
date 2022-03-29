import React from 'react';
type InputProps = { inputName: string; ref?: React.RefObject<HTMLInputElement>; rule: string };

export default class extends React.Component<InputProps> {
  private input: InputProps;

  constructor(props: InputProps) {
    super(props);
    this.input = { inputName: this.props.inputName, ref: this.props.ref, rule: this.props.rule };
    /* this.inputs = [
       { ref: React.createRef(), refName: 'inputRefFirstName', rule: 'alpha' },
       { ref: React.createRef(), refName: 'inputRefLastName', rule: 'alpha' },
       { ref: React.createRef(), refName: 'inputRefDate', rule: 'date' },
     ];*/
  }

  render() {
    return (
      <label>
        {this.input.inputName}
        <input type="text" ref={this.input.ref} />
      </label>
    );
  }
}
