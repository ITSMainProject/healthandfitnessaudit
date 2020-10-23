/*************************************************
 * Class Name: Metabolic Health Profile
 * Created Date: 27/09/2020 
 * Last Edited: 27/09/2020
 * -----------------------------------------------
 * Description:
 * This is the actual survey the user fills out
 *************************************************/
import React, { Component } from 'react'
import SurveyRatingTemplate from '../SurveyRatingTemplate'
import SurveyRatingTemplateV3 from '../SurveyRatingTemplateV3'
import SurveyRatingTemplateNoColumn3 from '../SurveyRatingTemplateNoColumn3'
import { connect } from 'react-redux'
import { createSurvey } from '../../store/actions/SurveyActions'
import { Link } from 'react-router-dom'
import SurveyRatingTemplateNoColumn3Reverse from '../SurveyRatingTemplateNoColumn3Reverse'
import SurveyRatingTemplateNoColumn4WithDes from '../SurveyRatingTemplateNoColumn4WithDes'
import SurveyRatingTemplateMetabolic from '../SurveyRatingTemplateMetabolic'
import SurveyYesOrNo from '../SurveyYesOrNo'
import SurveyRatingTemplateV4 from '../SurveyRatingTemplateV4'

class MetaBolicHealthProfile extends Component {

  //firebase document states
  firebaseStates = {
    title: 'MetabolicHealthProfile', starValue: 'testValue', maximumScore: '100', totalScore: '',
    Question_1: '', Question_2: '', Question_3: '', Question_4: '', Question_5: '', Question_6: '',
    Question_7: '', Question_8: '',
  }

  //local survey states
  state = { 
    num: '0', col1: '0', col2: '0', col3: '0', col4: '0', col5: '0', col6: '0', col7: '0', col8: '0', rate: '0', count:'0', countElement1: 0, countElement2: 0, 
    countElement3: 0, countElement4: 0, countElement5: 0, countElement6: 0, countElement7: 0, countElement8: 0,
    
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
    //  this.counting()
    //  eval("this.state.countElement" + n + " = 1");
    //}
    switch(n){
      case "1": this.state.col1 = parseInt(e); if(this.state.countElement1 ===0){this.counting(); this.state.countElement1 =1} break;
      case "2": this.state.col2 = parseInt(e); if(this.state.countElement2 ===0){this.counting(); this.state.countElement2 =1} break; 
      case "3": this.state.col3 = parseInt(e); if(this.state.countElement3 ===0){this.counting(); this.state.countElement3 =1} break;
      case "4": this.state.col4 = parseInt(e); if(this.state.countElement4 ===0){this.counting(); this.state.countElement4 =1} break;
      case "5": this.state.col5 = parseInt(e); if(this.state.countElement5 ===0){this.counting(); this.state.countElement5 =1} break;
      case "6": this.state.col6 = parseInt(e); if(this.state.countElement6 ===0){this.counting(); this.state.countElement6 =1} break;
      case "7": this.state.col7 = parseInt(e); if(this.state.countElement7 ===0){this.counting(); this.state.countElement7 =1} break;
      case "8": this.state.col8 = parseInt(e); if(this.state.countElement8 ===0){this.counting(); this.state.countElement8 =1} break;      
   }
    c = parseInt(this.state.col1) + parseInt(this.state.col2) + parseInt(this.state.col3) + parseInt(this.state.col4) + parseInt(this.state.col5) + parseInt(this.state.col6) + parseInt(this.state.col7) + parseInt(this.state.col8)
    this.addFunction(c)     
  }

  submitSurvey() {        
    // change star value
    this.setState({
      rate: this.state.num,
    })

    // set the firebase states to the local survey states and submit a request to create survey in firebase account
    this.firebaseStates.totalScore = this.state.num;
    //for(var j = 1; j <=8; j++) { eval("this.firebaseStates.Question_" + j + " = this.state.col" + j);}
    this.firebaseStates.Question_1 = this.state.col1;
    this.firebaseStates.Question_2 = this.state.col2;
    this.firebaseStates.Question_3 = this.state.col3;
    this.firebaseStates.Question_4 = this.state.col4;
    this.firebaseStates.Question_5 = this.state.col5;
    this.firebaseStates.Question_6 = this.state.col6;
    this.firebaseStates.Question_7 = this.state.col7;
    this.firebaseStates.Question_8 = this.state.col8;
    this.props.createSurvey(this.firebaseStates);

    // redirect user
  }
        
