/*************************************************
 * Class Name: Fitness Profile
 * Created Date: 27/09/2020 
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
import SurveyRatingTemplateV2 from '../SurveyRatingTemplateV2'
import SurveyRatingTemplateNoColumn4 from '../SurveyRatingTemplateNoColumn4'
import SurveyRatingTemplateNoColumn5 from '../SurveyRatingTemplateNoColumn5'
import SurveyRatingTemplateFitnessV3 from '../SurveyRatingTemplateFitnessV3'


class FitnessProfile extends Component {

  //firebase document states
  firebaseStates = {
    title: 'FitnessProfile', starValue: 'testValue', maximumScore: '100', totalScore: '',
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
   //   eval("this.state.countElement" + n + " = 1");
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
        <h1>Fitness Profile</h1>
        <p><b>Are you keeping yourself fit and healthy to the best of your ability?</b></p>
        <SurveyRatingTemplate leftValue="No" rightValue="Yes" name = "1" comFunc = {this.parentFunction}/>
        <p><b>The body is an ecosystem. What was your score on the Health Climate Survey?
</b></p>
        <SurveyRatingTemplateV2
         col0Value=">120" 
         col1Value="110" 
         col2Value="90"
         col3Value="80"
         col4Value="70"
         col5Value="60"
         col6Value="50"
         col7Value="40"
         col8Value="30"
         col9Value="20"
         col10Value="<20"  
         name = "2" comFunc = {this.parentFunction}/>
        <p><b>Fatness. How close are you to being your ideal weight? Scores based on the
number of kilos of body fat over what you consider to be your ideal weight.</b></p>
        <SurveyRatingTemplateFitnessV3
        top0Value=">Kg over ideal wt" 

        top3Value="<25"
        top4Value="<20"
        top5Value="<15"
        top6Value="<10"
        top7Value="<8"
        top8Value="<6"
        top9Value="<4"
        top10Value="<2"  

        des0Value="% fat men" 

        des3Value="<35"
        des4Value="<30"
        des5Value="<28"
        des6Value="<26"
        des7Value="<24"
        des8Value="<22"
        des9Value="<20"
        des10Value="<18"  

        col0Value="% fat women" 

        col3Value="<45"
        col4Value="<40"
        col5Value="<38"
        col6Value="<36"
        col7Value="<34"
        col8Value="<32"
        col9Value="<30"
        col10Value="<28"  
        name = "3" comFunc = {this.parentFunction}/>
        <p><b>How many full squats can you do in 90 seconds. Bottom must get midway between
knees and ankles. Use a heel raise if you need to. </b></p>
        <SurveyRatingTemplateNoColumn4
        col0Value="<7" 
        col4Value="7"
        col5Value="10"
        col6Value="15"
        col7Value="20"
        col8Value="23"
        col9Value="25"
        col10Value="30"
         name = "4" comFunc = {this.parentFunction}/>
        <p><b>Abdominal strength - sit-ups </b></p>
        <SurveyRatingTemplateNoColumn4
        col0Value="<7" 
        col4Value="7"
        col5Value="10"
        col6Value="15"
        col7Value="20"
        col8Value="23"
        col9Value="25"
        col10Value="30"
         name = "5" comFunc = {this.parentFunction}/>
        <p><b>Upper body strength - press-ups. Number in 90 seconds. Men on toes, women on
front of thighs</b></p>
        <SurveyRatingTemplateNoColumn4
        col0Value="<7" 
        col4Value="7"
        col5Value="10"
        col6Value="15"
        col7Value="20"
        col8Value="23"
        col9Value="25"
        col10Value="30"
         name = "6" comFunc = {this.parentFunction}/>
        <p><b>Flexibility - sit and reach</b>
<b>In a sitting position, with feet outstretched in front of you, see how far down past
your toes you can reach with your fingers. Keep you knees straight. </b></p>
        <SurveyRatingTemplateNoColumn4
        col0Value="Can't touch" 
        col4Value="Fingers"
        col5Value=""
        col6Value=""
        col7Value="Palm"
        col8Value=""
        col9Value=""
        col10Value="Wrist"
         name = "7" comFunc = {this.parentFunction}/>
        <p><b>Ability to sit up straight</b>
<b>With legs crossed and hands clasped behind your back, see if you can sit up
straight. Falling backwards on one or both sides scores 0. If you can only just sit up without
falling over score 5.</b></p>
        <SurveyRatingTemplateNoColumn5
        col0Value="Fall over"
        col5Value="Barely"
        col6Value=""
        col7Value="Just"
        col8Value=""
        col9Value=""
        col10Value="Perfect"
         name = "8" comFunc = {this.parentFunction}/>
        <p><b>Aerobic fitness - 5 minute, 20m lap run.</b></p>
        <SurveyRatingTemplateV2
        col0Value="<22"
        col1Value="22"
        col2Value="24"
        col3Value="26"
        col4Value="28"
        col5Value="30"
        col6Value="32"
        col7Value="34"
        col8Value="36"
        col9Value="38"
        col10Value="40"
        name = "9" comFunc = {this.parentFunction}/>
        <p><b>Aerobic Training sessions per week - of at least 30 minutes with heart rate over
120. </b></p>
        <SurveyRatingTemplateV2
        col0Value=""
        col1Value=""
        col2Value="1"
        col3Value=""
        col4Value="2"
        col5Value=""
        col6Value="3"
        col7Value=""
        col8Value="4"
        col9Value=""
        col10Value="5" 
        name = "10" comFunc = {this.parentFunction}/>
        
        <span>&nbsp;&nbsp;</span>

        <div class="row" id="row" className="left-align">
        
        <div id="colTotal" >Total Score is:&nbsp;&nbsp;<div style={{display:'inline-flex', borderRadius: 5, border:'2px solid green', paddingLeft:20, paddingRight:20}}>{this.state.num}</div></div>
      
      </div>

        <span>&nbsp;&nbsp;</span>

        <div className="center-align">
        <Link to='/SurveyHistory/FitnessProfile'>
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
export default connect(null,mapDispatchToProps)(FitnessProfile)