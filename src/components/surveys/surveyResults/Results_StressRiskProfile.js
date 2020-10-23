import React, { Component } from 'react'
import moment from 'moment'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'


class StressRiskProfile extends Component  {  
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
    try{
        return (
            
            <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title" style={{textAlign: "center", fontWeight: "bold"}}>Stress Risk Profile</span>          
                    <table>
                        <thead>
                        <tr>
                            <th>Question</th>
                            <th>Result</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>Rate your ability to manage the stress of your life. The more stressed you are the lower your score</td>
                            <td>{ this.props.survey.Question_1 }/10</td>
                        </tr>
                        <tr>
                            <td>Do you get a good nights sleep? Do you get enough sleep, do you get to sleep quickly, do you sleep like a log and wake up refreshed in the morning?</td>
                            <td>{ this.props.survey.Question_2 }/10</td>
                        </tr>
                        <tr>
                            <td>What was the longest number of consecutive days holiday you had away from home the last 12 months?</td>
                            <td>{ this.props.survey.Question_3 }/10</td>
                        </tr>
                        <tr>
                            <td>Do you keep yourself fit and healthy to the best of your ability?</td>
                            <td>{this.props.survey.Question_4 }/10</td>
                        </tr>
                        <tr>
                            <td>Is there balance in your life? Do you have good distractors that switch you off from being busy and miserable and which give you great pleasure?</td>
                            <td>{ this.props.survey.Question_5 }/10</td>
                        </tr>
                        <tr>
                            <td>Do you take time off at lunch time to get away from your desk and get some fresh air? Score high if you exercise with vigor at lunch time.</td>
                            <td>{ this.props.survey.Question_6 }/10</td>
                        </tr>
                        <tr>
                            <td>What is the average number of hours you work each week - if you have young children include work-work and domestic work?</td>
                            <td>{ this.props.survey.Question_7 }/10</td>
                        </tr>
                        <tr>
                            <td>Are you good at giving back to your self? Do you spend time thinking about your self? Do you give your self time and attention it is craving?</td>
                            <td>{ this.props.survey.Question_8 }/10</td>
                        </tr>
                        <tr>
                            <td>How many times a week do you meditate, for 10 minutes or more?</td>
                            <td>{ this.props.survey.Question_9 }/10</td>
                        </tr>
                        <tr>
                            <td>Are you happy with your family (and romantic) relationships?</td>
                            <td>{ this.props.survey.Question_10 }/10</td>
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

export default StressRiskProfile