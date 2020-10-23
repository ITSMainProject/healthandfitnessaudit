/*************************************************
 * Class Name: Footer
 * Created Date: 08/09/2020 
 * Last Edited: 10/10/2020
 * -----------------------------------------------
 * Description:
 * Footer UI design for the bottom of every page
 *************************************************/
import React from 'react'

const Footer = () => {

    return (
      <footer className="page-footer" style={{backgroundColor:'#424242', paddingTop:0}}>
      <div className="container">
      <table style={{border:'hidden'}}>
        <tbody>
          <tr style={{border:'hidden'}}>
            <th style={{width:'15%'}}>
              <a className="col white-text" style={{fontWeight:'bold', fontSize:'18', display:'inline-block'}}>My Account</a>
            </th>
            <td>
              <a className="col grey-text text-lighten-3"href="/">Dashboard</a>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <a className="col grey-text text-lighten-3" href="/Profile">User Profile</a>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <a className="col grey-text text-lighten-3" href="/Summary">Summary</a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr style={{border: 'hidden'}}>
            <th style={{verticalAlign:'top'}}>
              <a className="col white-text" style={{fontWeight:'bold', fontSize:'18'}}>Survey</a>
            </th>
            <td>
              <a className="col grey-text text-lighten-3" href="/ActiveSurvey/HealthClimate">Health climate</a>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <a className="col grey-text text-lighten-3" href="/ActiveSurvey/FitnessProfile">Fitness</a>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <a className="col grey-text text-lighten-3" href="/ActiveSurvey/UniversalFitnessTest">Universal fitness</a>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <a className="col grey-text text-lighten-3" href="/ActiveSurvey/SpecificJointAssessment">Specific joint</a>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <a className="col grey-text text-lighten-3" href="/ActiveSurvey/Musculoskeletal">Musculo-skeletal health risk</a>            
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr style={{border: 'hidden'}}>
            <th></th>
            <td>
            <a className="col grey-text text-lighten-3" href="/ActiveSurvey/MetabolicHealthProfile">Metabolic health</a>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <a className="col grey-text text-lighten-3" href="/ActiveSurvey/DietProfile">Diet</a>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <a className="col grey-text text-lighten-3" href="/ActiveSurvey/ChemicalIntakeProfile">Chemical intake</a>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <a className="col grey-text text-lighten-3" href="/ActiveSurvey/StressRiskProfile">Stress risk</a>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <a className="col grey-text text-lighten-3" href="/ActiveSurvey/CareerSatisfactionProfile">Career satisfaction</a>
            </td>
            </tr>
            
        </tbody>
        <tbody>
            <tr style={{border: 'hidden'}}>
              <th></th>
              <td>
              <a className="col grey-text text-lighten-3" href="/ActiveSurvey/MeaningAndPurpose">Meaning and purpose</a>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <a className="col grey-text text-lighten-3" href="/ActiveSurvey/FamilyLifeProfile">Family life</a>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <a className="col grey-text text-lighten-3" href="/ActiveSurvey/FinanceProfile">Finance</a>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <a className="col grey-text text-lighten-3" href="/ActiveSurvey/PeopleProfile">People</a>
              </td>
              </tr>
        </tbody>
      </table>
      </div>

        <div className="footer-copyright" style={{backgroundColor:'#353535'}}>
          <div className="container center">
            Copyright © 2020 HealthandFitnessAuditonline.com All Rights Reserved
          </div>
        </div>
      </footer>  
    )

}
export default Footer
