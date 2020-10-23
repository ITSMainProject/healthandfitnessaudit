/*************************************************
 * Class Name: ResetPassword
 * Created Date: 21/09/2020 
 * Last Edited: 21/09/2020
 * -----------------------------------------------
 * Description:
 * Send a password reset email to the user
 *************************************************/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { resetPassword } from '../store/actions/AuthActions'

class ResetPassword extends Component {
    state = {
      email: ''
    }
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value 
      })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.resetPassword(this.state);
    }
    forgotPassword = () => {
      //console.log('change password')
    }
    render() {
        return (
            <div className="container" style={{position:'relative', minHeight:'70vh'}}>
              <form onSubmit={this.handleSubmit} className="white">
                  <h5 className="grey-text text-darken-3">Please enter the email address associated with your account</h5>
                  <div className="input-field">
                    <label htmlFor="email">Email</label>  
                    <input type="email" id="email" onChange={this.handleChange}/>
                  </div>
                  <div className="input-field">
                    <button onClick={this.forgotPassword} className="btn pink lighten-1 z-depth-0">Request password</button>
                  </div>
                  </form>  

                  <div className="push" style={{height: '50px'}}></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetPassword: (creds) => dispatch(resetPassword(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)

