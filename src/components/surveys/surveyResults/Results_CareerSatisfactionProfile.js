import React, { Component } from 'react'
import moment from 'moment'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class CareerSatisfactionProfile extends Component  {
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
                    <span className="card-title" style={{textAlign: "center", fontWeight: "bold"}}>Career Satisfaction Profile</span>          
                    <table>
                        <thead>
                        <tr>
                            <th>Question</th>
                            <th>Result</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>How close are you to doing the job you’d really love to be doing? This is the job
                                you’d love to do so much you’d do it for nothing, but which you did so well you’d be paid
                                handsomely.</td>
                            <td>{ this.props.survey.Question_1 }/10</td>
                        </tr>
                        <tr>
                            <td>Are you in the right job for now? Do you enjoy your work?</td>
                            <td>{ this.props.survey.Question_2 }/10</td>
                        </tr>
                        <tr>
                            <td>How stressful do you find your job. Is it giving you life or sucking life out of you?</td>
                            <td>{ this.props.survey.Question_3 }/10</td>
                        </tr>
                        <tr>
                            <td>Are you focused on your career options or are you leaving them to chance?</td>
                            <td>{this.props.survey.Question_4 }/10</td>
                        </tr>
                        <tr>
                            <td>Do you get good feedback from your manager?</td>
                            <td>{ this.props.survey.Question_5 }/10</td>
                        </tr>
                        <tr>
                            <td>Do you receive an appropriate financial reward for the work you do?</td>
                            <td>{ this.props.survey.Question_6 }/10</td>
                        </tr>
                        <tr>
                            <td>Do you feel that you and your work are valued and appreciated?</td>
                            <td>{ this.props.survey.Question_7 }/10</td>
                        </tr>
                        <tr>
                            <td>Do you work for an organisation that cares about people, including yourself?</td>
                            <td>{ this.props.survey.Question_8 }/10</td>
                        </tr>
                        <tr>
                            <td>Do you enjoy the company of the people with whom you work?</td>
                            <td>{ this.props.survey.Question_9 }/10</td>
                        </tr>
                        <tr>
                            <td>What’s the level of morale like in your work group?</td>
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
export default CareerSatisfactionProfile