/*************************************************
 * Class Name: Meaning and Purpose
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

class MeaningAndPurpose extends Component {

  //firebase document states
  firebaseStates = {
    title: 'MeaningAndPurpose', starValue: 'testValue', maximumScore: '100', totalScore: '',
    Question_1: '', Question_2: '', Question_3: '', Question_4: '', Question_5: '', Question_6: '',
    Question_7: '', Question_8: '', Question_9: '',  Question_10: '',
  }

  //local survey states
  state = { 
    num: '0', col1: '0', col2: '0', col3: '0', col4: '0', col5: '0', col6: '0', col7: '0', col8: '0', 
    col9: '0', col10: '0', rate: '0', count:'0', countElement1: 0, countElement2: 0, 
    countElement3: 0, countElement4: 0, countElement5: 0, countElement6: 0, countElement7: 0, countElement8: 0,
    countElement9: 0, countElement10: 0, 
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
    // [a = col] [b = identifer] [c = number]
   // eval("this.state.col" + n + " = parseInt(e)");
  //  if(eval("this.state.countElement" + n + "==0")){
   //   this.counting()
    //  eval("this.state.countElement" + n + " = 1");
   // }
   switch(n){
    case "1": this.state.col1 = parseInt(e); if(this.state.countElement1 ===0){this.counting(); this.state.countElement1 =1} break;
    case "2": this.state.col2 = parseInt(e); if(this.state.countElement2 ===0){this.counting(); this.state.countElement2 =1} break; 
    case "3": this.state.col3 = parseInt(e); if(this.state.countElement3 ===0){this.counting(); this.state.countElement3 =1} break;
    case "4": this.state.col4 = parseInt(e); if(this.state.countElement4 ===0){this.counting(); this.state.countElement4 =1} break;
    case "5": this.state.col5 = parseInt(e); if(this.state.countElement5 ===0){this.counting(); this.state.countElement5 =1} break;
    case "6": this.state.col6 = parseInt(e); if(this.state.countElement6 ===0){this.counting(); this.state.countElement6 =1} break;
    case "7": this.state.col7 = parseInt(e); if(this.state.countElement7 ===0){this.counting(); this.state.countElement7 =1} break;
    case "8": this.state.col8 = parseInt(e); if(this.state.countElement8 ===0){this.counting(); this.state.countElement8 =1} break;
    case "9": this.state.col9 = parseInt(e); if(this.state.countElement9 ===0){this.counting(); this.state.countElement9 =1} break;
    case "10": this.state.col10 = parseInt(e); if(this.state.countElement10 ===0){this.counting(); this.state.countElement10 =1} break;     
 }
    c = parseInt(this.state.col1) + parseInt(this.state.col2) + parseInt(this.state.col3) + parseInt(this.state.col4) + parseInt(this.state.col5) + parseInt(this.state.col6) + parseInt(this.state.col7) + parseInt(this.state.col8) + parseInt(this.state.col9) + parseInt(this.state.col10)
    this.addFunction(c)     
  }

  submitSurvey() {        

    // set the firebase states to the local survey states and submit a request to create survey in firebase account
    this.firebaseStates.totalScore = this.state.num;
    //for(var j = 1; j <=10; j++) { eval("this.firebaseStates.Question_" + j + " = this.state.col" + j);}
    this.firebaseStates.Question_1 = this.state.col1;
    this.firebaseStates.Question_2 = this.state.col2;
    this.firebaseStates.Question_3 = this.state.col3;
    this.firebaseStates.Question_4 = this.state.col4;
    this.firebaseStates.Question_5 = this.state.col5;
    this.firebaseStates.Question_6 = this.state.col6;
    this.firebaseStates.Question_7 = this.state.col7;
    this.firebaseStates.Question_8 = this.state.col8;
    this.firebaseStates.Question_9 = this.state.col9;
    this.firebaseStates.Question_10 = this.state.col10;
    this.props.createSurvey(this.firebaseStates);

    // redirect user
  }
        
  render() {
    return (
      <div className="container">          
        <h1>Meaning And Purpose</h1>
        <p><b>Are you living the life you’d like to live?</b></p>
        <SurveyRatingTemplate leftValue="No" rightValue="Yes" name = "1" comFunc = {this.parentFunction}/>
        <p><b>Are you a power in your own life? Are you getting enough of what you want and
need to live a fit, health, rich and fulfilling life?</b></p>
        <SurveyRatingTemplate leftValue="No" rightValue="Yes" name = "2" comFunc = {this.parentFunction}/>
        <p><b>Are you a power in the lives of other people?</b></p>
        <SurveyRatingTemplate leftValue="No" rightValue="Yes" name = "3" comFunc = {this.parentFunction}/>
        <p><b>Are you an optimistic person?</b></p>
        <SurveyRatingTemplate leftValue="No" rightValue="Yes" name = "4" comFunc = {this.parentFunction}/>
        <p><b>Do you have wisdom?</b></p>
        <SurveyRatingTemplate leftValue="No" rightValue="Yes" name = "5" comFunc = {this.parentFunction}/>
        <p><b>Are you a courageous person? Do you know what your heart’s desire is and are
you working toward it?</b></p>
        <SurveyRatingTemplate leftValue="No" rightValue="Yes" name = "6" comFunc = {this.parentFunction}/>
        <p><b>Is there a lot of love in your life?</b></p>
        <SurveyRatingTemplate leftValue="No" rightValue="Yes" name = "7" comFunc = {this.parentFunction}/>
        <p><b>Are you a person of integrity? Do you usually do what you say (to yourself and
others) you’re going to do?</b></p>
        <SurveyRatingTemplate leftValue="No" rightValue="Yes" name = "8" comFunc = {this.parentFunction}/>
        <p><b>Are you an enthusiastic person?</b></p>
        <SurveyRatingTemplate leftValue="No" rightValue="Yes" name = "9" comFunc = {this.parentFunction}/>
        <p><b>Are you thankful for what you’ve got?</b></p>
        <SurveyRatingTemplate leftValue="No" rightValue="Yes" name = "10" comFunc = {this.parentFunction}/>
        
        
        <span>&nbsp;&nbsp;</span>

        <div class="row" id="row" className="left-align">
        
        <div id="colTotal" >Total Score is:&nbsp;&nbsp;<div style={{display:'inline-flex', borderRadius: 5, border:'2px solid green', paddingLeft:20, paddingRight:20}}>{this.state.num}</div></div>
      
      </div>

        <span>&nbsp;&nbsp;</span>

        <div className="center-align">
        <Link to='/SurveyHistory/MeaningAndPurpose'>
            <button className="btn waves-effect waves-light" type="submit" name="action" onClick={() => this.submitSurvey()}>
            Submit
                <i className="material-icons right">send</i>
                
            </button>
            </Link>
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
export default connect(null,mapDispatchToProps)(MeaningAndPurpose)