import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

/* Local store */
import { localStoreFN } from '../../store/localStorage.js'

/* Actions */
import * as loginactions from '../../actions/login/index.js';

/*Components*/
import LoginForm from '../../components/login/';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  handleLogin = async (event) => {
    event.preventDefault();
    const obj = {
      grant_type: "password",
      username: document.getElementById("user").value,
      password: document.getElementById("password").value,
    };

    await this.props.actions.saveLoginApi(obj);
  }

  render() {
    return (
      <div>
          <LoginForm 
            message={this.props.message}
            handleLogin={this.handleLogin} 
          />
      }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth:state.reducer.login.auth,
  message: state.reducer.login.message,
  token: state.reducer.login.token,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(loginactions, dispatch),
});

Login.propTypes = {

};

export default connect(mapStateToProps,mapDispatchToProps,)(Login);

