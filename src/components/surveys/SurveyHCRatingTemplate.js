/*************************************************
 * Class Name: SurveyRatingTemplate
 * Created Date: 13/10/2020 
 * Edited By: Aaron, Jack, Min, Doug
 * Last Edited: 13/10/2020
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
  
class SurveyHCRatingTemplate extends Component {

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
                    <td style={{padding: 0}} colSpan={2}>{this.props.leftValue}</td>
                    <td style={{padding: 0}} colSpan={3}>{this.props.secondValue}</td>
                    <td style={{padding: 0}} colSpan={3}>{this.props.thirdValue}</td>
                    <td style={{padding:0, textAlign:'right'}} colSpan={3}>{this.props.rightValue}</td>
                    <td style={{padding: 0}} colSpan={1}></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr style={{border:'hidden'}}>
                        <td style={{padding: 0}}>
                            <div id="col" onClick={() => { (this.divClicked('0'));}} className="col s1 customcol customs1" style={{backgroundColor: '0'===this.state.col && this.state.temcol ? "#11ff00":""}}>0</div>    
                        </td>
                        <td style={{padding: 0}}>
                            <div id="col" onClick={() => { (this.divClicked('1'));}} className="col s1 customcol customs1" style={{backgroundColor: '1'===this.state.col ? "#8bff00":""}}>1</div>
                        </td>
                        <td style={{padding: 0}}>
                            <div id="col" onClick={() => { (this.divClicked('2'));}} className="col s1 customcol customs1" style={{backgroundColor: '2'===this.state.col ? "#a4ff00":""}}>2</div>
                        </td>
                        <td style={{padding: 0}}>
                            <div id="col" onClick={() => { (this.divClicked('3'));}} className="col s1 customcol customs1" style={{backgroundColor: '3'===this.state.col ? "#ccff00":""}}>3</div>
                        </td>
                        <td style={{padding: 0}}>
                            <div id="col" onClick={() => { (this.divClicked('4'));}} className="col s1 customcol customs1" style={{backgroundColor: '4'===this.state.col ? "#ffd000":""}}>4</div>
                        </td>
                        <td style={{padding: 0}}>
                            <div id="col" onClick={() => { (this.divClicked('5'));}} className="col s1 customcol customs1" style={{backgroundColor: '5'===this.state.col ? "#ff9000":""}} colSpan={2}>5</div>
                        </td>
                        <td style={{padding: 0}}>
                            <div id="col" onClick={() => { (this.divClicked('6'));}} className="col s1 customcol customs1" style={{backgroundColor: '6'===this.state.col ? "#ff6000":""}}>6</div>
                        </td>
                        <td style={{padding: 0}}>
                            <div id="col" onClick={() => { (this.divClicked('7'));}} className="col s1 customcol customs1" style={{backgroundColor: '7'===this.state.col ? "#ff4500":""}}>7</div>
                        </td>
                        <td style={{padding: 0}}>
                            <div id="col" onClick={() => { (this.divClicked('8'));}} className="col s1 customcol customs1" style={{backgroundColor: '8'===this.state.col ? "#ff3000":""}}>8</div>
                        </td>
                        <td style={{padding: 0}}>
                            <div id="col" onClick={() => { (this.divClicked('9'));}} className="col s1 customcol customs1" style={{backgroundColor: '9'===this.state.col ? "#ff1500":""}}>9</div>
                        </td>
                        <td style={{padding: 0}}>
                            <div id="col" onClick={() => { (this.divClicked('10'));}} className="col s1 customcol customs1" style={{backgroundColor: '10'===this.state.col ? "#ff0000":"", width:'90%'}}>10</div>
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
export default SurveyHCRatingTemplate