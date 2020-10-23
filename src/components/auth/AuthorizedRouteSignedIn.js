/*************************************************
 * Class Name: AuthorizedRouteSignedIn
 * Created Date: 17/09/2020 
 * Last Edited: 18/10/2020
 * -----------------------------------------------
 * Imports into:
 * App.js
 * ----------------------------------------------
 * Description:
 * If a user is logged in and tries to access
 * the sign in / sign up page
 * redirect them back to home page.
 *************************************************/
import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route}  from 'react-router-dom';

 const AuthorizedRouteSignedIn = ({component: Component, auth, ...rest}) => {

    if(auth.uid) { return ( <Redirect to='/'/>) } 
    else{
        return(
            <Route {...rest} render={(props) => (
                <Component {...props} /> 
            )} />
        )
    };
};
const mapStateToProps = (state) => {
     return {
         auth : state.firebase.auth
     }
}
export default connect(mapStateToProps)(AuthorizedRouteSignedIn)