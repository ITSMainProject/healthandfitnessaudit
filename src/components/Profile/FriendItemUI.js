/*************************************************
 * Class Name: FriendItemUI
 * Created Date: N/A
 * Last Edited: 18/10/2020
 * -----------------------------------------------
 * Description:
 * This class is the UI element for an 
 * individual pending friend request.
 *************************************************/
import React, { Component } from 'react'
import  {cancelFriendRequest}  from '../store/actions/FriendsListActions'
import  {acceptFriendRequest}  from '../store/actions/FriendsListActions'
import { connect } from 'react-redux'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class FriendItemUI extends Component {

  notifyError = (string) => { toast.error(string) }

  notifySuccess = (string) => { toast.success(string) }

  waitFor (conditionFunction){
    const poll = resolve => {
      if(conditionFunction()) resolve();
      else setTimeout(_ => poll(resolve), 400);
    }
   return new Promise(poll);
  }  

  acceptFriendRequest({friend}) {
      this.waitFor(_ => friend!= null)
      .then(_ => 
             this.props.acceptFriendRequest(friend),  
             this.notifySuccess('accepted friend request from ' + friend.email) 
        );
  }

  cancelFriendRequest({friend}) {
    this.waitFor(_ => friend!= null)
    .then(_ => 
           this.props.cancelFriendRequest(friend),  
           this.notifyError('rejected friend request from ' + friend.email) 
      );
  }

  deleteFriendRequest({friend}) {
    this.waitFor(_ => friend!= null)
    .then(_ => 
           this.props.cancelFriendRequest(friend),  
           this.notifyError('canceled friend request for ' + friend.email) 
      );
  }

    render() {
        const { friend } = this.props;

        if(friend) {
             return (   
              <div class="card">
 
                  <div class="container">
                      <img src="../img/temp_friend_pic.png" alt="" class="circle" width="20px"/>&nbsp;
                      
                      <span class="title" style={{paddingTop:'10', fontWeight:'bold'}}>{friend.email}</span>
                      <p>Friend status: {friend.friendStatus} (Your friend has not accepted this request yet) <br></br>
                        Request: {friend.status} <br></br>
                        Message: {friend.personalMessage}
                      </p>
      
                  {friend.status == 'received'? 

                    <div style={{paddingBottom:'10px'}}>
                      <a class="waves-effect waves-light btn-small" onClick={() => this.acceptFriendRequest({friend})}>ACCEPT</a>&nbsp;&nbsp;
                      <a class="waves-effect waves-light btn-small" onClick={() => this.cancelFriendRequest({friend})}>REJECT</a>
                    </div>
                    
                  :
                    <div style={{paddingBottom:'10px'}}>
                      <a class="waves-effect waves-light btn-small" onClick={() => this.deleteFriendRequest({friend})}>CANCEL REQUEST</a>
                      
                    </div>  
                  }  
                
                </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(FriendItemUI)