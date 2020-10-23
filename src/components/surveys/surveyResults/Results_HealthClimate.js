import React, { Component } from 'react'
import moment from 'moment'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class HealthClimate extends Component  { 
render() {
    var rateValue = 0

    if((this.props.survey.totalScore/this.props.survey.maximumScore*100)<=50){
       rateValue = 1;
    }
    if((this.props.survey.totalScore/this.props.survey.maximumScore*100)<=40){
        rateValue = 2;
     }
    if((this.props.survey.totalScore/this.props.survey.maximumScore*100)<=30){
        rateValue = 3;
     }
    if((this.props.survey.totalScore/this.props.survey.maximumScore*100)<=20){
        rateValue = 4;
     }
    if((this.props.survey.totalScore/this.props.survey.maximumScore*100)<=10){
        rateValue = 5;
     }
    try{
        return (
            
            <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title" style={{textAlign: "center", fontWeight: "bold"}}>Health Climate Profile</span>          
                    <table>
                        <thead>
                        <tr>
                            <th>Question</th>
                            <th>Result</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>Headaches (including migraines)</td>
                            <td>{ this.props.survey.Question_1 }/10</td>
                        </tr>
                        <tr>
                            <td>Lack of energy and vitality</td>
                            <td>{ this.props.survey.Question_2 }/10</td>
                        </tr>
                        <tr>
                            <td>Candida - jock itch, thrush, tinea, furry tongue</td>
                            <td>{ this.props.survey.Question_3 }/10</td>
                        </tr>
                        <tr>
                            <td>Poor sleep. (Score 10 if on medication)</td>
                            <td>{this.props.survey.Question_4 }/10</td>
                        </tr>
                        <tr>
                            <td>Snoring and/or sleep apnoea (use gas mask, score 10)</td>
                            <td>{ this.props.survey.Question_5 }/10</td>
                        </tr>
                        <tr>
                            <td>Musculo-skeletal dysfunction: joint and muscle pain</td>
                            <td>{ this.props.survey.Question_6 }/10</td>
                        </tr>
                        <tr>
                            <td>Frequent colds, flu and sinus</td>
                            <td>{ this.props.survey.Question_7 }/10</td>
                        </tr>
                        <tr>
                            <td>Unsettled stomach, reflux. (If on medication score 10)</td>
                            <td>{ this.props.survey.Question_8 }/10</td>
                        </tr>
                        <tr>
                            <td>Overweight -1 point for every 2kg overweight</td>
                            <td>{ this.props.survey.Question_9 }/10</td>
                        </tr>
                        <tr>
                            <td>Irritable bowel, constipation, diarrhoea, piles ... </td>
                            <td>{ this.props.survey.Question_10 }/10</td>
                        </tr>
                        <tr>
                            <td>Shortness of breath from asthma</td>
                            <td>{ this.props.survey.Question_11 }/10</td>
                        </tr>
                        <tr>
                            <td>Low level of fitness*</td>
                            <td>{ this.props.survey.Question_12 }/10</td>
                        </tr>
                        <tr>
                            <td>Chest pain, palpitations</td>
                            <td>{ this.props.survey.Question_13 }/10</td>
                        </tr>
                        <tr>
                            <td>Rashes, zits, skin outbreaks, psoriasis, itchy skin</td>
                            <td>{ this.props.survey.Question_14 }/10</td>
                        </tr>
                        <tr>
                            <td>Mouth ulcers, cold sore...</td>
                            <td>{ this.props.survey.Question_15 }/10</td>
                        </tr>
                        <tr>
                            <td>Elevated blood pressure (score 10 if on medication)</td>
                            <td>{this.props.survey.Question_16 }/10</td>
                        </tr>
                        <tr>
                            <td>Elevated blood cholesterol (Score 10 if on medication)</td>
                            <td>{ this.props.survey.Question_17 }/10</td>
                        </tr>
                        <tr>
                            <td>Elevated blood glucose (Score 10 if on medication)</td>
                            <td>{ this.props.survey.Question_18 }/10</td>
                        </tr>
                        <tr>
                            <td>Shakes, nervous tics and mannerisms</td>
                            <td>{ this.props.survey.Question_19 }/10</td>
                        </tr>
                        <tr>
                            <td>Grinding teeth</td>
                            <td>{ this.props.survey.Question_20 }/10</td>
                        </tr>
                        <tr>
                            <td>Drinking too much alcohol (2 points per drink/day)</td>
                            <td>{ this.props.survey.Question_21 }/10</td>
                        </tr>
                        <tr>
                            <td>Smoking too many cigarettes (1 point per cigarette per day)</td>
                            <td>{ this.props.survey.Question_22 }/10</td>
                        </tr>
                        <tr>
                            <td>Drinking too much caffeine ( 1 point per cup per day)</td>
                            <td>{ this.props.survey.Question_23 }/10</td>
                        </tr>
                        <tr>
                            <td>Anxious about life, insecure, apprehensive about the future</td>
                            <td>{ this.props.survey.Question_24 }/10</td>
                        </tr>
                        <tr>
                            <td>Are you depressed? (Score 10 if on medication)</td>
                            <td>{ this.props.survey.Question_25 }/10</td>
                        </tr>
                        <tr>
                            <td>Are you in the wrong job?</td>
                            <td>{ this.props.survey.Question_26 }/10</td>
                        </tr>
                        <tr>
                            <td>Do you feel under-appreciated at work?</td>
                            <td>{ this.props.survey.Question_27 }/10</td>
                        </tr>
                        <tr>
                            <td>Do you have a poor work/life balance?</td>
                            <td>{ this.props.survey.Question_28 }/10</td>
                        </tr>
                        <tr>
                            <td>Are you unhappy with your family life?</td>
                            <td>{ this.props.survey.Question_29 }/10</td>
                        </tr>
                        <tr>
                            <td>Are you unhappy with your financial status?</td>
                            <td>{ this.props.survey.Question_30 }/10</td>
                        </tr>
                        </tbody>
                    </table>      
                </div>
                        <div style={{textAlign: "center"}}className="card-action grey lighten-4 grey-text">
                            <div>Results submitted: {moment(this.props.survey.createdDate.toDate()).format('LLLL')}</div>
                            <div>Submitted by: {this.props.survey.authorFirstName}  {this.props.survey.authorLastName}</div>
                            <div>Total score: {this.props.survey.totalScore + '/' + this.props.survey.maximumScore} </div>
                            <Rater interactive={false} total={5} rating={rateValue} />
                            <div></div>
                            <div>&nbsp;</div>
                            <a onClick={() => this.props.publishPDF()} className="waves-effect waves-light btn">Download Results</a> 
                        </div>
                    </div>
                </div>
            )
        }
        catch{
            return(
                <div style={{textAlign: 'center'}} className = "container">      
                    <div className="col s12 m7">
                        <div className="card horizontal">
    
                            <div className="card-stacked">
                                <div className="card-content">
                                    <p>Unable to load page</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }  
    }
}

export default HealthClimate