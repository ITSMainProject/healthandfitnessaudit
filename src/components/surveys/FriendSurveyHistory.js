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

import FriendSurveyHistoryDisplay from '../surveys/FriendSurveyHistoryDisplay'


class FriendSurveyHistory extends Component {

    publishPDF = () => {
        const { surveys } = this.props;
        var i = surveys[0].results.length -1;
        const survey = surveys[0].results[i]

        generatePdfDocument({survey})
    }

    render(){
        const { surveys } = this.props
        const { fn, ln, userUID } = this.props.location.state
    
        if(surveys) {
            try{
                var i = surveys[0].results.length -1;
                const survey = surveys[0].results[i]

                return <FriendSurveyHistoryDisplay survey={survey} publishPDF = {this.publishPDF} fn={fn} ln={ln} userUID={userUID}/>
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
        surveys: state.firestore.ordered.surveys,
        auth: state.firebase.auth,
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => {
        const { userUID, surveyname } = props.location.state 
        return [
          {
            collection: "surveys",
            doc: userUID,
            subcollections: [{ collection: surveyname }],       
            storeAs: 'surveys'                  
          }  
        ];    
      })
)(FriendSurveyHistory)




/*
/*************************************************
 * Class Name: IndividualHistoryResults
 * Created Date: 16/09/2020 
 * Last Edited: 12/10/2020
 * -----------------------------------------------
 * Description:
 * shows the full results of a survey selected from the
 * history list
 *************************************************//*
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

import FriendSurveyHistoryDisplay from '../surveys/FriendSurveyHistoryDisplay'


class FriendSurveyHistory extends Component {

    publishPDF = () => {
        const { surveys } = this.props;
        var i = surveys[0].results.length -1;
        const survey = surveys[0].results[i]

        generatePdfDocument({survey})
    }

    render(){
        const { surveys } = this.props
        const { fn, ln } = this.props.location.state
    
        if(surveys) {
            try{
                var i = surveys[0].results.length -1;
                const survey = surveys[0].results[i]

                return <FriendSurveyHistoryDisplay survey={survey} publishPDF = {this.publishPDF}/>

                switch(survey.title){
                case 'SpecificJointAssessment':   return <ResultsIndividualJointAssessment survey={survey} publishPDF = {this.publishPDF}/>
                case 'DietProfile':   return <DietProfile survey={survey} publishPDF = {this.publishPDF}/> 
                case 'CareerSatisfactionProfile':   return <CareerSatisfactionProfile survey={survey} publishPDF = {this.publishPDF}/> 
                case 'ChemicalIntakeProfile':   return <ChemicalIntakeProfile survey={survey} publishPDF = {this.publishPDF}/> 
                case 'FamilyLifeProfile':   return <FamilyLife survey={survey} publishPDF = {this.publishPDF}/> 
                case 'FinanceProfile':   return <Finance survey={survey} publishPDF = {this.publishPDF}/> 
                case 'FitnessProfile':   return <FitnessProfile survey={survey} publishPDF = {this.publishPDF}/> 
                case 'HealthClimate':   return <HealthClimate survey={survey} publishPDF = {this.publishPDF}/> 
                case 'MeaningAndPurpose':   return <MeaningAndPurpose survey={survey} publishPDF = {this.publishPDF}/> 
                case 'MetabolicHealthProfile':   return <MetabolicHealthProfile survey={survey} publishPDF = {this.publishPDF}/> 
                case 'Musculoskeletal':   return <Musculoskeletal survey={survey} publishPDF = {this.publishPDF}/> 
                case 'PeopleProfile':   return <People survey={survey} publishPDF = {this.publishPDF}/> 
                case 'StressRiskProfile':   return <StressRiskProfile survey={survey} publishPDF = {this.publishPDF}/> 
                case 'UnivsersalFitnessTest':   return <UnivsersalFitnessTest survey={survey} publishPDF = {this.publishPDF}/> 
                default:   return <p style={{textAlign: 'center'}}>Oops, This page cannot be found</p> 
                }   
            }    
            catch {
                return(
                        <div style={{textAlign: 'center'}} className = "container">      
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
                <div style={{textAlign: 'center'}}>
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
        surveys: state.firestore.ordered.surveys,
        auth: state.firebase.auth,
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => {
        const { userUID, surveyname } = props.location.state 
        return [
          {
            collection: "surveys",
            doc: userUID,
            subcollections: [{ collection: surveyname }],       
            storeAs: 'surveys'                  
          }  
        ];    
      })
)(FriendSurveyHistory)
*/


                              
                               