/*************************************************
 * Class Name: friendResultsPage
 * Created Date: N/A
 * Last Edited: 18/10/2020
 * -----------------------------------------------
 * Description:
 * UI display of friends results survey selection page
 *************************************************/
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class friendResultsPage extends Component {

    img = (imageLink,title,path,UID, fname, lname, surveyName) => {
        return (
            <div className="col s12 m6 l4">
                <div className="card">
                    <div className="card-image">
                        <img src={imageLink}>
                        </img>
                        <div className="card-content">
                            <p id='friendTitle'>{title}</p>
                        </div>
                        <div className="card-action">
                            <NavLink to={{ pathname: path + UID, state: { fn: fname,ln: lname,userUID: UID, surveyname: surveyName}}}>Results</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    render(){
        const {firstName, lastName, userUID} = this.props.location.state
            return(
                <div style={{textAlign: 'center'}} className = "container">     
                    <div class="col s12 m7">
                        
                        <div class="card horizontal">

                            <div class="card-stacked">
                                <div class="card-content">
                                    <h4 class="header">{firstName} {lastName}'s Survey Results</h4>
                                    <p>Click on the survey names below to view the users latest results</p>
                                </div>
                            </div>
                            </div>
                               
                                <div className="row">
                                    {this.img("../img/healthclimatesurvey-min.png",'Health Climate','/FriendSurveyResults/', userUID, firstName, lastName,'HealthClimate')}        
                                    {this.img("../img/fitnessassessment-min.png",'Fitness Profile','/FriendSurveyResults/', userUID, firstName, lastName,'FitnessProfile')}
                                    {this.img("../img/universalfitnesstest-min.png",'Universal Fitness Test','/FriendSurveyResults/', userUID, firstName, lastName,'UnivsersalFitnessTest')}
                                    {this.img("../img/specificjointassessment-min.png",'Specific Joint Assessment','/FriendSurveyResults/', userUID, firstName, lastName,'SpecificJointAssessment')}
                                    {this.img("../img/musculoskeletalrisk-min.png",'Musculo Skeletal','/FriendSurveyResults/', userUID, firstName, lastName,'Musculoskeletal')}
                                    {this.img("../img/metabolichealth-min.png",'Metabolic Health Profile','/FriendSurveyResults/', userUID, firstName, lastName,'MetabolicHealthProfile')}
                                    {this.img("../img/dietassessment-min.png",'Diet Profile','/FriendSurveyResults/', userUID, firstName, lastName,'DietProfile')}
                                    {this.img("../img/chemicalintakeassessment-min.png",'Chemical Intake Profile','/FriendSurveyResults/', userUID, firstName, lastName,'ChemicalIntakeProfile')}
                                    {this.img("../img/stressrisk-min.png",'Stress Risk Profile','/FriendSurveyResults/', userUID, firstName, lastName,'StressRiskProfile')}
                                    {this.img("../img/careersatisfaction-min.png",'Career Satisfaction Profile','/FriendSurveyResults/', userUID, firstName, lastName,'CareerSatisfactionProfile')}
                                    {this.img("../img/meaningandpurpose-min.png",'Meaning And Purpose','/FriendSurveyResults/', userUID, firstName, lastName,'MeaningAndPurpose')}
                                    {this.img("../img/familylife-min.png",'Family Life','/FriendSurveyResults/', userUID, firstName, lastName,'FamilyLifeProfile')}
                                    {this.img("../img/financeassessment-min.png",'Finance Profile','/FriendSurveyResults/', userUID, firstName, lastName,'FinanceProfile')}
                                    {this.img("../img/peopleassessment-min.png",'People','/FriendSurveyResults/', userUID, firstName, lastName,'PeopleProfile')}
                                </div>       
                    </div>   
                </div>         
            )
    }
}
export default friendResultsPage