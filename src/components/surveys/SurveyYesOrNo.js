/*************************************************
 * Class Name: SurveyYesOrNo
 * Created Date: 03/10/2020 
 * Edited By: Aaron, Jack, Min, Doug
 * Last Edited: 03/10/2020
 * -----------------------------------------------
 * Description:
 * Added high-lighten selected number
 * This is UI template for surveys that require a 
 * 0-10 rating 
 *************************************************/
import React, { Component } from 'react'

const customCursor = {
    cursor: 'pointer'
  };
  
class SurveyYesOrNo extends Component {

    state = { col: '0', num: '0', col1: '0', col2: '0', col3: '0', col4: '0',
      col5: '0', col6: '0', col7: '0', col8: '0', col9: '0', col10: '0', col11: '0',
      col12: '0', temcol: ''
      }

    divClicked = (passedValue) => {    
    this.setState({
        col: passedValue,
        bgColorR: "#FFB6C1",
        temcol: passedValue
        })
        this.state.col = passedValue
        this.props.comFunc(this.state.col, this.props.name, this.props.num);
    }

    render() {
        return ( 
            <div style={customCursor} className="row" id="row">
            <table>
                <tbody>
                    <tr style={{border:'hidden'}}>
                    <td style={{padding: 0, textAlign: 'center'}} colSpan={1}>{this.props.leftValue}</td>
                    <td style={{padding: 0}} colSpan={2}></td>
                    <td style={{padding: 0, textAlign: 'center'}} colSpan={1}>{this.props.rightValue}</td>
                    
                    <td style={{padding: 0}} colSpan={1}></td>
                    </tr>

                </tbody>
                <tbody>
                    <tr style={{border:'hidden'}}>
                        <td style={{padding: 0}}>
                            <div id="col" onClick={() => { (this.divClicked('0'));}} className="col s1 customcol customs1" style={{backgroundColor: '0'===this.state.col && this.state.temcol ? "#ff0000":""}}>0</div>    
                        </td>
                        <td></td>
                        <td></td>
                        <td style={{padding: 0}}>
                            <div id="col" onClick={() => { (this.divClicked('10'));}} className="col s1 customcol customs1" style={{backgroundColor: '10'===this.state.col ? "#11ff00":"", width:'90%'}}>10</div>
                        </td>
                        <td style={{padding: 0}}>
                            <div id="colResult" className="col s1">{this.state.col}</div>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        )
    }
}
export default SurveyYesOrNo