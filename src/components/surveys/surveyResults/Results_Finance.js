import React, { Component } from 'react'
import moment from 'moment'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class Finance extends Component  {

    
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
                    <span className="card-title" style={{textAlign: "center", fontWeight: "bold"}}>Finance Profile</span>          
                    <table>
                        <thead>
                        <tr>
                            <th>Question</th>
                            <th>Result</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>Do you have your financial goals written down?</td>
                            <td>{ this.props.survey.Question_1 }/10</td>
                        </tr>
                        <tr>
                            <td>Are you working towards the achievement of your financial goals?</td>
                            <td>{ this.props.survey.Question_2 }/10</td>
                        </tr>
                        <tr>
                            <td>Do you come from abundance or scarcity?</td>
                            <td>{ this.props.survey.Question_3 }/10</td>
                        </tr>
                        <tr>
                            <td>Do you earn an above average income for your age?</td>
                            <td>{this.props.survey.Question_4 }/10</td>
                        </tr>
                        <tr>
                            <td>Do you have a budge which you keep to and review every month and every year?</td>
                            <td>{ this.props.survey.Question_5 }/10</td>
                        </tr>
                        <tr>
                            <td>Do you have a good savings and investment plan and monitor it regularly?</td>
                            <td>{ this.props.survey.Question_6 }/10</td>
                        </tr>
                        <tr>
                            <td>Do you have a good spread of investments?</td>
                            <td>{ this.props.survey.Question_7 }/10</td>
                        </tr>
                        <tr>
                            <td>Do you plan to be wealthy? Ie you’re working towards having a return on asset that
    matches your income.</td>
                            <td>{ this.props.survey.Question_8 }/10</td>
                        </tr>
                        <tr>
                            <td>Have you got a nice little earner on the side?</td>
                            <td>{ this.props.survey.Question_9 }/10</td>
                        </tr>
                        <tr>
                            <td>Do you have adequate income protection?</td>
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

export default Finance