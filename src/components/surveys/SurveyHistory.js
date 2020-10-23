/*************************************************
 * Class Name: SurveyHistory
 * Created Date: 08/09/2020 
 * Last Edited: 18/10/2020
 * -----------------------------------------------
 * Imports into:
 * SurveyHistory.js
 * -----------------------------------------------
 * Description:
 * show a history of results for a submitted survey
 *************************************************/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import SurveyHistoryTemplate from '../surveys/SurveyHistoryTemplate'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link } from 'react-router-dom'

class SurveyHistory extends Component {
    render(){
        const { surveys } = this.props;
        const selectedPath = this.props.location.pathname.split('/');
        const selectedSurvey = selectedPath[selectedPath.length -1];
        const replacementArray = [];

        if(surveys!=null){ //wait for survey prop to sync with the survey data from firebase (controlled by the default export at the bottom of the page)
            try{
                var ii = 0;
                for(var i = surveys[0].results.length -1; i >= 0; i--) //reverse order the survey results array so it displays in time order
                {
                    replacementArray[ii] = surveys[0].results[i]
                    ii++
                }
                return(
                    <div className="container" style={{position:'relative', minHeight:'70vh'}}>   


                        <div class="card horizontal">

                        <div class="card-stacked">
                            <div class="card-content">
                                <h4  style={{textAlign: 'center'}} class="header">Survey History</h4>
                                <p style={{textAlign: 'center'}}>Displaying the latest 10 results</p>
                            </div>
                        </div>
                        </div>

                        { surveys && replacementArray.map((survey, index )=> { //loop through the survey results and display them
                            return (
                                <Link to={{ pathname: '/SurveyHistoryResults/' + survey.title, state: { survey: survey} }}>
                                <SurveyHistoryTemplate selectedSurvey={selectedSurvey} survey={survey} key={index} />                            
                                </Link>                              
                            )
                        })}               
                    </div>
                ) 
            } 
            catch{
                return ( 
                    <div style={{textAlign: 'center', position:'relative', minHeight:'70vh'}} className = "container">      
                        <div class="col s12 m7">
                            <div class="card horizontal">
                                <div class="card-stacked">
                                    <div class="card-content">
                                        <p>There are no results to show for this survey. Try submitting one first</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        } else{
            return ( //display a loading logo sign while the firebase surveys map themselves to the props
                <div style={{textAlign: 'center', position:'relative', minHeight:'70vh'}}>
                    <p>Loading Results</p>
                    <div class="preloader-wrapper big active">
                        <div class="spinner-layer spinner-blue-only">
                            <div class="circle-clipper left">
                                <div class="circle"></div>
                            </div>
                            <div class="gap-patch">
                                <div class="circle"></div>
                            </div>
                            <div class="circle-clipper right">
                                <div class="circle"></div>
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
        surveys: state.firestore.ordered.surveys,
        auth: state.firebase.auth,
        profile: state.firebase.profile 
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => {
        const selectedPath = props.location.pathname.split('/');
        const selectedSurvey = selectedPath[selectedPath.length -1];
        return [
          {
            collection: "surveys",
            doc: props.auth.uid,
            subcollections: [{ collection: selectedSurvey }],       
            storeAs: 'surveys'                  
          }  
        ];    
      })
)(SurveyHistory)