import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './addition.css';

class Addition extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      operation: 'add',
      input1: null,
      input2: null,
      error: '',
      submit: false
    };

    this.updateValue = this.updateValue.bind(this);
    this.changeOperation = this.changeOperation.bind(this);
    this.submit = this.submit.bind(this);
  }

  changeOperation(evt) {
    const value = evt.target.value;

    this.setState({
      operation: value
    });
  }

  updateValue(evt) {
    const id = evt.target.id;
    const value = evt.target.value;

    this.setState({
      [id]: value
    });
  }

  performOperation(value1, value2, operation) {
    switch (operation) {
      case 'add':
        return value1 + value2;
      case 'subtract':
        return value1 - value2;
      case 'multiply':
        return value1 * value2;
      case 'divide':
        return value1 / value2;
      default:
        return value1 + value2;
    }
  }

  submit() {
    const {input1, input2, operation} = this.state;

    this.setState({
      submit: true
    });

    if (input1 && input2) {
      const value1 = parseInt(input1, 10);
      const value2 = parseInt(input2, 10);
      this.props.onSubmit(this.performOperation(value1, value2, operation));
    }
  }

  render() {
    const {input1, input2, submit} = this.state;

    return (
      <div>
        <fieldset>
          <legend>Input numbers to add</legend>
          <select onChange={this.changeOperation}>
            <option value="add">Add</option>
            <option value="subtract">subtract</option>
            <option value="multiply">multiply</option>
            <option value="divide">divide</option>
          </select>
          <label
            className="form-label"
            htmlFor="input1"
          >
            Input 1
          </label>
          {submit && !input1 ?
            <label className="error-label">Please input the value before proceeding</label> :
            null
          }
          <input
            className="form-input"
            id="input1"
            onChange={this.updateValue}
            type="number"
          />

          <label
            className="form-label"
            htmlFor="input2"
          >
            Input 2
          </label>
          {submit && !input2 ?
            <label className="error-label">Please input the value before proceeding</label> :
            null
          }
          <input
            className="form-input"
            id="input2"
            onChange={this.updateValue}
            type="number"
          />

          <button
            className="form-button"
            onClick={this.submit}
          >
            Add
          </button>
        </fieldset>
      </div>
    );
  }
}

export default Addition;

Addition.propTypes = {
  onSubmit: PropTypes.func
};

Addition.defaultProps = {
  onSubmit: () => {}
};
