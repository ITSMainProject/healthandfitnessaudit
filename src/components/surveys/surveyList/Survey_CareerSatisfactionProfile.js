/*************************************************
 * Class Name: Career Satisfaction Profile
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

class CareerSatisfactionProfile extends Component {

  //firebase document states
  firebaseStates = {
    title: 'CareerSatisfactionProfile', starValue: 'testValue', maximumScore: '100', totalScore: '',
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
   // if(eval("this.state.countElement" + n + "==0")){
    //  this.counting()
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
        <h1>Career Satisfaction Profile</h1>
        <p>How close are you to doing the job you’d really love to be doing? This is the job
        you’d love to do so much you’d do it for nothing, but which you did so well you’d be paid
        handsomely.</p>
        <SurveyRatingTemplate leftValue="Miles away" rightValue="I'm there" name = "1" comFunc = {this.parentFunction}/>
        <p>Are you in the right job for now? Do you enjoy your work?</p>
        <SurveyRatingTemplate leftValue="No" rightValue="Absolutely"name = "2" comFunc = {this.parentFunction}/>
        <p>How stressful do you find your job. Is it giving you life or sucking life out of you?</p>
        <SurveyRatingTemplate leftValue="Sucking" rightValue="Giving"name = "3" comFunc = {this.parentFunction}/>
        <p>Are you focused on your career options or are you leaving them to chance?</p>
        <SurveyRatingTemplate leftValue="Unfocused" rightValue="Focused"name = "4" comFunc = {this.parentFunction}/>
        <p>Do you get good feedback from your manager?</p>
        <SurveyRatingTemplate leftValue="No" rightValue="Yes" name = "5" comFunc = {this.parentFunction}/>
        <p>Do you receive an appropriate financial reward for the work you do?</p>
        <SurveyRatingTemplate leftValue="No" rightValue="Yes" name = "6" comFunc = {this.parentFunction}/>
        <p>Do you feel that you and your work are valued and appreciated?</p>
        <SurveyRatingTemplate leftValue="No" rightValue="Yes" name = "7" comFunc = {this.parentFunction}/>
        <p>Do you work for an organisation that cares about people, including yourself?</p>
        <SurveyRatingTemplate leftValue="No" rightValue="Yes" name = "8" comFunc = {this.parentFunction}/>
        <p>Do you enjoy the company of the people with whom you work?</p>
        <SurveyRatingTemplate leftValue="No" rightValue="Yes" name = "9" comFunc = {this.parentFunction}/>
        <p>What’s the level of morale like in your work group?</p>
        <SurveyRatingTemplate leftValue="Dreadful" rightValue="Fantactic" name = "10" comFunc = {this.parentFunction}/>
        <p>If you want to enjoy your work, do what people who enjoy their work do.</p>

        <span>&nbsp;&nbsp;</span>

        <div className="row" id="row" className="left-align">
        
        <div id="colTotal" >Total Score is:&nbsp;&nbsp;<div style={{display:'inline-flex', borderRadius: 5, border:'2px solid green', paddingLeft:20, paddingRight:20}}>{this.state.num}</div></div>
      
      </div>

        <span>&nbsp;&nbsp;</span>

        <div className="center-align">
        <Link to='/SurveyHistory/CareerSatisfactionProfile'>
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
export default connect(null,mapDispatchToProps)(CareerSatisfactionProfile)