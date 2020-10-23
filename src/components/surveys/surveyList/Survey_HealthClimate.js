/*************************************************
 * Class Name: Health Climate
 * Created Date: 27/09/2020 
 * Last Edited: 03/10/2020
 * -----------------------------------------------
 * Description:
 * This is the actual survey the user fills out
 *************************************************/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createSurvey } from '../../store/actions/SurveyActions'
import { Link } from 'react-router-dom'
import SurveyHCYesOrNo from '../SurveyHCYesOrNo'
import SurveyHCRatingTemplate from '../SurveyHCRatingTemplate'



class HealthClimate extends Component {

  //firebase document states
  firebaseStates = {
    title: 'HealthClimate', starValue: 'testValue', maximumScore: '300', totalScore: '',
    Question_1: '', Question_2: '', Question_3: '', Question_4: '', Question_5: '', Question_6: '',
    Question_7: '', Question_8: '', Question_9: '',  Question_10: '',  Question_11: '',  Question_12: '',
    Question_13: '', Question_14: '', Question_15: '',  Question_16: '',  Question_17: '',  Question_18: '',
    Question_19: '', Question_20: '', Question_21: '',  Question_22: '',  Question_23: '',  Question_24: '',
    Question_25: '', Question_26: '', Question_27: '',  Question_28: '',  Question_29: '',  Question_30: '',
  }

