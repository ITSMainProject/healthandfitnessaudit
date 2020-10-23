/*************************************************
 * Class Name: SpecificJointAssessment
 * Created Date: 07/09/2020 
 * Last Edited: 03/10/2020
 * -----------------------------------------------
 * Description:
 * This is the actual survey the user fills out
 *************************************************/
import React, { Component } from 'react'
import SurveyRatingTemplate from '../SurveyRatingTemplate'
import { connect } from 'react-redux'
import { createSurvey } from '../../store/actions/SurveyActions'
import { Link } from 'react-router-dom'

class FakeSurvey extends Component {

  //firebase document states
  firebaseStates = {
    title: 'FakeSurvey', starValue: 'testValue', maximumScore: '20', totalScore: '',
    Question_1: '', Question_2: '', 
  }

  //local survey states
  state = { 
    num: '0', col1: '0', col2: '0', rate: '0', count:'0', countElement1: 0, countElement2: 0,     
  }

  addFunction = (e) => {
    this.setState({
      num: e
    })
  }
  counting = () => {
    this.setState({
      count: parseInt(this.state.count)+1
    })
  }
  
  parentFunction = (e, n, c) => {


switch(n){
    case "1": this.state.col1 = parseInt(e); 
    if(this.state.countElement1 ==0){
        this.counting(); 
        this.state.countElement1 =1
        break;
    }
    case "2":
        this.state.col2 = parseInt(e);
        if(this.state.countElement2 ==0){
            this.counting()
            this.state.countElement2 =1
            break;
        }
}

    /* [a = col] [b = identifer] [c = number]
    eval("this.state.col" + n + " = parseInt(" + e + ")");
      if(eval("this.state.countElement" + n + "==0")){
        this.counting()
        eval("this.state.countElement" + n + " = 1");
      }*/

    c = parseInt(this.state.col1) + parseInt(this.state.col2) 
    this.addFunction(c)     
  }

  submitSurvey() {        

    // set the firebase states to the local survey states and submit a request to create survey in firebase account
    this.firebaseStates.totalScore = this.state.num;
    for(var j = 1; j <=2; j++) { eval("this.firebaseStates.Question_" + j + " = this.state.col" + j);}
    //this.props.createSurvey(this.firebaseStates);

    // redirect user
  }
        
  render() {
    return (
      <div className="container">          
        <h1 style={{textAlign: 'center'}}>fake survey</h1>
        <p>Back. Rate the current condition of your back</p>
        <SurveyRatingTemplate leftValue = "Dreadful" rightValue = "Good" name = "1" comFunc = {this.parentFunction}/>
        <p>Neck. Rate the current condition of your neck</p>
        <SurveyRatingTemplate leftValue = "Dreadful" rightValue = "Good" name = "2" comFunc = {this.parentFunction}/>
        

        <span>&nbsp;&nbsp;</span>

        <div className="center-align">
        <row>
        <div id="colTotal">Total Score is: {this.state.num}</div>
        </row>
        </div>

        <span>&nbsp;&nbsp;</span>

        <div className="center-align">
        
            <button className="btn waves-effect waves-light" type="submit" name="action" onClick={() => this.submitSurvey()}>
            Submit
                <i className="material-icons right">send</i>
                
            </button>
            
        </div>

        <span>&nbsp;&nbsp;</span>

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createSurvey: (survey) => dispatch(createSurvey(survey))
  }
}
export default connect(null,mapDispatchToProps)(FakeSurvey)