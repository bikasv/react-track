import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './test.css';

export default class Test extends PureComponent {
  render() {
    if (!this.props.value) {
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
      </div>
    );
  }
}

Test.propTypes = {
  value: PropTypes.number
};

Test.defaultProps = {
  value: null
};
