/*************************************************
 * Class Name: CompletedFriendList
 * Created Date: N/A
 * Last Edited: 18/10/2020
 * -----------------------------------------------
 * Description:
 * This class controls the friends List section
 *************************************************/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import CompletedFriendItemUI from './CompletedFriendItemUI'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class CompletedFriendsList extends Component {

    //object that gets sent to the user you want to be friends with
    state = {
        user: '', //friend unique user ID         
        email: '', 
        personalMessage: '' 
    }

    handleChange = (e) => {this.setState({ [e.target.id]: e.target.value })}
    
    notifyError = (string) => {toast.error(string)}

    notifySuccess = (string) => {toast.success(string)}

    waitFor (conditionFunction) {const poll = resolve => {if(conditionFunction()) resolve(); else setTimeout(_ => poll(resolve), 400);}
        return new Promise(poll);}  

    render(){
        const { profile } = this.props;

        if(profile.friends!=null){
            if(profile.friends.length > 0){
                return(
                    <div>
                        <div>
                        <ul class="collection with-header">
                                <li  style={{textAlign: 'center'}} class="collection-header"><h4>Friends List</h4></li>

                                { profile && profile.friends.map(profile => { //if valid survey, return
                                    if(profile.friendStatus == 'friend'){
                                        return (
                                            <div> 
                                                <CompletedFriendItemUI friend={profile}/>
                                            </div>
                                        ) } 
                                })} 
                            </ul>
                        </div>
                    </div>
                )}
                else
                {
                    return(
                        <div>
                            <p style={{textAlign: 'center'}}>No friends to show yet, try adding someone by searching their email address</p>
                        </div>
                    ) 
                }
        } else{
            return (
                <div>
                     <p style={{textAlign: 'center'}}>No friends to show yet, try adding someone by searching their email address</p>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {   
        friendsList: state.firestore.ordered.friendsList,
        profile: state.firebase.profile,
        auth: state.firebase.auth,
    }
}

export default connect(mapStateToProps)(CompletedFriendsList)