/*************************************************
 * Class Name: ActiveSurvey
 * Created Date: 07/09/2020 
 * Edited By: Aaron, Jack
 * Last Edited: 07/09/2020
 * -----------------------------------------------
 * Description:
 * Show selected survey based on state value
 *************************************************/
import React, { Component } from 'react'

import Survey_SpecificJointAssessment from './surveyList/Survey_SpecificJointAssessment'
import Survey_MusculoSkeletal from './surveyList/Survey_musculoskeletal' 
import Survey_DietProfile from './surveyList/Survey_DietProfile' 
import Survey_UniversalFitnessTest from './surveyList/Survey_UniversalFitnessTest'
import Survey_CareerSatisfactionProfile from './surveyList/Survey_CareerSatisfactionProfile'
import Survey_ChemicalIntakeProfile from './surveyList/Survey_ChemicalIntakeProfile'
import Survey_FamilyLifeProfile from './surveyList/Survey_FamilyLife'
import Survey_Finance from './surveyList/Survey_Finance'
import Survey_Fitness from './surveyList/Survey_FitnessProfile'
import Survey_HealthClimate from './surveyList/Survey_HealthClimate'
import Survey_MeaningAndPurpose from './surveyList/Survey_MeaningAndPurpose'
import Survey_MetabolicHealthProfile from './surveyList/Survey_MetabolicHealthProfile'
import Survey_People from './surveyList/Survey_People'
import Survey_StressRiskProfile from './surveyList/Survey_StressRiskProfile'
//import FakeSurvey from './surveyList/fakeSurvey'

class ActiveSurvey extends Component {
    render() {   
        //Display selected survey based on state value
        const selectedSurvey = this.props.location.pathname
        console.log(selectedSurvey); //DEBUG
        const profile_survey = () => {
          switch(selectedSurvey) {
    
            case "/ActiveSurvey/SpecificJointAssessment":   return <Survey_SpecificJointAssessment/>;
            case "/ActiveSurvey/Musculoskeletal":   return <Survey_MusculoSkeletal/>;
            case "/ActiveSurvey/DietProfile":   return <Survey_DietProfile/>;
            case "/ActiveSurvey/UniversalFitnessTest":   return <Survey_UniversalFitnessTest/>;
            case "/ActiveSurvey/CareerSatisfactionProfile":   return <Survey_CareerSatisfactionProfile/>;
            case "/ActiveSurvey/ChemicalIntakeProfile":   return <Survey_ChemicalIntakeProfile/>;
            case "/ActiveSurvey/FamilyLifeProfile":   return <Survey_FamilyLifeProfile/>;
            case "/ActiveSurvey/FinanceProfile":   return <Survey_Finance/>;
            case "/ActiveSurvey/FitnessProfile":   return <Survey_Fitness/>;
            case "/ActiveSurvey/HealthClimate":   return <Survey_HealthClimate/>;
            case "/ActiveSurvey/MeaningAndPurpose":   return <Survey_MeaningAndPurpose/>;
            case "/ActiveSurvey/MetabolicHealthProfile":   return <Survey_MetabolicHealthProfile/>;
            case "/ActiveSurvey/PeopleProfile":   return <Survey_People/>;
            case "/ActiveSurvey/StressRiskProfile":   return <Survey_StressRiskProfile/>;
            //case "/ActiveSurvey/FakeSurvey":   return <FakeSurvey/>;
    
            default:   return <h1>Oops, that survey does not exist</h1>
          }
        }

        return (
            <div className="container">    
              { profile_survey() }
            </div>
        )
    }
}
export default ActiveSurvey