/*************************************************
 * Class Name: IndividualHistoryResults
 * Created Date: 16/09/2020 
 * Last Edited: 12/10/2020
 * -----------------------------------------------
 * Description:
 * shows the full results of a survey selected from the
 * history list
 *************************************************/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'
import  generatePdfDocument  from '../Functional/CreatePDF'

import ResultsIndividualJointAssessment from '../surveys/surveyResults/Results_SpecificJointAssessment'
import DietProfile from '../surveys/surveyResults/Results_DietProfile'
import CareerSatisfactionProfile from '../surveys/surveyResults/Results_CareerSatisfactionProfile'
import ChemicalIntakeProfile from '../surveys/surveyResults/Results_ChemicalIntakeProfile'
import FamilyLife from '../surveys/surveyResults/Results_FamilyLife'
import Finance from '../surveys/surveyResults/Results_Finance'
import FitnessProfile from '../surveys/surveyResults/Results_FitnessProfile'
import HealthClimate from '../surveys/surveyResults/Results_HealthClimate'
import MeaningAndPurpose from '../surveys/surveyResults/Results_MeaningAndPurpose'
import MetabolicHealthProfile from '../surveys/surveyResults/Results_MetabolicHealthProfile'
import Musculoskeletal from '../surveys/surveyResults/Results_musculoskeletal'
import People from '../surveys/surveyResults/Results_People'
import StressRiskProfile from '../surveys/surveyResults/Results_StressRiskProfile'
import UnivsersalFitnessTest from '../surveys/surveyResults/Results_UniversalFitnessTest'


class FriendSurveyHistoryDisplay extends Component {

  //  publishPDF = () => {
       // const { surveys } = this.props;
       // var i = surveys[0].results.length -1;
       // const survey = surveys[0].results[i]

       // generatePdfDocument({survey})
   // }

    render(){
        const { survey, friendsProfile, fn, ln } = this.props

        var permissionGranted = false;
        //const { fn, ln } = this.props.location.state
       
    
        if(friendsProfile) {
            try{
                //console.log(permissionGranted + 'grant 1')
                if(survey.title === 'SpecificJointAssessment') { permissionGranted = friendsProfile[0].SurveyPermissions[0].SpecificJointAssessment}
                if(survey.title === 'DietProfile') { permissionGranted = friendsProfile[0].SurveyPermissions[0].DietProfile}
                if(survey.title === 'CareerSatisfactionProfile') { permissionGranted = friendsProfile[0].SurveyPermissions[0].CareerSatisfactionProfile}
                if(survey.title === 'ChemicalIntakeProfile') { permissionGranted = friendsProfile[0].SurveyPermissions[0].ChemicalIntakeProfile}
                if(survey.title === 'FamilyLifeProfile') { permissionGranted = friendsProfile[0].SurveyPermissions[0].FamilyLifeProfile}
                if(survey.title === 'FinanceProfile') { permissionGranted = friendsProfile[0].SurveyPermissions[0].FinanceProfile}
                if(survey.title === 'FitnessProfile') { permissionGranted = friendsProfile[0].SurveyPermissions[0].FitnessProfile}
                if(survey.title === 'HealthClimate') { permissionGranted = friendsProfile[0].SurveyPermissions[0].HealthClimate}
                if(survey.title === 'MeaningAndPurpose') { permissionGranted = friendsProfile[0].SurveyPermissions[0].MeaningAndPurpose}
                if(survey.title === 'MetabolicHealthProfile') { permissionGranted = friendsProfile[0].SurveyPermissions[0].MetabolicHealthProfile}
                if(survey.title === 'Musculoskeletal') { permissionGranted = friendsProfile[0].SurveyPermissions[0].Musculoskeletal}
                if(survey.title === 'PeopleProfile') { permissionGranted = friendsProfile[0].SurveyPermissions[0].PeopleProfile}
                if(survey.title === 'StressRiskProfile') { permissionGranted = friendsProfile[0].SurveyPermissions[0].StressRiskProfile}
                if(survey.title === 'UnivsersalFitnessTest') { permissionGranted = friendsProfile[0].SurveyPermissions[0].UnivsersalFitnessTest}

                //console.log(friendsProfile)
                //console.log(permissionGranted + 'grant 2')

                if(permissionGranted===true){
                    switch(survey.title){
                    case 'SpecificJointAssessment':   return <ResultsIndividualJointAssessment survey={survey} publishPDF = {this.props.publishPDF}/>
                    case 'DietProfile':   return <DietProfile survey={survey} publishPDF = {this.props.publishPDF}/> 
                    case 'CareerSatisfactionProfile':   return <CareerSatisfactionProfile survey={survey} publishPDF = {this.props.publishPDF}/> 
                    case 'ChemicalIntakeProfile':   return <ChemicalIntakeProfile survey={survey} publishPDF = {this.props.publishPDF}/> 
                    case 'FamilyLifeProfile':   return <FamilyLife survey={survey} publishPDF = {this.props.publishPDF}/> 
                    case 'FinanceProfile':   return <Finance survey={survey} publishPDF = {this.props.publishPDF}/> 
                    case 'FitnessProfile':   return <FitnessProfile survey={survey} publishPDF = {this.props.publishPDF}/> 
                    case 'HealthClimate':   return <HealthClimate survey={survey} publishPDF = {this.props.publishPDF}/> 
                    case 'MeaningAndPurpose':   return <MeaningAndPurpose survey={survey} publishPDF = {this.props.publishPDF}/> 
                    case 'MetabolicHealthProfile':   return <MetabolicHealthProfile survey={survey} publishPDF = {this.props.publishPDF}/> 
                    case 'Musculoskeletal':   return <Musculoskeletal survey={survey} publishPDF = {this.props.publishPDF}/> 
                    case 'PeopleProfile':   return <People survey={survey} publishPDF = {this.props.publishPDF}/> 
                    case 'StressRiskProfile':   return <StressRiskProfile survey={survey} publishPDF = {this.props.publishPDF}/> 
                    case 'UnivsersalFitnessTest':   return <UnivsersalFitnessTest survey={survey} publishPDF = {this.props.publishPDF}/> 
                    default:   return <p style={{textAlign: 'center'}}>Oops, This page cannot be found</p> 
                    }   
                }
                else{
                    return(
                        <div style={{textAlign: 'center', position:'relative', minHeight:'70vh'}} className = "container">      
                            <div className="col s12 m7">
                                <div className="card horizontal">

                                    <div className="card-stacked">
                                        <div className="card-content">
                                            <p>{fn} {ln} has not listed this survey as public</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            }    
            catch {
                return(
                        <div style={{textAlign: 'center', position:'relative', minHeight:'70vh'}} className = "container">      
                            <div className="col s12 m7">
                                <div className="card horizontal">

                                    <div className="card-stacked">
                                        <div className="card-content">
                                            <p>{fn} {ln} has no results for this survey</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }      
        } else {
            return(
                <div style={{textAlign: 'center', position:'relative', minHeight:'70vh'}}>
                <p >Loading Results</p>

                <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div><div className="gap-patch">
                        <div className="circle"></div>
                    </div><div className="circle-clipper right">
                        <div className="circle"></div>
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
        friendsProfile: state.firestore.ordered.friendsProfile,
        auth: state.firebase.auth,
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => {
        const { userUID } = props
        return [
          {
            collection: "users",
            doc: userUID,   
            storeAs: 'friendsProfile'                  
          }  
        ];    
      })
)(FriendSurveyHistoryDisplay)




                              
                               