  //local survey states
  state = { 
    num: '0', col1: '0', col2: '0', col3: '0', col4: '0', col5: '0', col6: '0', col7: '0', col8: '0', 
    col9: '0', col10: '0', col11: '0', col12: '0', col13: '0', col14: '0', col15: '0', col16: '0', col17: '0', col18: '0', col19: '0', col20: '0', 
    col21: '0', col22: '0', col23: '0', col24: '0', col25: '0', col26: '0', 
    col27: '0', col28: '0', col29: '0', col30: '0', rate: '0', count:'0', countElement1: 0, countElement2: 0, 
    countElement3: 0, countElement4: 0, countElement5: 0, countElement6: 0, countElement7: 0, countElement8: 0,
    countElement9: 0, countElement10: 0, countElement11: 0, countElement12: 0,countElement13: 0, countElement14: 0,
    countElement15: 0, countElement16: 0, countElement17: 0, countElement18: 0,countElement19: 0, countElement20: 0,
    countElement21: 0, countElement22: 0, countElement23: 0, countElement24: 0,countElement25: 0, countElement26: 0,
    countElement27: 0, countElement28: 0, countElement29: 0, countElement30: 0,
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
    case "11": this.state.col11 = parseInt(e); if(this.state.countElement11 ===0){this.counting(); this.state.countElement11 =1} break;
    case "12": this.state.col12 = parseInt(e); if(this.state.countElement12 ===0){this.counting(); this.state.countElement12 =1} break;
    case "13": this.state.col13 = parseInt(e); if(this.state.countElement13 ===0){this.counting(); this.state.countElement13 =1} break;
    case "14": this.state.col14 = parseInt(e); if(this.state.countElement14 ===0){this.counting(); this.state.countElement14 =1} break;
    case "15": this.state.col15 = parseInt(e); if(this.state.countElement15 ===0){this.counting(); this.state.countElement15 =1} break;
    case "16": this.state.col16 = parseInt(e); if(this.state.countElement16 ===0){this.counting(); this.state.countElement16 =1} break;
    case "17": this.state.col17 = parseInt(e); if(this.state.countElement17 ===0){this.counting(); this.state.countElement17 =1} break;
    case "18": this.state.col18 = parseInt(e); if(this.state.countElement18 ===0){this.counting(); this.state.countElement18 =1} break;
    case "19": this.state.col19 = parseInt(e); if(this.state.countElement19 ===0){this.counting(); this.state.countElement19 =1} break;
    case "20": this.state.col20 = parseInt(e); if(this.state.countElement20 ===0){this.counting(); this.state.countElement20 =1} break; 
    case "21": this.state.col21 = parseInt(e); if(this.state.countElement21 ===0){this.counting(); this.state.countElement21 =1} break;
    case "22": this.state.col22 = parseInt(e); if(this.state.countElement22 ===0){this.counting(); this.state.countElement22 =1} break; 
    case "23": this.state.col23 = parseInt(e); if(this.state.countElement23 ===0){this.counting(); this.state.countElement23 =1} break;
    case "24": this.state.col24 = parseInt(e); if(this.state.countElement24 ===0){this.counting(); this.state.countElement24 =1} break;
    case "25": this.state.col25 = parseInt(e); if(this.state.countElement25 ===0){this.counting(); this.state.countElement25 =1} break;
    case "26": this.state.col26 = parseInt(e); if(this.state.countElement26 ===0){this.counting(); this.state.countElement26 =1} break;
    case "27": this.state.col27 = parseInt(e); if(this.state.countElement27 ===0){this.counting(); this.state.countElement27 =1} break;
    case "28": this.state.col28 = parseInt(e); if(this.state.countElement28 ===0){this.counting(); this.state.countElement28 =1} break;
    case "29": this.state.col29 = parseInt(e); if(this.state.countElement29 ===0){this.counting(); this.state.countElement29 =1} break;
    case "30": this.state.col30 = parseInt(e); if(this.state.countElement30 ===0){this.counting(); this.state.countElement30 =1} break;       
 }
    c = parseInt(this.state.col1) + parseInt(this.state.col2) + parseInt(this.state.col3) + parseInt(this.state.col4) + parseInt(this.state.col5) + parseInt(this.state.col6) + parseInt(this.state.col7) + parseInt(this.state.col8) + parseInt(this.state.col9) + parseInt(this.state.col10) + parseInt(this.state.col11) + parseInt(this.state.col12) + parseInt(this.state.col13) + parseInt(this.state.col14) + parseInt(this.state.col15) + parseInt(this.state.col16) + parseInt(this.state.col17) + parseInt(this.state.col18) + parseInt(this.state.col19) + parseInt(this.state.col20) + parseInt(this.state.col21) + parseInt(this.state.col22) + parseInt(this.state.col23) + parseInt(this.state.col24) + parseInt(this.state.col25) + parseInt(this.state.col26) + parseInt(this.state.col27) + parseInt(this.state.col28) + parseInt(this.state.col29) + parseInt(this.state.col30)
    this.addFunction(c)     
  }

  submitSurvey() {        

    // set the firebase states to the local survey states and submit a request to create survey in firebase account
    this.firebaseStates.totalScore = this.state.num;
    //for(var j = 1; j <=30; j++) { eval("this.firebaseStates.Question_" + j + " = this.state.col" + j);}
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
    this.firebaseStates.Question_11 = this.state.col11;
    this.firebaseStates.Question_12 = this.state.col12;
    this.firebaseStates.Question_13 = this.state.col13;
    this.firebaseStates.Question_14 = this.state.col14;
    this.firebaseStates.Question_15 = this.state.col15;
    this.firebaseStates.Question_16 = this.state.col16;
    this.firebaseStates.Question_17 = this.state.col17;
    this.firebaseStates.Question_18 = this.state.col18;
    this.firebaseStates.Question_19 = this.state.col19;
    this.firebaseStates.Question_20 = this.state.col20;
    this.firebaseStates.Question_21 = this.state.col21;
    this.firebaseStates.Question_22 = this.state.col22;
    this.firebaseStates.Question_23 = this.state.col23;
    this.firebaseStates.Question_24 = this.state.col24;
    this.firebaseStates.Question_25 = this.state.col25;
    this.firebaseStates.Question_26 = this.state.col26;
    this.firebaseStates.Question_27 = this.state.col27;
    this.firebaseStates.Question_28 = this.state.col28;
    this.firebaseStates.Question_29 = this.state.col29;
    this.firebaseStates.Question_30 = this.state.col30;
    this.props.createSurvey(this.firebaseStates);

    // redirect user
  }
        
  render() {
    return (
      <div className="container">          
        <h1>Health Climate Survey</h1>
        <h6>The greater the symptom, the higher the score. (A low score is a good score)</h6>
        <p><b> Headaches (including migraines) </b></p>
        <SurveyHCRatingTemplate leftValue = "None" secondValue="Not much" thirdValue="A fair bit" rightValue = "A lot" name = "1" comFunc = {this.parentFunction}/>
        <p><b> Lack of energy and vitality </b></p>
        <SurveyHCRatingTemplate leftValue = "None" secondValue="Not much" thirdValue="A fair bit" rightValue = "A lot" name = "2" comFunc = {this.parentFunction}/>
        <p><b>Candida - jock itch, thrush, tinea, furry tongue</b></p>
        <SurveyHCRatingTemplate leftValue = "None" secondValue="Not much" thirdValue="A fair bit" rightValue = "A lot" name = "3" comFunc = {this.parentFunction}/>
        <p><b>Poor sleep. (Score 10 if on medication)</b></p>
        <SurveyHCRatingTemplate leftValue = "No" secondValue="Not much" thirdValue="A fair bit" rightValue = "On medication" name = "4" comFunc = {this.parentFunction}/>
        <p><b>Snoring and/or sleep apnoea (use gas mask, score 10)</b></p>
        <SurveyHCRatingTemplate leftValue = "No" secondValue="Not much" thirdValue="A fair bit" rightValue = "On medication" name = "5" comFunc = {this.parentFunction}/>
        <p><b>Musculo-skeletal dysfunction: joint and muscle pain </b></p>
        <SurveyHCRatingTemplate leftValue = "None" secondValue="Not much" thirdValue="A fair bit" rightValue = "A lot" name = "6" comFunc = {this.parentFunction}/>
        <p><b>Frequent colds, flu and sinus </b></p>
        <SurveyHCRatingTemplate leftValue = "None" secondValue="Not much" thirdValue="A fair bit" rightValue = "A lot" name = "7" comFunc = {this.parentFunction}/>
        <p><b>Unsettled stomach, reflux. (If on medication score 10)</b></p>
        <SurveyHCRatingTemplate leftValue = "No" secondValue="Not much" thirdValue="A fair bit" rightValue = "On medication" name = "8" comFunc = {this.parentFunction}/>
        <p><b>Overweight -1 point for every 2kg overweight</b></p>
        <SurveyHCRatingTemplate leftValue = "None" secondValue="Not much" thirdValue="A fair bit" rightValue = "A lot" name = "9" comFunc = {this.parentFunction}/>
        <p><b>Irritable bowel, constipation, diarrhoea, piles ... </b></p>
        <SurveyHCRatingTemplate leftValue = "None" secondValue="Not much" thirdValue="A fair bit" rightValue = "A lot" name = "10" comFunc = {this.parentFunction}/>
        <p><b>Shortness of breath from asthma</b></p>
        <SurveyHCRatingTemplate leftValue = "None" secondValue="Not much" thirdValue="A fair bit" rightValue = "A lot" name = "11" comFunc = {this.parentFunction}/>
        <p><b>Low level of fitness*</b></p>
        <SurveyHCRatingTemplate leftValue = "None" secondValue="Not much" thirdValue="A fair bit" rightValue = "A lot" name = "12" comFunc = {this.parentFunction}/>
        <p><b>Chest pain, palpitations</b></p>
        <SurveyHCRatingTemplate leftValue = "None" secondValue="Not much" thirdValue="A fair bit" rightValue = "A lot" name = "13" comFunc = {this.parentFunction}/>
        <p><b>Rashes, zits, skin outbreaks, psoriasis, itchy skin</b></p>
        <SurveyHCRatingTemplate leftValue = "None" secondValue="Not much" thirdValue="A fair bit" rightValue = "A lot" name = "14" comFunc = {this.parentFunction}/>
        <p><b>Mouth ulcers, cold sore... </b></p>
        <SurveyHCRatingTemplate leftValue = "None" secondValue="Not much" thirdValue="A fair bit" rightValue = "A lot" name = "15" comFunc = {this.parentFunction}/>
        <p><b>Elevated blood pressure (score 10 if on medication)</b></p>
        <SurveyHCRatingTemplate leftValue = "None" secondValue="Not much" thirdValue="A fair bit" rightValue = "On medication" name = "16" comFunc = {this.parentFunction}/>
        <p><b>Elevated blood cholesterol (Score 10 if on medication)</b></p>
        <SurveyHCRatingTemplate leftValue = "None" secondValue="Not much" thirdValue="A fair bit" rightValue = "On medication" name = "17" comFunc = {this.parentFunction}/>
        <p><b>Elevated blood glucose (Score 10 if on medication)</b></p>
        <SurveyHCRatingTemplate leftValue = "None" secondValue="Not much" thirdValue="A fair bit" rightValue = "On medication" name = "18" comFunc = {this.parentFunction}/>
        <p><b>Shakes, nervous tics and mannerisms</b></p>
        <SurveyHCRatingTemplate leftValue = "None" secondValue="Not much" thirdValue="A fair bit" rightValue = "A lot" name = "19" comFunc = {this.parentFunction}/>
        <p><b>Grinding teeth</b></p>
        <SurveyHCRatingTemplate leftValue = "None" secondValue="Not much" thirdValue="A fair bit" rightValue = "A lot" name = "20" comFunc = {this.parentFunction}/>
        <p><b>Drinking too much alcohol (2 points per drink/day)</b></p>
        <SurveyHCRatingTemplate leftValue = "None" secondValue="Not much" thirdValue="A fair bit" rightValue = "A lot" name = "21" comFunc = {this.parentFunction}/>
        <p><b>Smoking too many cigarettes (1 point per cigarette per day)</b></p>
        <SurveyHCRatingTemplate leftValue = "None" secondValue="Not much" thirdValue="A fair bit" rightValue = "A lot" name = "22" comFunc = {this.parentFunction}/>
        <p><b>Drinking too much caffeine ( 1 point per cup per day)</b></p>
        <SurveyHCRatingTemplate leftValue = "None" secondValue="Not much" thirdValue="A fair bit" rightValue = "A lot" name = "23" comFunc = {this.parentFunction}/>
        <p><b>Anxious about life, insecure, apprehensive about the future</b></p>
        <SurveyHCRatingTemplate leftValue = "No" secondValue="Not much" thirdValue="A fair bit" rightValue = "Yes" name = "24" comFunc = {this.parentFunction}/>
        <p><b>Are you depressed? (Score 10 if on medication)</b></p>
        <SurveyHCRatingTemplate leftValue = "No" secondValue="Not much" thirdValue="A fair bit" rightValue = "Yes" name = "25" comFunc = {this.parentFunction}/>
        <p><b>Are you in the wrong job?</b></p>
        <SurveyHCRatingTemplate leftValue = "No" secondValue="Not much" thirdValue="A fair bit" rightValue = "Yes" name = "26" comFunc = {this.parentFunction}/>
        <p><b>Do you feel under-appreciated at work?</b></p>
        <SurveyHCRatingTemplate leftValue = "No" secondValue="Not much" thirdValue="A fair bit" rightValue = "Yes" name = "27" comFunc = {this.parentFunction}/>
        <p><b>Do you have a poor work/life balance?</b></p>
        <SurveyHCRatingTemplate leftValue = "None" secondValue="Not much" thirdValue="A fair bit" rightValue = "A lot" name = "28" comFunc = {this.parentFunction}/>
        <p><b>Are you unhappy with your family life?</b></p>
        <SurveyHCRatingTemplate leftValue = "No" secondValue="Not much" thirdValue="A fair bit" rightValue = "Yes" name = "29" comFunc = {this.parentFunction}/>
        <p><b>Are you unhappy with your financial status?</b></p>
        <SurveyHCRatingTemplate leftValue = "No" secondValue="Not much" thirdValue="A fair bit" rightValue = "Yes" name = "30" comFunc = {this.parentFunction}/>
        
        <span>&nbsp;&nbsp;</span>
        <div class="row" id="row" className="left-align">
        
        <div id="colTotal" >Total Score is:&nbsp;&nbsp;<div style={{display:'inline-flex', borderRadius: 5, border:'2px solid green', paddingLeft:20, paddingRight:20}}>{this.state.num}</div></div>
      
      </div>

        <span>&nbsp;&nbsp;</span>

        <div className="center-align">
        <Link to='/SurveyHistory/HealthClimate'>
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
export default connect(null,mapDispatchToProps)(HealthClimate)