  render() {
    return (
      <div className="container">          
        <h1>Metabolic Health Profile</h1>
        <p>What was your score on the <b> Health, Fitness and Wellbeing profile</b>?</p>
        <SurveyRatingTemplateV3
                col0Value=">120"
                col1Value="120"
                col2Value="100"
                col3Value="80"
                col4Value="70"
                col5Value="60"
                col6Value="50"
                col7Value="40"
                col8Value="30"
                col9Value="20"
                col10Value="<20"
                des0Value="High"
                des10Value="Low"
                 name = "1" comFunc = {this.parentFunction}/>
        <p>
<b>Body Composition </b>
Are you about your <b> ideal weight </b> ? Scores based on number of kilos of body
fat over what you consider to be your ideal weight.
</p>
<SurveyRatingTemplateMetabolic
                col0Value=">20"
                col1Value="<20"
                col2Value="<18"
                col3Value="<16"
                col4Value="<14"
                col5Value="<12"
                col6Value="<10"
                col7Value="<8"
                col8Value="<6"
                col9Value="<4"
                col10Value="<2"
                des0Value="No"
                des10Value="Yes"
                 name = "2" comFunc = {this.parentFunction}/>

<p>
Current weight...... ideal weight......... precent body fat ...........
A resonable % body fat for men is less than 20 and for women less than 30.
</p>
        
        <p><b>Blood Glucose level </b> - mmol/l ....... Preferable fasted. Score 0 if on
medication.</p>
        <SurveyRatingTemplateNoColumn3Reverse
                col0Value=">10"
                col1Value="<10"
                col2Value="<9.0"
                col3Value="<8.5"
                col4Value="<8.0"
                col5Value="<7.5"
                col6Value="<7.0"
                col7Value="<6.5"
                
                col10Value="Less than 6"
                des0Value="Poor"
                des10Value="Good"
                 name = "3" comFunc = {this.parentFunction}/>
        <p><b> Cholesterol </b> level (Unfasted) - mmol/l .........</p>
        <SurveyRatingTemplateV3 
        col0Value=">8.5"
        col1Value="<8.5"
        col2Value="<8.0"
        col3Value="<7.0"
        col4Value="<6.5"
        col5Value="<6.0"
        col6Value="<5.5"
        col7Value="<5.0"
        col8Value="<4.6"
        col9Value="<4.3"
        col10Value="<4"
        des0Value="Poor"
        des10Value="Good"
        name = "4" comFunc = {this.parentFunction}/>
        <p><b>Blood pressure - systolic </b>......./ (The higher figure.)
Normal is 120 for men and 110 - 120 for women. Score 0 if on medication.</p>
        <SurveyRatingTemplateNoColumn3
        des0Value="Poor"
        des10Value="Good"
        col0Value=">160"
        col3Value="<155"
        col4Value="<150"
        col5Value="<145"
        col6Value="<140"
        col7Value="<135"
        col8Value="<130"
        col9Value="<125"
        col10Value="<120"
        name = "5" comFunc = {this.parentFunction}/>
        <p><b>Blood pressure - diastolic </b> ...../ (The lower figure.)
Normal is 80 for men and 70 - 80 for women. Score 0 if on medication.</p>
        <SurveyRatingTemplateNoColumn4WithDes
        des0Value="Poor"
        des10Value="Good"
        col0Value=">100"
        col4Value="<100"
        col5Value="<97"
        col6Value="<94"
        col7Value="<90"
        col8Value="<87"
        col9Value="<84"
        col10Value="<80"
        name = "6" comFunc = {this.parentFunction}/>
        <p>Do you <b>smoke</b>?
If ‘yes’ score zero. If ‘no’, score 10.</p>
        <SurveyYesOrNo leftValue="No" rightValue="Yes" name = "7" comFunc = {this.parentFunction}/>
        <p><b> Aerobic fitness </b> 5 minute, 20m lap run. Laps .....</p>
        <SurveyRatingTemplateV4
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
        col10Value=">40"
        des0Value="Poor"
        des10Value="Good"
         name = "8" comFunc = {this.parentFunction}/>
    
        
        <span>&nbsp;&nbsp;</span>

        <div class="row" id="row" className="left-align">
        
        <div id="colTotal" >Total Score is:&nbsp;&nbsp;<div style={{display:'inline-flex', borderRadius: 5, border:'2px solid green', paddingLeft:20, paddingRight:20}}>{this.state.num}</div></div>
      
      </div>

      <div>
        <p>Any score below 70 is an indication of risk of cardiac malfunction.</p>
        <p>Any score below 7 can be regarded as a 'strike' against you.</p>
        <p>Your metabolic health risk factor score can be improved dramatically with regular, vigorous physical activity, eating from the top of the Hourglass
          and meditation. If you are at high risk we suggest you pay a visit to your fitness practitioner, naturopath or physician. Of course an estimate 
          of low risk may not mean you are immune from metabolic dysfunction!
        </p>
      </div>

        <span>&nbsp;&nbsp;</span>

        <div className="center-align">
        <Link to='/SurveyHistory/MetabolicHealthProfile'>
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
export default connect(null,mapDispatchToProps)(MetaBolicHealthProfile)