import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './test.css';

export default class Test extends PureComponent {
  render() {
    if (this.props.value === null) {
      return null;
    }

    return (
      <div>
        <p>The sum of the two numbers is</p>
        <p
          className="result"
        >
          {this.props.value}
        </p>

        {this.props.history.map((entry, key) => (
          <div key={key}>{entry}</div>
        ))}
      </div>
    );
  }
}

Test.propTypes = {
  value: PropTypes.number,
  history: PropTypes.array
};

Test.defaultProps = {
  value: null,
  history: []
};
