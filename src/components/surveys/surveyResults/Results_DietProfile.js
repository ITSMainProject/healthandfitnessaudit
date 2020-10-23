import React, { Component } from 'react'
import moment from 'moment'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class DietProfile extends Component  {

    
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
                    <span className="card-title" style={{textAlign: "center", fontWeight: "bold"}}>Diet Profile</span>          
                    <table>
                        <thead>
                        <tr>
                            <th>Question</th>
                            <th>Result</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>How close are you to being your ideal weight? Scores based on number of kilos of body fat over what you consider to be your ideal weight.</td>
                            <td>{ this.props.survey.Question_1 }/10</td>
                        </tr>
                        <tr>
                            <td>Do you eat a decent breakfast or is it just flour and sugar? Dont score more than 6 it its just flour and sugar.</td>
                            <td>{ this.props.survey.Question_2 }/10</td>
                        </tr>
                        <tr>
                            <td>For your weight, do you eat a high fat diet?</td>
                            <td>{ this.props.survey.Question_3 }/10</td>
                        </tr>
                        <tr>
                            <td>Do you predominantly form the top of the Hourglass: - plenty of vegetables and fruit mixed with adequate protein and fat?</td>
                            <td>{this.props.survey.Question_4 }/10</td>
                        </tr>
                        <tr>
                            <td>For your weight, do you eat a high flour and sugar diet?</td>
                            <td>{ this.props.survey.Question_5 }/10</td>
                        </tr>
                        <tr>
                            <td>How many glasses of plain, unadulterated water (or green tea) do you drink each day?</td>
                            <td>{ this.props.survey.Question_6 }/10</td>
                        </tr>
                        <tr>
                            <td>When you look at your health, do you believe you're getting enough of the essential vitamins, minerals, fatty acids and glycoproteins?</td>
                            <td>{ this.props.survey.Question_7 }/10</td>
                        </tr>
                        <tr>
                            <td>Do you eat too much?</td>
                            <td>{ this.props.survey.Question_8 }/10</td>
                        </tr>
                        <tr>
                            <td>Are you ruled by your addictions and cravings to food which are not good for you?</td>
                            <td>{ this.props.survey.Question_9 }/10</td>
                        </tr>
                        <tr>
                            <td>Does the back end of your system work like a charm? - score low if you have irritable bowel or diarrhoea, are constipated, and/or have piles.</td>
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
export default DietProfile