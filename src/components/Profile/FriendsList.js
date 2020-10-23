/*************************************************
 * Class Name: FriendsList
 * Created Date: N/A
 * Last Edited: 18/10/2020
 * -----------------------------------------------
 * Description:
 * this class contains the pending friends list
 *************************************************/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import FriendItemUI from './FriendItemUI'
import  {sendFriendRequest}  from '../store/actions/FriendsListActions'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class FriendsList extends Component {

    //object that gets sent to the user you want to be friends with
    state = {
        user: '', //friend unique user ID         
        email: '', 
        firstName: '',
        lastName: '',
        personalMessage: '' 
    }

    handleChange = (e) => {this.setState({ [e.target.id]: e.target.value })}
    
    notifyError = (string) => {toast.error(string)}

    notifySuccess = (string) => {toast.success(string)}

    waitFor (conditionFunction) {const poll = resolve => {if(conditionFunction()) resolve(); else setTimeout(_ => poll(resolve), 400);}
        return new Promise(poll);}  

    sendFriendRequest() {
        const { profile, auth, friendsList} = this.props;

        //make sure that personal message is not longer then x amount of characters
        if(this.state.personalMessage.length > 200) {this.notifyError('Please keep your personal message below 200 characters')
            return}

        //make sure the user is not trying to add themselves
        if(this.state.email.toUpperCase() == auth.email.toUpperCase()) {this.notifyError('You cannot send a friend request to yourself') 
            return}

        // wait until firebase has synced the data with local state
        this.waitFor(_ => friendsList[0].users!=null).then(_ => console.log('data synced'));
    
        //check if person exists in the health and fitness audit database.
        if(friendsList[0].users!=null){
            for (let i = 0; i < friendsList[0].users.length; i++) {
                if(this.state.email.toUpperCase() == friendsList[0].users[i].userEmail.toUpperCase()) 
                {            
                    //check if user is already in friendlist [pending or friend status]
                    if(profile.friends!=null){
                        for (let i = 0; i < profile.friends.length; i++){
                            if(this.state.email.toUpperCase() == profile.friends[i].email.toUpperCase()){
                                this.notifyError(this.state.email + ' already exists in your friend list!') 
                                return;
                            }
                        }       
                    }
                    
                    this.state.email = friendsList[0].users[i].userEmail
                    this.state.user = friendsList[0].users[i].userUid
                    this.state.firstName = friendsList[0].users[i].firstName
                    this.state.lastName = friendsList[0].users[i].lastName
                    
                    //all looks good, submit friend request
                    this.props.sendFriendRequest(this.state)
                    this.notifySuccess('Sent friend request to: ' + this.state.email) 
                    return;
                }
            } 
            this.notifyError('Sorry, this user doesnt seem to be registered with us. Get your friend to register an account first, then try adding them again.') 
        }    
    }

    render(){
        const { profile } = this.props;
        var showPendingText = true;

        if(profile.friends!=null){
            //console.log(profile.friends.length)
            if(profile.friends.length > 0){             
                return(
                    <div>
                        <div className="w3-container"> 
                        <h5 class="center">Friend Request</h5>         
                            <div className="row">
                                <div className="col s12">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">person_search</i>
                                            <input type="text" className="autocomplete"  id="email" onChange={this.handleChange}/>
                                            <p style={{margin:0, paddingLeft:40, color:'orange'}}>User email must be signed up as a user for health and fitness audit. Make sure your friend has registered an account before trying to add them.</p>
                                            <label htmlFor="email">Enter users email address</label>
                                        </div>

                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">textsms</i>
                                            <textarea id="personalMessage" className="materialize-textarea" onChange={this.handleChange}></textarea>
                                            <label htmlFor="personalMessage">Personal Message</label>
                                        </div>

                                        <div style={{textAlign: 'center'}}>
                                            <a className="waves-effect waves-light btn"  onClick={() => this.sendFriendRequest()}>Submit Friend Request</a>
                                        
                                        </div>
                                    </div>
                                </div>

                            </div>
                          
                                { profile && profile.friends.map(profile => { 
                                    if(profile.friendStatus != 'friend'){
                                        return (
                                            <div> 
                                                {showPendingText ? 
                                                <div><h5 style={{textAlign: 'center'}} className="grey-text text-darken-3">Pending Friends</h5>&nbsp;</div>
                                                : '' }

                                                <FriendItemUI friend={profile}/>
                                                { showPendingText = false}
                                            </div>
                                            
                                        ) } 
                                })}                          
                        </div>
                    </div>
                )}
                else{
                    return (
                        <div className="w3-container">
                            <h5 style={{textAlign: 'center'}} className="grey-text text-darken-3">Add a new friend</h5>    
                            <div className="row">
                                <div className="col s12">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">person_search</i>
                                            <input type="text" className="autocomplete"  id="email" onChange={this.handleChange}/>
                                            <label htmlFor="email">Enter users email address</label>
                                        </div>
        
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">textsms</i>
                                            <textarea id="personalMessage" className="materialize-textarea" onChange={this.handleChange}></textarea>
                                            <label htmlFor="personalMessage">Personal Message</label>
                                        </div>
        
                                        <div style={{textAlign: 'center'}}>
                                            <a className="waves-effect waves-light btn"  onClick={() => this.sendFriendRequest()}>Submit Friend Request</a>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    )
                }
        } else{
            return (
                <div className="w3-container">
                    <h5 style={{textAlign: 'center'}} className="grey-text text-darken-3">Add a new friend</h5>    
                    <div className="row">
                        <div className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">person_search</i>
                                    <input type="text" className="autocomplete"  id="email" onChange={this.handleChange}/>
                                    <label htmlFor="email">Enter users email address</label>
                                </div>

                                <div className="input-field col s12">
                                    <i className="material-icons prefix">textsms</i>
                                    <textarea id="personalMessage" className="materialize-textarea" onChange={this.handleChange}></textarea>
                                    <label htmlFor="personalMessage">Personal Message</label>
                                </div>

                                <div style={{textAlign: 'center'}}>
                                    <a className="waves-effect waves-light btn"  onClick={() => this.sendFriendRequest()}>Submit Friend Request</a>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {   
        //friendsList: state.friendsList.friendsList,
        friendsList: state.firestore.ordered.friendsList,
        profile: state.firebase.profile,
        auth: state.firebase.auth,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendFriendRequest: (friend) => dispatch(sendFriendRequest(friend))
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect(props => {
        return [
          {
            collection: "emailToUid",
            doc: "emailToUid",
            storeAs: 'friendsList'              
          }  
        ];    
      })
)(FriendsList)