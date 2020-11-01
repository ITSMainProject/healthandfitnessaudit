/*************************************************
 * Class Name: Musculoskeletal Survey
 * Created Date: 27/09/2020 
 * Last Edited: 03/10/2020
 * -----------------------------------------------
 * Description:
 * This is the actual survey the user fills out
 *************************************************/
import React, { Component } from 'react'
import SurveyRatingTemplate from '../SurveyRatingTemplate'
import SurveyRatingTemplateV2 from '../SurveyRatingTemplateV2'
import { connect } from 'react-redux'
import { createSurvey } from '../../store/actions/SurveyActions'
import { Link } from 'react-router-dom'
import SurveyRatingTemplateNoColumn4 from '../SurveyRatingTemplateNoColumn4'
import SurveyRatingTemplateNoColumn5 from '../SurveyRatingTemplateNoColumn5'

class musculoskeletal extends Component {

  //firebase document states
  firebaseStates = {
    title: 'Musculoskeletal', starValue: 'testValue', maximumScore: '100', totalScore: '',
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
    //eval("this.state.col" + n + " = parseInt(e)");
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
    // change star value
    this.setState({
      rate: this.state.num,
    })

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
        <h1>Musculo Skeletal Survey</h1>
        <p><b>Current Condition</b>
<div></div>
How would you rate the current condition of your musculoskeletal system?</p>
        <SurveyRatingTemplate leftValue="Dreadful" rightValue="Excellent" name = "1" comFunc = {this.parentFunction}/>
        <p><b>Body Composition.</b>
<div></div>
How close are you to your <b>ideal weight</b>? Scores based on kilos over your ideal
weight.</p>
        <SurveyRatingTemplateV2 
        col0Value=">20" 
        col1Value="20" 
        col2Value="18"
        col3Value="16"
        col4Value="14"
        col5Value="12"
        col6Value="10"
        col7Value="8"
        col8Value="6"
        col9Value="4"
        col10Value="2kg"
        name = "2" comFunc = {this.parentFunction}/>
        <p><b>Lower body strength - squat</b>
<div></div>
How many full squats can you do in 60 seconds? Bottom must get at least half way
between knees and your heels, use a heal raise if you need to.</p>
      <SurveyRatingTemplateV2 
        col0Value=">5" 
        col1Value="5" 
        col2Value="8"
        col3Value="10"
        col4Value="13"
        col5Value="15"
        col6Value="18"
        col7Value="20"
        col8Value="23"
        col9Value="15"
        col10Value="30" 
        name = "3" comFunc = {this.parentFunction}/>
        <p><b>Lower body strength</b>
<div></div>
sit-ups with feet held in 60 seconds</p>
      <SurveyRatingTemplateV2 
        col0Value=">5" 
        col1Value="5" 
        col2Value="8"
        col3Value="10"
        col4Value="13"
        col5Value="15"
        col6Value="18"
        col7Value="20"
        col8Value="23"
        col9Value="15"
        col10Value="30"  
        name = "4" comFunc = {this.parentFunction}/>
        <p><b>Upper body strength</b>
<div></div>
press-ups in 60 seconds, Men on toes, women on front of thighs with knees, bottom
and shoulders in a straight line.</p>
      <SurveyRatingTemplateV2 
        col0Value=">5" 
        col1Value="5" 
        col2Value="8"
        col3Value="10"
        col4Value="13"
        col5Value="15"
        col6Value="18"
        col7Value="20"
        col8Value="23"
        col9Value="15"
        col10Value="30"  
        name = "5" comFunc = {this.parentFunction}/>
        <p><b>Sit and reach - hamstring flexibility</b>
Sitting on the floor, with feet outstretched in front of you, see how far down past your
toes you can reach with your fingers. Keep your knees straight.</p>
        <SurveyRatingTemplateNoColumn4
         col0Value="Can't touch" 
         col4Value="Fingers"
         col5Value=""
         col6Value=""
         col7Value="Palm"
         col8Value=""
         col9Value=""
         col10Value="Wrist"
        name = "6" comFunc = {this.parentFunction}/>
        <p><b>Ability to sit up straight with legs crossed - buttock flexibility</b>
With legs crossed and hands clasped behind your back, see if you can sit up straight.
Just being able to sit up with hands clasped scores 7/10. Sitting up exceptionally straight with a
hollow in your lower back scores 10/10. Falling backwards on one or both sides scores 0.</p>
        <SurveyRatingTemplateNoColumn5 
        col0Value="Fall over"
        col5Value="Barely"
        col6Value=""
        col7Value="Just"
        col8Value=""
        col9Value=""
        col10Value="Perfect"
        name = "7" comFunc = {this.parentFunction}/>
        <p><b>Shoulder function </b> - wall test
Stand with your back to the wall. Place your hands in the surrender position with the
Back of your forearms, wrists and hands flat back on the wall. Score 10 if you can do it with
ease. 7/10 is just getting the ‘flat position’. Score lower if you can’t do it at all.</p>
        <SurveyRatingTemplate name = "8" comFunc = {this.parentFunction}/>
        <p><b>Strength training behaviour </b>
Do you have a regular and systematic strength training program either at home or at
the gym. Sessions per week.</p>
        <SurveyRatingTemplate secondValue="1" thirdValue="2" rightValue="3"  name = "9" comFunc = {this.parentFunction}/>
        <p><b>Flexibility training behaviour</b>
Do you have a regular and systematic flexibility training program either at home or at
the gym. It may include yoga, body balance, Pilates ... Sessions per week.</p>
        <SurveyRatingTemplate secondValue="1" thirdValue="2" rightValue="3" name = "10" comFunc = {this.parentFunction}/>
        
        <span>&nbsp;&nbsp;</span>

        <div class="row" id="row" className="left-align">
        
        <div id="colTotal" >Total Score is:&nbsp;&nbsp;<div style={{display:'inline-flex', borderRadius: 5, border:'2px solid green', paddingLeft:20, paddingRight:20}}>{this.state.num}</div></div>
      
      </div>

      <div>
        <p>The 'pass mark' is 70/100</p>
        <p>For more information click <a href="http://www.globalbackcare.com" target="_blank" URL> here </a></p>
      </div>

        <span>&nbsp;&nbsp;</span>

        <div className="center-align">
        <Link to='/SurveyHistory/Musculoskeletal'>
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
export default connect(null,mapDispatchToProps)(musculoskeletal)