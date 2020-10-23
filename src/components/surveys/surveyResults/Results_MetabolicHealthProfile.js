import React, { Component } from 'react'
import moment from 'moment'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class MetabolicHealthProfile extends Component  {  
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
                <span className="card-title" style={{textAlign: "center", fontWeight: "bold"}}>Metabolic Health Profile</span>          
                <table>
                    <thead>
                    <tr>
                        <th>Question</th>
                        <th>Result</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>What was your score on the <b> Health, Fitness and Wellbeing profile</b>?</td>
                        <td>{ this.props.survey.Question_1 }/10</td>
                    </tr>
                    <tr>
                        <td><b>Body Composition</b>
                            Are you about your <b> ideal weight </b> ? Scores based on number of kilos of body
                            fat over what you consider to be your ideal weight.</td>
                        <td>{ this.props.survey.Question_2 }/10</td>
                    </tr>
                    <tr>
                        <td><b> Blood Glucose level </b> - mmol/l ....... Preferable fasted. Score 0 if on
                            medication.</td>
                        <td>{this.props.survey.Question_3 }/10</td>
                    </tr>
                    <tr>
                        <td><b> Cholesterol </b> level (Unfasted) - mmol/l .........</td>
                        <td>{ this.props.survey.Question_4 }/10</td>
                    </tr>
                    <tr>
                        <td><b>Blood pressure - systolic </b>......./ (The higher figure.)
                            Normal is 120 for men and 110 - 120 for women. Score 0 if on medication.</td>
                        <td>{ this.props.survey.Question_5 }/10</td>
                    </tr>
                    <tr>
                        <td><b>Blood pressure - diastolic </b> ...../ (The lower figure.)
                            Normal is 80 for men and 70 - 80 for women. Score 0 if on medication.</td>
                        <td>{ this.props.survey.Question_6 }/10</td>
                    </tr>
                    <tr>
                        <td>Do you <b>smoke</b>?
                            If ‘yes’ score zero. If ‘no’, score 10.</td>
                        <td>{ this.props.survey.Question_7 }/10</td>
                    </tr>
                    <tr>
                        <td><b> Aerobic fitness </b> 5 minute, 20m lap run. Laps .....</td>
                        <td>{ this.props.survey.Question_8}/30</td>
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
export default MetabolicHealthProfile