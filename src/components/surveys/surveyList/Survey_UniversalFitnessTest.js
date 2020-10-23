/*************************************************
 * Class Name: Universal Fitness Test
 * Created Date: 27/09/2020 
 * Last Edited: 17/10/2020
 * -----------------------------------------------
 * Description:
 * This is the actual survey the user fills out
 *************************************************/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createSurvey } from '../../store/actions/SurveyActions'
import { Link } from 'react-router-dom'
import SurveyRatingTemplateNoColumn4 from '../SurveyRatingTemplateNoColumn4'
import SurveyRatingTemplateNoColumn5 from '../SurveyRatingTemplateNoColumn5'
import SurveyUniversalScoring from '../SurveyUniversalScoring'
import SurveyPointScoring from '../SurveyPointScoring'
import Survey20m from '../Survey20m'

class UniversalFitnessTest extends Component {

  //firebase document states
  firebaseStates = {
    title: 'UniversalFitnessTest', starValue: 'testValue', maximumScore: '80', totalScore: '',
    Question_1: '', Question_2: '', Question_3: '', Question_4: '', Question_5: '', Question_6: '',
    Question_7: '', Question_8: ''
  }

  //local survey states
  state = { 
    num: '0', col1: '0', col2: '0', col3: '0', col4: '0', col5: '0', col6: '0', col7: '0', col8: '0', 
    rate: '0', count:'0', countElement1: 0, countElement2: 0, 
    countElement3: 0, countElement4: 0, countElement5: 0, countElement6: 0, countElement7: 0
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
    /*eval("this.state.col" + n + " = parseInt(e)");
    if(eval("this.state.countElement" + n + "==0")){
      this.counting()
      eval("this.state.countElement" + n + " = 1");
    }*/
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
    //for(var j = 1; j <=12; j++) { eval("this.firebaseStates.Question_" + j + " = this.state.col" + j);}
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
        <h1 class="center">Universal Fitness Test</h1>
        <table style={{border: 'hidden'}}>
          <tr style={{border: 'hidden'}}>
        <td style={{width:'80%'}}>
        <p>20 metre run - number of 20m laps in 5 minutes. This is the classic test of aerobic fitness, superseding the 'beep test'.</p>
        <p>One foot must go beyond the line at the end of each lap.</p>
        <p>It may take you several attempts to work out the best speed to start off with. YOu can walk, shuffle, jog or run. If you're running and you run out of puff you can slow down to a walk.</p>
        <p>If you're in very poor metabolic health, start off with a slow walk and over the weeks and months gradually pick up the pace. Consult your physician if you feel you may be in very poor cardio-vascular health and request a 'proper' cardio-vascular fitness test...</p>
        </td>
        <td>
        <a><img src="../img/20m-min.png" style={{maxWidth: '100%'}}/></a>
        </td>
        </tr>

        <Survey20m
          des01Value="Men"
          des0Value="<22" 
          des1Value="22"
          des2Value="26"
          des3Value="32"
          des4Value="36"
          des5Value="38"
          des6Value="40"
          des7Value="45"
          des8Value="50"
          des9Value="53"
          des10Value="55"
          col01Value="Women"
          col0Value="<20" 
          col1Value="20"
          col2Value="24"
          col3Value="30"
          col4Value="34"
          col5Value="36"
          col6Value="38"
          col7Value="43"
          col8Value="46"
          col9Value="49"
          col10Value="52"
          name = "1" comFunc = {this.parentFunction}/>
        
        <tr style={{border: 'hidden'}}>
          <td>
        <p>Situps - consecutive number of sit-ups until exhaustion - feet held, hands clasping opposite shoulders, coming up so elbows touch the knees, upper back (not head) 'hitting' the ground.</p>
        <p>With feet held, the test becomes a front of body muscle test, Leg muscles, hip flexors and abdominal muscles are all involved in the setup process.</p>
        </td>
        <td>
          <a><img src="../img/situp-min.png" style={{maxWidth:'100%'}}></img></a> 
        </td>
        </tr>
        
        <Survey20m
          col0Value="<5" 
          col1Value="<10"
          col2Value="10"
          col3Value="15"
          col4Value="20"
          col5Value="25"
          col6Value="30"
          col7Value="40"
          col8Value="50"
          col9Value="60"
          col10Value="70"
          name = "2" comFunc = {this.parentFunction}/>
        
        <tr style={{border: 'hidden'}}>
        <td>
        <p>Pressups - consectuive number of press ups until exhaustion - men on toes, women on knees.</p>
        <p>Women make sure that your knees, bottom and shoulders are in a straight line.</p>
        </td>
        <td>
        <a><img src="../img/pushup1-min.png" style={{maxWidth:'100%'}}></img></a>
        <a><img src="../img/pushup2-min.png" style={{maxWidth:'100%'}}></img></a>
        </td>
        </tr>

        <Survey20m
          col0Value="<5" 
          col1Value="<10"
          col2Value="10"
          col3Value="15"
          col4Value="20"
          col5Value="25"
          col6Value="30"
          col7Value="40"
          col8Value="50"
          col9Value="60"
          col10Value="70"
          name = "3" comFunc = {this.parentFunction}/>

        <tr style={{border: 'hidden'}}>
          <td>
        <p>Squats - consecutive number of squats until exhaustion. Bottom must go down to mid-way between knees and ankles. Most people will need to use a heel raise to successfully complete the test.</p>
        <p>The classic test of leg strength</p>
        </td>
        <td>
        <a><img src="../img/squat-min.png" style={{maxWidth:'100%'}}></img></a>
        </td>
        </tr>

        <Survey20m
          col0Value="<5" 
          col1Value="<10"
          col2Value="10"
          col3Value="15"
          col4Value="20"
          col5Value="25"
          col6Value="30"
          col7Value="40"
          col8Value="50"
          col9Value="60"
          col10Value="70"
          name = "4" comFunc = {this.parentFunction}/>
        
        <tr style={{border: 'hidden'}}>
          <td>
        <p>Arm hang (Second) - hanging from a bar until exhaustion.</p>
        <p>Hang with palms facing away from you.</p>
        <p>A large proportion of people are unable to support their own weight at all so be careful and be ready to land safely on your feet if you're hands fail to support you.</p>
        <p>The classic test of hand strength. No need of a grip strength machine.. just you knowing how long you can support your own weight with your hands.</p>
        </td>
        <td>
        <a><img src="../img/armhang-min.png" style={{maxWidth:'100%'}}></img></a>
        </td>
        </tr>

        <Survey20m
          des01Value="Men"
          des0Value="<10" 
          des1Value="10"
          des2Value="20"
          des3Value="25"
          des4Value="30"
          des5Value="35"
          des6Value="40"
          des7Value="50"
          des8Value="60"
          des9Value="80"
          des10Value="100"
          col01Value="Women"
          col0Value="<10" 
          col1Value="10"
          col2Value="15"
          col3Value="20"
          col4Value="25"
          col5Value="30"
          col6Value="35"
          col7Value="40"
          col8Value="50"
          col9Value="60"
          col10Value="80"
          name = "5" comFunc = {this.parentFunction}/>

        <tr style={{border: 'hidden'}}>
          <td>
        <p>Percent body fat (%)</p>
        <p>The gold standard for body composition is percent body fat. Theoretically, there is no need to measure how fat people are because generally speaking the fittey they are the closer they will be to their iteal weight. But having said that, its a useful metric to include in a fitness assessment.</p>
        </td>
        <td>
        <a><img src="../img/bodyfat-min.png" style={{maxWidth:'100%'}}></img></a>
        </td>
        </tr>

        <Survey20m
          des01Value="Men"
          des0Value=">35" 
          des1Value="<35"
          des2Value="<30"
          des3Value="<28"
          des4Value="<26"
          des5Value="<24"
          des6Value="<22"
          des7Value="<20"
          des8Value="<18"
          des9Value="<16"
          des10Value="<14"
          col01Value="Women"
          col0Value=">45" 
          col1Value="<45"
          col2Value="<40"
          col3Value="<38"
          col4Value="<36"
          col5Value="<34"
          col6Value="<32"
          col7Value="<30"
          col8Value="<28"
          col9Value="<26"
          col10Value="<24"
          name = "6" comFunc = {this.parentFunction}/>

        </table>


        <p>SUPPLEMENTARY TESTS</p>
        
        <p>Flexibility</p>
        <p>The thir major fact of fitness is flexibility. Tight muscles move bones out of alignment. Thats the bad news. The good news is that once you have a flexibility training program muscles can move bones back into alignment again; poor function is resorted to good. The body becomes pain free</p>
        <p>Whilst the flexibility tests don't lend themselves to the Universal Fitness Test scoring system, we have included two supplementary tests of flexibility to round out the test battery.</p>
        

        <table style={{border: 'hidden'}}>
          <tr style={{border: 'hidden'}}>
            <td style={{width:'80%'}}>
        <p>Flexibility - sit and reach - test of hamstring flexibility</p>
        <p>In a sitting position, with feet outstretched in front of you, see how far down past your toes you can reach with your fingers. Keep your knees straight.</p>
        </td>
        <td>
        <a><img src="../img/flex-min.png" style={{maxWidth:'100%'}}></img></a>
        </td>
        </tr>
        </table>
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
        

        <table style={{border: 'hidden'}}>
          <tr style={{border: 'hidden'}}>
            <td style={{width:'80%'}}>
        <p>Ability to sit up straight - test of buttock flexibility</p>
        <p>With legs crossed and hands clasped behind your back, see if you can sit up straight. Falling backwards on one of both sides scores 0. If you can only just sit up without falling over score 5.</p>
        </td>
        <td>
        <a><img src="../img/straight-min.png" style={{maxWidth:'100%'}}></img></a>
        </td>
        </tr>
        </table>
        <SurveyRatingTemplateNoColumn5 
        col0Value="Fall over"
        col5Value="Barely"
        col6Value=""
        col7Value="Just"
        col8Value=""
        col9Value=""
        col10Value="Perfect"
        name = "8" comFunc = {this.parentFunction}/>

        <span>&nbsp;&nbsp;</span>

        <div class="row" id="row" className="left-align">
        <div id="colTotal" >Total Score is:&nbsp;&nbsp;<div style={{display:'inline-flex', borderRadius: 5, border:'2px solid green', paddingLeft:20, paddingRight:20}}>{this.state.num}</div></div>
        </div>

        <span>&nbsp;&nbsp;</span>

        <h4>Universal fitness test scoring system</h4>
        <a><img src="../img/scoring-min.png" style={{maxWidth: '100%'}}/></a>
        <p>The award is based on the lowest points scored for a particular test item. For example if you're a woman and complete 38 laps of the 20m run, 30 pressups, 15 situps, 25 squats and hang onto the bar for 30 seconds, the 15 situps count as the lowest score and you qualify for the 'green' award.</p>
        <p>Highlight your best individual scores. To signify your Award, place a tick in the ‘award’ box (on the right hand side of the table) equal to the lowest score you achieved for the individual tests (as per the example below).</p>


        <SurveyUniversalScoring/>

        <span>&nbsp;&nbsp;</span>

        <h5>Fit-for-work standards</h5>
        <p>The Fit-for-Work standards can be matched to suit the nature and demands of the job.</p>
        <p>The gold standard is readily achievable by anyone who has a regular aerobic fitness and strength training program.</p>
        <p>I judge the green standard to be a minimum fitness-for-work qualification. It shows some evidence of a strength training program.  The diamond standard  is readily achievable by people who are highly trained and in excellent physical condition, particularly people in elite forces.</p>

        <span>&nbsp;&nbsp;</span>

        

        <span>&nbsp;&nbsp;</span>

        <div className="center-align">
      
        <Link to='/SurveyHistory/UniversalFitnessTest'>
            <button className="btn waves-effect waves-light" type="submit" name="action" onClick={() => this.submitSurvey()} >
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

/* <Link to='/SurveyHistory/SpecificJointAssessment'>
            <button className="btn waves-effect waves-light disabled" type="submit" name="action" onClick={() => this.submitSurvey()} >
            Submit
                <i className="material-icons right">send</i>
                
            </button>
            </Link>*/

            /**
            <span>&nbsp;&nbsp;</span>
        <h5>Point scoring system</h5>
        <p>You can also score points based on the level achieved for each test item.</p>
        <p>Points received in the example above are:</p>
        
        <SurveyPointScoring/>
        */


const mapDispatchToProps = (dispatch) => {
  return {
    createSurvey: (survey) => dispatch(createSurvey(survey))
  }
}
export default connect(null,mapDispatchToProps)(UniversalFitnessTest)