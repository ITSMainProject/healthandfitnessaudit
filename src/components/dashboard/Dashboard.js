/*************************************************
 * Class Name: Footer
 * Created Date: 08/09/2020 
 * Edited By: Aaron
 * Last Edited: 12/09/2020
 * -----------------------------------------------
 * Description:
 * Main dashboard page
 *************************************************/
import React, { Component } from 'react'
import SurveySelection from '../surveys/SurveySelection'

class Dashboard extends Component {

    render() {
        return (
            <div className = "dashboard container">            
                <SurveySelection/>
            </div>
        )
    }
}
export default Dashboard