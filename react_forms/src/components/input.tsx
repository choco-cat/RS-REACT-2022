import React from 'react';
import PropTypes from 'prop-types';
type onRefFunction = (val: React.RefObject<HTMLInputElement>) => void;
type InputProps = { inputName: string; rule: string; sendRef: onRefFunction };

export default class extends React.Component<InputProps> {
  private input: { inputName: string; ref: React.RefObject<HTMLInputElement>; rule: string };
  static propTypes = {
    sendRef: PropTypes.func,
  };
  constructor(props: InputProps) {
    super(props);
    this.input = { inputName: this.props.inputName, ref: React.createRef(), rule: this.props.rule };
  }

  componentDidMount() {
    this.props.sendRef(this.input.ref);
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
