/*************************************************
 * Class Name: SignedInLinks
 * Created Date: 08/09/2020 
 * Edited By: Aaron
 * Last Edited: 11/09/2020
 * -----------------------------------------------
 * Description:
 * Footer Links to show user when user is signed in
 *************************************************/
import React, { Profiler } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../store/actions/AuthActions'
import CustomizedMenus from './RightNavV2'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const SignedInLinks = (props) => {
    const matches = useMediaQuery('(min-width:870px)');
    const { profile } = props; 

    return (
        matches ?
        <ul id="nav-mobile">   
            <li><NavLink to='/'>Dashboard</NavLink></li>
            <li><NavLink to='/Profile'>Profile</NavLink></li> 
            <li><NavLink to='/Summary'>Summary</NavLink></li> 
            <li><a onClick={props.signOut}>Logout</a></li>   
        </ul>
        :
        <ul id="nav-mobile">
            <li><CustomizedMenus profile={profile}/></li>
        </ul>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null,mapDispatchToProps)(SignedInLinks)