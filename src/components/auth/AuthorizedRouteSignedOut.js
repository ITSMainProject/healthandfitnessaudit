/*************************************************
 * Class Name: AuthorizedRouteSignedOut
 * Created Date: 17/09/2020 
 * Last Edited: 18/10/2020
 * -----------------------------------------------
 * Imports into:
 * App.js
 * ----------------------------------------------
 * Description:
 * If user tries to access a page and is not 
 * logged in, direct user to sign in page.
 * If user is logged in, allow access to website
 *************************************************/
import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route}  from 'react-router-dom';

 const AuthorizedRouteSignedOut = ({component: Component, auth, ...rest}) => {
    return(
        <Route {...rest} render={(props) => (
            auth.uid ? <Component {...props} /> :
                <Redirect to={{
                    pathname : '/SignIn',
                    state : {from : props.location}
                }}/>
        )} />
)
};
const mapStateToProps = (state) => {
     return {
         auth : state.firebase.auth
     }
}
export default connect(mapStateToProps)(AuthorizedRouteSignedOut)