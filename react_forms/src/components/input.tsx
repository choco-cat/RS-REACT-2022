import React from 'react';
type onRefFunction = (val: React.RefObject<HTMLInputElement>) => void;
type InputProps = { inputName: string; sendRef: onRefFunction; type?: string };

export default class extends React.Component<InputProps> {
  private input: {
    inputName: string;
    ref: React.RefObject<HTMLInputElement>;
    type?: string;
  };

  constructor(props: InputProps) {
    super(props);
    this.input = {
      inputName: this.props.inputName,
      type: this.props.type,
      ref: React.createRef(),
    };
  }

  componentDidMount() {
    this.props.sendRef(this.input.ref);
  }

  render() {
    return (
      <label>
        {this.input.inputName}
        <input type={this.input.type} ref={this.input.ref} name={this.input.inputName} />
      </label>
    );
  }
}
