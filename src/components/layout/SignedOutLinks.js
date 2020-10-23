/*************************************************
 * Class Name: SignedOutLinks
 * Created Date: 08/09/2020 
 * Edited By: Aaron
 * Last Edited: 11/09/2020
 * -----------------------------------------------
 * Description:
 * Footer Links to show user when user is signed out
 *************************************************/
import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to='/signup'>Signup</NavLink></li>
            <li><NavLink to='/signin'>Login</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks