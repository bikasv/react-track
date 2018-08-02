import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './test.css';

class Test extends PureComponent {
  render() {
    // if (this.props.result === null) {
    //   return null;
    // }

    return (
      <div>
        <p>The sum of the two numbers is</p>
        <p
          className="result"
        >
          {this.props.result}
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
  history: PropTypes.array,
  result: PropTypes.number
};

Test.defaultProps = {
  value: null,
  history: [],
  result: null
};

const mapStateToProps = (state) => ({
  history: state.app.history,
  result: state.app.result
})

export default connect(mapStateToProps)(Test);
