import React, { Component } from 'react'
import moment from 'moment'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'


class FitnessProfile extends Component  {
render() {
    var rateValue = 0

    if((this.props.survey.totalScore/this.props.survey.maximumScore*100)>=50){
       rateValue = 1;
    }
    if((this.props.survey.totalScore/this.props.survey.maximumScore*100)>=60){
        rateValue = 2;
     }
    if((this.props.survey.totalScore/this.props.survey.maximumScore*100)>=70){
        rateValue = 3;
     }
    if((this.props.survey.totalScore/this.props.survey.maximumScore*100)>=80){
        rateValue = 4;
     }
    if((this.props.survey.totalScore/this.props.survey.maximumScore*100)>=90){
        rateValue = 5;
     }
    try {
        return (
            
            <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title" style={{textAlign: "center", fontWeight: "bold"}}>Fitness Profile</span>          
                    <table>
                        <thead>
                        <tr>
                            <th>Question</th>
                            <th>Result</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>Are you keeping yourself fit and healthy to the best of your ability?</td>
                            <td>{ this.props.survey.Question_1 }/10</td>
                        </tr>
                        <tr>
                            <td>The body is an ecosystem. What was your score on the Health Climate Survey?</td>
                            <td>{ this.props.survey.Question_2 }/10</td>
                        </tr>
                        <tr>
                            <td>Fatness. How close are you to being your ideal weight? Scores based on the
                                number of kilos of body fat over what you consider to be your ideal weight.</td>
                            <td>{ this.props.survey.Question_3 }/10</td>
                        </tr>
                        <tr>
                            <td>How many full squats can you do in 90 seconds. Bottom must get midway between
                                knees and ankles. Use a heel raise if you need to.</td>
                            <td>{this.props.survey.Question_4 }/10</td>
                        </tr>
                        <tr>
                            <td>Upper body strength - press-ups. Number in 90 seconds. Men on toes, women on
                                front of thighs</td>
                            <td>{ this.props.survey.Question_5 }/10</td>
                        </tr>
                        <tr>
                            <td>In a sitting position, with feet outstretched in front of you, see how far down past
                                your toes you can reach with your fingers. Keep you knees straight.</td>
                            <td>{ this.props.survey.Question_6 }/10</td>
                        </tr>
                        <tr>
                            <td>With legs crossed and hands clasped behind your back, see if you can sit up
                                straight. Falling backwards on one or both sides scores 0. If you can only just sit up without
                                falling over score 5.</td>
                            <td>{ this.props.survey.Question_7 }/10</td>
                        </tr>
                        <tr>
                            <td>Aerobic fitness - 5 minute, 20m lap run.</td>
                            <td>{ this.props.survey.Question_8 }/10</td>
                        </tr>
                        <tr>
                            <td>Aerobic Training sessions per week - of at least 30 minutes with heart rate over 120.</td>
                            <td>{ this.props.survey.Question_9 }/10</td>
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

export default FitnessProfile