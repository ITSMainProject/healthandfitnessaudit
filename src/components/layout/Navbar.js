/*************************************************
 * Class Name: Navbar
 * Created Date: 08/09/2020 
 * Last Edited: 17/10/2020
 * -----------------------------------------------
 * Description:
 * Main navigation of the website
 *************************************************/
import React, {Component } from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

class Navbar extends Component {

    render(){
        const { auth, profile } = this.props;
        const links = auth.uid ?  <SignedInLinks profile = {profile}/> :  <SignedOutLinks/>

        return (
            <div>
                <nav className="nav-wrapper grey darken-3">
                    <div>
                        <a href="/" data-target="slide-out" className="sidenav-trigger show-on-large">
                        <span className="material-icons" style={{marginTop:10, fontSize:40}}>
                            home
                            </span>
                            </a>
                            <Link to='/' id="brand-logo" className="brand-logo center">Health and Fitness Audit</Link>
                        { links }
                    </div>
                </nav>  

                <ul id="slide-out" className="sidenav">
                    <li>
                        <div className="user-view">
                            <div className="background">
                            <img src="images/office.jpg"/>
                            </div>
                            <a href="#user"><img className="circle" src="images/yuna.jpg"/></a>
                            <a href="#name"><span className="white-text name">John Doe</span></a>
                            <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                        </div>
                    </li>
                    <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="#!">Second Link</a></li>
                    <li><div className="divider"></div></li>
                    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                </ul>
            </div>      
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar)


    