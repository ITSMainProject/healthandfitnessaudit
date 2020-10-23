/*************************************************
 * Class Name: Summary
 * Created Date: N/A
 * Last Edited: 18/10/2020
 * -----------------------------------------------
 * Description:
 * shows the users latest results on one page
 *************************************************/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class Summary extends Component {
    render(){
        const rateValue = { HealthClimate: '',FitnessProfile: '',UniversalFitnessTest: '',SpecificJointAssessment: '',Musculoskeletal: '',
            MetabolicHealthProfile: '',DietProfile: '',ChemicalIntakeProfile: '',StressRiskProfile: '',CareerSatisfactionProfile: '',
            MeaningAndPurpose: '',FamilyLifeProfile: '',FinanceProfile: '',PeopleProfile: ''}

        const SetRateValue = (rateValue, totalScore) => {
            if((rateValue/totalScore*100)>=90) {return '5'}
            if((rateValue/totalScore*100)>=80) {return '4'}
            if((rateValue/totalScore*100)>=70) {return '3'}
            if((rateValue/totalScore*100)>=60) {return '2'}
            if((rateValue/totalScore*100)>=50) {return '1'}
            if((rateValue/totalScore*100)<50) {return '0'}           
        }

        var SummaryTotal = 0
        if(this.props.profile.SurveyResults != null) {
        SummaryTotal = parseInt(this.props.profile.SurveyResults[0].FitnessProfile)
        + parseInt(this.props.profile.SurveyResults[0].Musculoskeletal)
        + parseInt(this.props.profile.SurveyResults[0].MetabolicHealthProfile)
        + parseInt(this.props.profile.SurveyResults[0].DietProfile)
        + parseInt(this.props.profile.SurveyResults[0].ChemicalIntakeProfile)
        + parseInt(this.props.profile.SurveyResults[0].StressRiskProfile)
        + parseInt(this.props.profile.SurveyResults[0].CareerSatisfactionProfile)
        + parseInt(this.props.profile.SurveyResults[0].MeaningAndPurpose)
        + parseInt(this.props.profile.SurveyResults[0].FamilyLifeProfile)
        + parseInt(this.props.profile.SurveyResults[0].FinanceProfile)
        + parseInt(this.props.profile.SurveyResults[0].PeopleProfile)
        }

        if(this.props.profile.SurveyResults != null) {      
            rateValue.FitnessProfile = SetRateValue(this.props.profile.SurveyResults[0].FitnessProfile, 100);
            rateValue.Musculoskeletal = SetRateValue(this.props.profile.SurveyResults[0].Musculoskeletal, 100);
            rateValue.MetabolicHealthProfile = SetRateValue(this.props.profile.SurveyResults[0].MetabolicHealthProfile, 100);
            rateValue.DietProfile = SetRateValue(this.props.profile.SurveyResults[0].DietProfile, 100);
            rateValue.ChemicalIntakeProfile = SetRateValue(this.props.profile.SurveyResults[0].ChemicalIntakeProfile, 100);
            rateValue.StressRiskProfile = SetRateValue(this.props.profile.SurveyResults[0].StressRiskProfile, 100);
            rateValue.CareerSatisfactionProfile = SetRateValue(this.props.profile.SurveyResults[0].CareerSatisfactionProfile, 100);
            rateValue.MeaningAndPurpose = SetRateValue(this.props.profile.SurveyResults[0].MeaningAndPurpose, 100);
            rateValue.FamilyLifeProfile = SetRateValue(this.props.profile.SurveyResults[0].FamilyLifeProfile, 100);
            rateValue.FinanceProfile = SetRateValue(this.props.profile.SurveyResults[0].FinanceProfile, 100);
            rateValue.PeopleProfile = SetRateValue(this.props.profile.SurveyResults[0].PeopleProfile, 100);

            return(
                <div className="container" style={{
                    position: 'relative', minHeight: '70vh'
                }}>

                    <h1>Summary</h1>
                    <p>The below table shows your latest results</p>
                    <table>
                        <tbody>
                            <tr>
                                <th colSpan={6}>Category</th>
                                <th colSpan={2}>Total Score</th>
                                <th colSpan={4}>Star Rating</th>
                            </tr>
                            <tr>
                                <td colSpan={6}>Fitness</td>
                                <td colSpan={2}>{this.props.profile.SurveyResults[0].FitnessProfile} / 100</td>
                                <td colSpan={4}><Rater interactive={false} total={5} rating={rateValue.FitnessProfile} /></td>

                            </tr>
                            <tr>
                                <td colSpan={6}>Musculo-skeletal health risk</td>
                                <td colSpan={2}>{this.props.profile.SurveyResults[0].Musculoskeletal} / 100</td>
                                <td colSpan={4}><Rater interactive={false} total={5} rating={rateValue.Musculoskeletal} /></td>
    
                            </tr>
                            <tr>
                                <td colSpan={6}>Metabolic health</td>
                                <td colSpan={2}>{this.props.profile.SurveyResults[0].MetabolicHealthProfile} / 100</td>
                                <td colSpan={4}><Rater interactive={false} total={5} rating={rateValue.MetabolicHealthProfile} /></td>
            
                            </tr>
                            <tr>
                                <td colSpan={6}>Diet</td>
                                <td colSpan={2}>{this.props.profile.SurveyResults[0].DietProfile} / 100</td>
                                <td colSpan={4}><Rater interactive={false} total={5} rating={rateValue.DietProfile} /></td>
                    
                            </tr>
                            <tr>
                                <td colSpan={6}>Chemical intake</td>
                                <td colSpan={2}>{this.props.profile.SurveyResults[0].ChemicalIntakeProfile} / 100</td>
                                <td colSpan={4}><Rater interactive={false} total={5} rating={rateValue.ChemicalIntakeProfile} /></td>
                    
                            </tr>
                            <tr>
                                <td colSpan={6}>Stress risk</td>
                                <td colSpan={2}>{this.props.profile.SurveyResults[0].StressRiskProfile} / 100</td>
                                <td colSpan={4}><Rater interactive={false} total={5} rating={rateValue.StressRiskProfile} /></td>
                            
                            </tr>
                            <tr>
                                <td colSpan={6}>Career satisfaction</td>
                                <td colSpan={2}>{this.props.profile.SurveyResults[0].CareerSatisfactionProfile} / 100</td>
                                <td colSpan={4}><Rater interactive={false} total={5} rating={rateValue.CareerSatisfactionProfile} /></td>
                            
                            </tr>
                            <tr>
                                <td colSpan={6}>Meaning and purpose</td>
                                <td colSpan={2}>{this.props.profile.SurveyResults[0].MeaningAndPurpose} / 100</td>
                                <td colSpan={4}><Rater interactive={false} total={5} rating={rateValue.MeaningAndPurpose} /></td>
                        
                            </tr>
                            <tr>
                                <td colSpan={6}>Family life</td>
                                <td colSpan={2}>{this.props.profile.SurveyResults[0].FamilyLifeProfile} / 100</td>
                                <td colSpan={4}><Rater interactive={false} total={5} rating={rateValue.FamilyLifeProfile} /></td>
                        
                            </tr>
                            <tr>
                                <td colSpan={6}>Finance</td>
                                <td colSpan={2}>{this.props.profile.SurveyResults[0].FinanceProfile} / 100</td>
                                <td colSpan={4}><Rater interactive={false} total={5} rating={rateValue.FinanceProfile} /></td>
                        
                            </tr> 
                            <tr>
                                <td colSpan={6}>People</td>
                                <td colSpan={2}>{this.props.profile.SurveyResults[0].PeopleProfile} / 100</td>
                                <td colSpan={4}><Rater interactive={false} total={5} rating={rateValue.PeopleProfile} /></td>
                        
                            </tr>  
                        </tbody>
                    </table>
                    <p>MERIT AWARD for achieving over 70 in all profiles.</p>
                    {SummaryTotal >= 770 ?
                    <h6>
                    <span class="material-icons" style={{color: 'blue'}}>
                    verified
                    </span>&nbsp;
                    Congratulations! You have acheived MERIT AWARD.&nbsp;
                    <span class="material-icons" style={{color: 'blue'}}>
                    verified
                    </span>
                    </h6>
                    : <h6>Your score is lower than 70%.</h6>
                    }
                    &nbsp;&nbsp;
                </div>      
            ) 
        }
        else {
            return(
                <div>Loading</div>
            )
        }    
    }
}

const mapStateToProps = (state) => {
    return {       
        auth: state.firebase.auth,
        profile: state.firebase.profile 
    }
}

export default connect(mapStateToProps,null)(Summary)
//770