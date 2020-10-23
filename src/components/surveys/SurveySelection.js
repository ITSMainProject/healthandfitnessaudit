/*************************************************
 * Class Name: Footer
 * Created Date: 08/09/2020 
 * Last Edited: 30/09/2020
 * -----------------------------------------------
 * Imports into:
 * Dashboard.js
 * -----------------------------------------------
 * Description:
 * shows a list of surveys to select from
 *************************************************/
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class SurveySelection extends Component {

    img = (imageLink,title,navLinkSurvey,navLinkHistory) => {
        return (
            <div className="col s12 m6 l4">
                <div className="card">
                    <div className="card-image">
                        <img src={imageLink}>
                        </img>
                        <div className="card-content">
                            <p>{title}</p>
                        </div>
                        <div className="card-action">
                            <NavLink to={navLinkSurvey}>Survey</NavLink>
                            <NavLink to={navLinkHistory}>Results</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (  
                <div style={{paddingTop: '20px'}}>
                    <div className="row">
                        
                    {this.img("../img/healthclimatesurvey-min.png","Health Climate Survey",'/ActiveSurvey/HealthClimate','/SurveyHistory/HealthClimate')}        
                    {this.img("../img/fitnessassessment-min.png","Fitness Profile",'/ActiveSurvey/FitnessProfile','/SurveyHistory/FitnessProfile')}
                    {this.img("../img/universalfitnesstest-min.png","Universal Fitness Test",'/ActiveSurvey/UniversalFitnessTest','/SurveyHistory/UniversalFitnessTest')}
                    {this.img("../img/specificjointassessment-min.png","Specific Joint Assessment",'/ActiveSurvey/SpecificJointAssessment','/SurveyHistory/SpecificJointAssessment')}
                    {this.img("../img/musculoskeletalrisk-min.png","Musculoskeletal",'/ActiveSurvey/Musculoskeletal','/SurveyHistory/Musculoskeletal')}
                    {this.img("../img/metabolichealth-min.png","Metabolic Health Profile",'/ActiveSurvey/MetabolicHealthProfile','/SurveyHistory/MetabolicHealthProfile')}
                    {this.img("../img/dietassessment-min.png","Diet Profile",'/ActiveSurvey/DietProfile','/SurveyHistory/DietProfile')}
                    {this.img("../img/chemicalintakeassessment-min.png","Chemical Intake Profile",'/ActiveSurvey/ChemicalIntakeProfile','/SurveyHistory/ChemicalIntakeProfile')}
                    {this.img("../img/stressrisk-min.png","Stress Risk Profile",'/ActiveSurvey/StressRiskProfile','/SurveyHistory/StressRiskProfile')}
                    {this.img("../img/careersatisfaction-min.png","Career Satisfaction Profile",'/ActiveSurvey/CareerSatisfactionProfile','/SurveyHistory/CareerSatisfactionProfile')}
                    {this.img("../img/meaningandpurpose-min.png","Meaning And Purpose Profile",'/ActiveSurvey/MeaningAndPurpose','/SurveyHistory/MeaningAndPurpose')}
                    {this.img("../img/familylife-min.png","Family Life Profile",'/ActiveSurvey/FamilyLifeProfile','/SurveyHistory/FamilyLifeProfile')}
                    {this.img("../img/financeassessment-min.png","Finance Profile",'/ActiveSurvey/FinanceProfile','/SurveyHistory/FinanceProfile')}
                    {this.img("../img/peopleassessment-min.png","People",'/ActiveSurvey/PeopleProfile','/SurveyHistory/PeopleProfile')}
                    </div>
                </div>             
        )
    }
}
export default SurveySelection