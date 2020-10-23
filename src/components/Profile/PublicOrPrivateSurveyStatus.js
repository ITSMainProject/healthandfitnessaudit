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
import  {updatePublicOrPrivateSurveyStatus}  from '../store/actions//SurveyActions'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

class PublicOrPrivateSurveyStatus extends Component {

    state = {
        HealthClimate: false,
        FitnessProfile: false,
        UniversalFitnessTest: false,
        SpecificJointAssessment: false,
        Musculoskeletal: false,
        MetabolicHealthProfile: false,
        DietProfile: false,
        ChemicalIntakeProfile: false,
        StressRiskProfile: false,
        CareerSatisfactionProfile: false,
        MeaningAndPurpose: false,
        FamilyLifeProfile: false,
        FinanceProfile: false,
        PeopleProfile: false
    }

   /* handleChange = (e) => {
        this.setState({
          [e.currentTarget.id]: e.currentTarget.checked 
        })      
        console.log(e.target.id + e.currentTarget.checked)  
        console.log(this.state)    
      }*/

      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if(name === 'HealthClimate') {if(value===true){this.state.HealthClimate = true}else{this.state.HealthClimate = false}}
        if(name === 'FitnessProfile') {if(value===true){this.state.FitnessProfile = true}else{this.state.FitnessProfile = false}}
        if(name === 'UniversalFitnessTest') {if(value===true){this.state.UniversalFitnessTest = true}else{this.state.UniversalFitnessTest = false}}
        if(name === 'SpecificJointAssessment') {if(value===true){this.state.SpecificJointAssessment = true}else{this.state.SpecificJointAssessment = false}}
        if(name === 'Musculoskeletal') {if(value===true){this.state.Musculoskeletal = true}else{this.state.Musculoskeletal = false}}
        if(name === 'MetabolicHealthProfile') {if(value===true){this.state.MetabolicHealthProfile = true}else{this.state.MetabolicHealthProfile = false}}
        if(name === 'DietProfile') {if(value===true){this.state.DietProfile = true}else{this.state.DietProfile = false}}
        if(name === 'ChemicalIntakeProfile') {if(value===true){this.state.ChemicalIntakeProfile = true}else{this.state.ChemicalIntakeProfile = false}}
        if(name === 'StressRiskProfile') {if(value===true){this.state.StressRiskProfile = true}else{this.state.StressRiskProfile = false}}
        if(name === 'CareerSatisfactionProfile') {if(value===true){this.state.CareerSatisfactionProfile = true}else{this.state.CareerSatisfactionProfile = false}}
        if(name === 'MeaningAndPurpose') {if(value===true){this.state.MeaningAndPurpose = true}else{this.state.MeaningAndPurpose = false}}
        if(name === 'FamilyLifeProfile') {if(value===true){this.state.FamilyLifeProfile = true}else{this.state.FamilyLifeProfile = false}}
        if(name === 'FinanceProfile') {if(value===true){this.state.FinanceProfile = true}else{this.state.FinanceProfile = false}}
        if(name === 'PeopleProfile') {if(value===true){this.state.PeopleProfile = true}else{this.state.PeopleProfile = false}}

