/*************************************************
 * Class Name: SignUp
 * Created Date: 08/09/2020 
 * Edited By: Aaron, Min, Jack, Doug
 * Last Edited: 11/09/2020
 * -----------------------------------------------
 * Description:
 * 
 *************************************************/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../store/actions/AuthActions'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'

class Signup extends Component {

    state = {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      age: '',
      gender: ''
    }

    stateSignUp = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      age: '',
      gender: ''
    }

    notifyError = (string) => {toast.error(string)}

    notifySuccess = (string) => {toast.success(string)}

    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value 
      })
    }
    handleSubmit = (e) => {
       e.preventDefault();
       if(this.state.password != this.state.confirmPassword)
       {
          this.notifyError('Passwords do not match')
          return;
       }

      if(this.state.password.length > 30) {this.notifyError('Password must be less than 30 characters');return}
      if(this.state.firstName.length > 30) {this.notifyError('First name must be less than 30 characters');return}
      if(this.state.lastName.length > 30) {this.notifyError('Last name must be less than 30 characters');return}

      if(this.state.firstName.length < 1) {this.notifyError('First name can not be blank');return}
      if(this.state.lastName.length < 1) {this.notifyError('Last name can not be blank');return}

       this.stateSignUp.email = this.state.email;
       this.stateSignUp.password = this.state.password;
       this.stateSignUp.firstName = this.state.firstName;
       this.stateSignUp.lastName = this.state.lastName;
       this.stateSignUp.age = this.state.age;
       this.stateSignUp.gender = this.state.gender;
 
       this.props.signUp(this.state)
    }
    render() {
        return (
          <div className="container" style={{position:'relative', minHeight:'70vh'}}>
          <form onSubmit={this.handleSubmit} className="white">
              <h5 className="grey-text text-darken-3">Sign Up</h5>
              <ul className="collection">
              <div className="md-form" style={{padding:10}}>
                  <label for="email">Email</label>
                  <input placeholder="example@email.com" type="email" id="email" className="form-control" onChange={this.handleChange}/>     
              </div> 
              </ul>
              <ul className="collection">
              <div className="md-form" style={{padding:10}}>
                  <label for="password">Password</label>
                  <input placeholder="" type="password" id="password" className="form-control" onChange={this.handleChange}/>   
              </div>
              </ul>
              <ul className="collection">
              <div className="md-form" style={{padding:10}}>
                  <label for="confirmPassword">Confirm Password</label>
                  <input placeholder="" type="password" id="confirmPassword" className="form-control" onChange={this.handleChange}/>    
              </div>
              </ul>
              <ul className="collection">
              <div className="md-form" style={{padding:10}}>
                  <label for="firstName">First Name</label>
                  <input placeholder="John" type="text" id="firstName" className="form-control" onChange={this.handleChange}/>
              </div>
              </ul>
              <ul className="collection">
              <div className="md-form" style={{padding:10}}>
                  <label for="lastName">Last Name</label>
                  <input placeholder="Miller" type="text" id="lastName" className="form-control" onChange={this.handleChange}/>
              </div>
              </ul>
              <ul className="collection">
              <div className="md-form" style={{padding:10}}>
                  <label for="age">Age</label>
                  <input placeholder="dd/mm/yyyy" type="date" id="age" className="form-control" onChange={this.handleChange}/>
              </div>
              </ul>
              <ul className="collection">
              <div className="md-form" style={{padding:10}}>
                  <label for="gender">Gender</label>
                  <input placeholder="Male" type="text" id="gender" className="form-control"  onChange={this.handleChange}/>
              </div>
              </ul>

              <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Register</button>
              </div>
              </form> 

              <div className="black-text">
                  <p> Already registered? <Link to={'/SignIn'} style={{color:'blue'}}> Sign In</Link></p>
              </div> 
        </div>            
        )
    }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)