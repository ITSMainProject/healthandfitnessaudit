/*************************************************
 * Class Name: CompletedFriendItemUI
 * Created Date: N/A
 * Last Edited: 18/10/2020
 * -----------------------------------------------
 * Description:
 * This class is the UI element for a friend in the friends list
 *************************************************/
import React, { Component } from 'react'
import  {cancelFriendRequest}  from '../store/actions/FriendsListActions'
import  {acceptFriendRequest}  from '../store/actions/FriendsListActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const customCursor = { cursor: 'pointer' };

class CompletedFriendItemUI extends Component {

  notifyError = (string) => { toast.error(string) }

  notifySuccess = (string) => { toast.success(string) }

  waitFor (conditionFunction){
    const poll = resolve => {
      if(conditionFunction()) resolve();
      else setTimeout(_ => poll(resolve), 400);
    }
   return new Promise(poll);
  }  

  deleteFriend({friend}) {
      this.waitFor(_ => friend!= null)
      .then(_ => 
             this.props.cancelFriendRequest(friend),  
             this.notifySuccess('deleted ' + friend.email + ' from friends list') 
        );
  }

    render() {
        const { friend } = this.props;

        if(friend) {
             return (  
               <div>
                  <li class="collection-item"><div><a style={customCursor} onClick={() => this.deleteFriend({friend})} class="secondary-content"><i class="material-icons">delete</i></a></div>
                    <Link to={{ pathname: 'FriendSurveyHistory/' + friend.user, state: { 
                      friendsEmail: friend.email,
                      firstName: friend.firstName,
                      lastName: friend.lastName,
                      userUID: friend.user
                      }}}>    
                      {friend.firstName} {friend.lastName} <br></br>
                      {friend.email}  
                    </Link>
                  </li>   
               </div>
             )
            }             
         else {
            return(
                <div>
                    <p>error loading friend</p>
                </div>
            )
        }
}}
const mapStateToProps = (state) => {
  return {   
      profile: state.firebase.profile,
      auth: state.firebase.auth,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    acceptFriendRequest: (friend) => dispatch(acceptFriendRequest(friend)),
    cancelFriendRequest: (friend) => dispatch(cancelFriendRequest(friend))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CompletedFriendItemUI)
