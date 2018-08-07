import React from 'react';
import {Header} from './components';
import { getUsers } from './actions/user-actions';
import { connect } from 'react-redux';
import './App.css';

class UserRoutes extends React.Component {

  componentWillMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div className="user">
        <Header
          text="Users"
          url="#/"
          anchorName="Home"
        />

        <div className="details">
          <p className="name">{this.props.name}</p>

          <p>
            <a href={`mailto:${this.props.email}`}>{this.props.email}</a>
          </p>

          <p>
            <a href={this.props.website}>{this.props.website}</a>
          </p>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  name: state.user.name,
  email: state.user.email,
  website: state.user.website
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserRoutes);
