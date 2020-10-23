/*************************************************
 * Class Name: SignIn
 * Created Date: 08/09/2020 
 * Last Edited: 17/09/2020
 * -----------------------------------------------
 * Description:
 * 
 *************************************************/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { signIn } from '../store/actions/AuthActions'

class Signin extends Component {
    state = {
      email: '',
      password: ''
    }
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value 
      })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }
    render() {
        return (
            <div className="container" style={{position:'relative', minHeight:'70vh'}}>
              <form onSubmit={this.handleSubmit} className="white">
                  <h5 className="grey-text text-darken-3">Sign In</h5>
                  <div className="input-field">
                    <label htmlFor="email">Email</label>  
                    <input type="email" id="email" onChange={this.handleChange}/>
                  </div>
                  <div className="input-field">
                    <label htmlFor="password">Password</label>  
                    <input type="password" id="password" onChange={this.handleChange}/>
                  </div>
                  <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                    
                    <Link to={'/ResetPassword'}>
                      <div className="red-text">
                      <p> Forgot password?</p>
                      </div>
                    </Link>
                  
                      <div className="black-text">
                      <p> Not registered? <Link to={'/SignUp'} style={{color:'blue'}}> Create an account</Link></p>
                      </div>
                                     
                  </div>
                  </form>  
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
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
