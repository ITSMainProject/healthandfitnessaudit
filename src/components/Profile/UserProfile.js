/*************************************************
 * Class Name: UserProfile
 * Created Date: N/A
 * Last Edited: 18/10/2020
 * -----------------------------------------------
 * Description:
 * Profile page of the user that calls the 
 * friends list and pending friends list components
 *************************************************/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import FriendsList from './FriendsList'
import CompletedFriendsList from './CompletedFriendsList'
import PublicOrPrivateSurveyStatus from './PublicOrPrivateSurveyStatus'




class UserProfile extends Component {

    render(){
        return(
            <div className="container" style={{position:'relatvie', minHeight:'70vh'}}>

            <PublicOrPrivateSurveyStatus/>
            <div class="card horizontal">
            <div class="card-stacked">
            <div class="card-content">
                <div className="row">
                    <div className="col s12 m6 l5">



                    <div class="card horizontal">
                            <div class="card-stacked">
                                <div class="card-content">

                            <form className="col s12">
                                <div className="row">
                                <h5 class="center">User Profile</h5>
                                    <div className="input-field col s6">
                                        <input disabled value={this.props.profile.firstName} id="disabled1" type="text" className="validate"/>
                                        <label htmlFor="disabled"></label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input disabled value={this.props.profile.lastName} id="disabled2" type="text" className="validate"/>
                                        <label htmlFor="disabled"></label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input disabled value={'DOB: ' + this.props.profile.age} id="disabled3" type="text" className="validate"/>
                                        <label htmlFor="disabled"></label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input disabled value={'Gender: ' + this.props.profile.gender} id="disabled4" type="text" className="validate"/>
                                        <label htmlFor="disabled"></label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input disabled value={this.props.auth.email} id="disabled5" type="text" className="validate"/>
                                        <label htmlFor="disabled"></label>
                                    </div>
                                </div>          

                                <div className="row">
                                    <div className="input-field col s12">
                                   
                                   
                                        <CompletedFriendsList/>
                                   
                                    </div>
                                </div>
                            
                            </form>   </div></div></div>
                    </div>

                    <div className="col s12 m6 l7">

                        <div class="card horizontal">
                            <div class="card-stacked">
                                <div class="card-content">
                        <FriendsList/></div></div></div>

                    </div>             
                </div>
            </div>
            </div>
            </div>
            </div>        
        )     
    }
}

const mapStateToProps = (state) => {
    return {       
        auth: state.firebase.auth,
        profile: state.firebase.profile //remove this
    }
}

export default connect(mapStateToProps,null)(UserProfile)