        console.log(this.state)    
    }


      handleSubmit = () => {  
          console.log(this.state)
        this.props.updatePublicOrPrivateSurveyStatus(this.state);      
    }

    render(){
        const { profile } = this.props;

        if(profile.SurveyPermissions!=null){

            this.state.HealthClimate = profile.SurveyPermissions[0].HealthClimate;
            this.state.FitnessProfile = profile.SurveyPermissions[0].FitnessProfile;
            this.state.UniversalFitnessTest = profile.SurveyPermissions[0].UniversalFitnessTest;
            this.state.SpecificJointAssessment = profile.SurveyPermissions[0].SpecificJointAssessment;
            this.state.Musculoskeletal = profile.SurveyPermissions[0].Musculoskeletal;
            this.state.MetabolicHealthProfile = profile.SurveyPermissions[0].MetabolicHealthProfile;
            this.state.DietProfile = profile.SurveyPermissions[0].DietProfile;
            this.state.ChemicalIntakeProfile = profile.SurveyPermissions[0].ChemicalIntakeProfile;
            this.state.StressRiskProfile = profile.SurveyPermissions[0].StressRiskProfile;
            this.state.CareerSatisfactionProfile = profile.SurveyPermissions[0].CareerSatisfactionProfile;
            this.state.MeaningAndPurpose = profile.SurveyPermissions[0].MeaningAndPurpose;
            this.state.FamilyLifeProfile = profile.SurveyPermissions[0].FamilyLifeProfile;
            this.state.FinanceProfile = profile.SurveyPermissions[0].FinanceProfile;
            this.state.PeopleProfile = profile.SurveyPermissions[0].PeopleProfile;

            const displaycheckbox1 = (id, state, title) => {
                return (
                    <div class="dbgOuter">
                        <div class="dbgCont">
                            <input type="checkbox" id={id} name={id} class="dbgCheck" defaultChecked={state} onChange={this.handleInputChange.bind(this)}/>
                            <label for={id}>{title}</label>
                        </div>
                    </div>
                )
            }

            const displaycheckbox = (id, state, title) => {
                return (
                    <Th>
                            <label>
                            <input type="checkbox" class="filled-in"defaultChecked={state}  id={id} name={id} for={id} onChange={this.handleInputChange.bind(this)}/>
                            <span>{title}</span>
                            </label>
                    </Th>
                )
            }

            return(
                <div>
                    <div class="card horizontal">
                        <div class="card-stacked">
                            <div class="card-content">
                                <p style={{textAlign: 'center', fontSize:'18px'}}>Untick or tick the boxes below to make your survey profiles public or private for
                                    your friends to see.
                                </p> 
                                <p style={{textAlign: 'center'}}><label><input type="checkbox" class="filled-in" checked="checked" /><span> = Public </span></label>
                                &nbsp;&nbsp;&nbsp;<label><input type="checkbox"  disabled="disabled"/><span> = Private </span></label></p>
                                &nbsp;&nbsp;

                        <Table>
                            <Tbody>
                                <Tr style={{border: 'hidden'}}>
                                {displaycheckbox('HealthClimate',this.state.HealthClimate,'Health Climate')}
                                {displaycheckbox('FitnessProfile',this.state.FitnessProfile,'Fitness Profile')}
                                {displaycheckbox('UniversalFitnessTest',this.state.UniversalFitnessTest,'Universal Fitness Test')}
                                {displaycheckbox('SpecificJointAssessment',this.state.SpecificJointAssessment,'Specific Joint Assessment')}
                                </Tr>
                                <Tr style={{border: 'hidden'}}>
                                {displaycheckbox('Musculoskeletal',this.state.Musculoskeletal,'Musculoskeletal')}
                                {displaycheckbox('MetabolicHealthProfile',this.state.MetabolicHealthProfile,'Metabolic Health Profile')}
                                {displaycheckbox('DietProfile',this.state.DietProfile,'Diet Profile')}
                                {displaycheckbox('ChemicalIntakeProfile',this.state.ChemicalIntakeProfile,'Chemical Intake Profile')}
                                </Tr>
                                <Tr style={{border: 'hidden'}}>
                                {displaycheckbox('StressRiskProfile',this.state.StressRiskProfile,'Stress Risk Profile')}
                                {displaycheckbox('CareerSatisfactionProfile',this.state.CareerSatisfactionProfile,'Career Satisfaction Profile')}
                                {displaycheckbox('MeaningAndPurpose',this.state.MeaningAndPurpose,'Meaning And Purpose')}
                                </Tr>
                                <Tr style={{border: 'hidden'}}>
                                {displaycheckbox('FamilyLifeProfile',this.state.FamilyLifeProfile,'Family Life Profile')}
                                {displaycheckbox('FinanceProfile',this.state.FinanceProfile,'Finance Profile')}
                                {displaycheckbox('PeopleProfile',this.state.PeopleProfile,'People Profile')}
                                
                                </Tr>
                            </Tbody>
                        </Table>
                                
                                <div class="center" style={{paddingTop: 10}}>
                                    <a class="waves-effect waves-light btn" onClick={() => this.handleSubmit()}>Update Permissions</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>

            </div>          
            )      
        }
         else{
            return (
                <div>
                     <p style={{textAlign: 'center'}}>Loading</p>
                </div>
            )
        }
    }

}

const mapStateToProps = (state) => {
    return {       
        auth: state.firebase.auth,
        profile: state.firebase.profile //remove this
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updatePublicOrPrivateSurveyStatus: (permission) => dispatch(updatePublicOrPrivateSurveyStatus(permission)),
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(PublicOrPrivateSurveyStatus)
  
