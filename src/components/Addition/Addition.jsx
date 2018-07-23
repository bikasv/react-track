import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './addition.css';

class Addition extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      input1: null,
      input2: null,
      error: '',
      submit: false
    };

    this.updateValue = this.updateValue.bind(this);
    this.submit = this.submit.bind(this);
  }

  updateValue(evt) {
    const id = evt.target.id;
    const value = evt.target.value;

    this.setState({
      [id]: value
    });
  }

  submit() {
    const {input1, input2} = this.state;

    this.setState({
      submit: true
    });

    if (input1 !== null && input2 !== null) {
      const value1 = parseInt(input1, 10);
      const value2 = parseInt(input2, 10);
      this.props.onSubmit(value1 + value2);
    }
  }

  render() {
    const {input1, input2, submit} = this.state;

    return (
      <div>
        <fieldset>
          <legend>Input numbers to add</legend>

          <p
            className="form-label"
            htmlFor="input1"
          >
            Input 1
          </p>
          {submit && [null, ''].includes(input1) ?
            <p className="error-label">Please input the value before proceeding</p> :
            null
          }
          <input
            className="form-input"
            id="input1"
            onChange={this.updateValue}
            type="number"
          />

          <p
            className="form-label"
            htmlFor="input2"
          >
            Input 2
          </p>
          {submit && [null, ''].includes(input2) ?
            <p className="error-label">Please input the value before proceeding</p> :
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
