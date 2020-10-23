/*************************************************
 * Class Name: SurveyHistory
 * Created Date: 08/09/2020 
 * Edited By: Aaron, Min, Jack, Doug
 * Last Edited: 11/09/2020
 * -----------------------------------------------
 * Imports into:
 * SurveyHistory.js
 * -----------------------------------------------
 * Description:
 * Template of UI to show for list of generated survey history results.
 *************************************************/
import React from 'react'
import moment from 'moment'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

const SurveyHistoryTemplate = ({survey}) => {

    var rateValue = 0

    if((survey.totalScore/survey.maximumScore*100)>=50){
       rateValue = 1;
    }
    if((survey.totalScore/survey.maximumScore*100)>=60){
        rateValue = 2;
     }
    if((survey.totalScore/survey.maximumScore*100)>=70){
        rateValue = 3;
     }
    if((survey.totalScore/survey.maximumScore*100)>=80){
        rateValue = 4;
     }
    if((survey.totalScore/survey.maximumScore*100)>=90){
        rateValue = 5;
     }

    var title = ''
    if(survey.title=='SpecificJointAssessment') {title = 'Specific Joint Assessment'}
    if(survey.title=='DietProfile') {title = 'Diet Profile'}
    if(survey.title=='CareerSatisfactionProfile') {title = 'Career Satisfaction Profile'}
    if(survey.title=='ChemicalIntakeProfile') {title = 'Chemical Intake Profile'}
    if(survey.title=='FamilyLifeProfile') {title = 'Family Life Profile'}
    if(survey.title=='FinanceProfile') {title = 'Finance Profile'}
    if(survey.title=='FitnessProfile') {title = 'Fitness Profile'}

    if(survey.title=='HealthClimate') {
        title = 'Health Climate'

        if((survey.totalScore/survey.maximumScore*100)<=50){
        rateValue = 1;
        }
        if((survey.totalScore/survey.maximumScore*100)<=40){
            rateValue = 2;
        }
        if((survey.totalScore/survey.maximumScore*100)<=30){
            rateValue = 3;
        }
        if((survey.totalScore/survey.maximumScore*100)<=20){
            rateValue = 4;
        }
        if((survey.totalScore/survey.maximumScore*100)<=10){
            rateValue = 5;
        }
    }

    if(survey.title=='MeaningAndPurpose') {title = 'Meaning And Purpose'}
    if(survey.title=='MetabolicHealthProfile') {title = 'Metabolic Health Profile'}
    if(survey.title=='Musculoskeletal') {title = 'Musculoskeletal'}
    if(survey.title=='PeopleProfile') {title = 'People Profile'}
    if(survey.title=='StressRiskProfile') {title = 'Stress Risk Profile'}
    if(survey.title=='UniversalFitnessTest') {title = 'Univsersal Fitness Test'}

            return (
                <div className="container section project-details">
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <span className="card-title">{title}</span>
                        </div>
                    
                        <div className="card-action grey lighten-4 grey-text">
                            <div>Results submitted: {moment(survey.createdDate.toDate()).format('LLLL')}</div>             
                            <div>Total score: {survey.totalScore + '/' + survey.maximumScore} </div>
                            <Rater interactive={false} total={5} rating={rateValue} />
                            
                            
                            <div>&nbsp;</div>
                            <a className="waves-effect waves-light btn">View Results</a> 
                        </div>
                    </div>
                </div>
            )
}
export default SurveyHistoryTemplate