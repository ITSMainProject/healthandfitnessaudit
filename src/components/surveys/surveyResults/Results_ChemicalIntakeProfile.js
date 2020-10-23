import React, { Component } from 'react'
import moment from 'moment'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class ChemicalIntakeProfile extends Component  {

    
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
                    <span className="card-title" style={{textAlign: "center", fontWeight: "bold"}}>Chemical Intake Profile</span>          
                    <table>
                        <thead>
                        <tr>
                            <th>Question</th>
                            <th>Result</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>Do you smoke?</td>
                            <td>{ this.props.survey.Question_1 }/10</td>
                        </tr>
                        <tr>
                            <td>How many standard alcoholic drinks do you have a week?</td>
                            <td>{ this.props.survey.Question_2 }/10</td>
                        </tr>
                        <tr>
                            <td>Do you drink too much caffeine? How many cups of coffee or cola drinks do you
                                have a day? We live in a high caffeine culture!</td>
                            <td>{ this.props.survey.Question_3 }/10</td>
                        </tr>
                        <tr>
                            <td>Are you a high salt eater? If you add lots of salt to your food; if you eat a lot of salty
                                food (chips, nuts, Vegemite, processed meat, take-aways, canned food...), score low.</td>
                            <td>{this.props.survey.Question_4 }/10</td>
                        </tr>
                        <tr>
                            <td>How do you rate your reliance on anti-inflammatory tablets?</td>
                            <td>{ this.props.survey.Question_5 }/10</td>
                        </tr>
                        <tr>
                            <td>How do you rate your reliance on headache and pain killing tablets?</td>
                            <td>{ this.props.survey.Question_6 }/10</td>
                        </tr>
                        <tr>
                            <td>Are you on sleeping (tranquillisers, hypnotics, relaxants) tablets?</td>
                            <td>{ this.props.survey.Question_7 }/10</td>
                        </tr>
                        <tr>
                            <td>Are you on anti-depressant tablets?</td>
                            <td>{ this.props.survey.Question_8 }/10</td>
                        </tr>
                        <tr>
                            <td>Are you on blood pressure tablets?</td>
                            <td>{ this.props.survey.Question_9 }/10</td>
                        </tr>
                        <tr>
                            <td>Are you on diabetes tablets?</td>
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

export default ChemicalIntakeProfile