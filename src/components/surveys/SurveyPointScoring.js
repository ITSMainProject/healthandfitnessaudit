/*************************************************
 * Class Name: SurveyPointScoring
 * Created Date: 04/10/2020 
 * Edited By: Aaron, Jack, Min, Doug
 * Last Edited: 04/10/2020
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

class SurveyPointScoring extends Component {

    state = { col: '0', num: '0', col1: '0', col2: '0', col3: '0', col4: '0',
      col5: '0', col6: '0', col7: '0', col8: '0', col9: '0', col10: '0', col11: '0',
      col12: '0', temcol: '', point1:'0', point2:'0', point3:'0', point4:'0', point5:'0', point6:'0',
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
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }

    render() {
        
        return ( 
            <div style={customCursor} className="row" id="unirow">
            <table id="unitable" style={{border:'2px solid black', borderCollapse:'collapse'}}>
                <tbody>
                    <tr id="unitr" style={{border:'2px solid black', borderCollapse:'collapse'}}>
                        <td id="unitd" style={{border:'2px solid black', borderCollapse:'collapse', textAlign:'center', fontWeight:"bold", fontSize:18, width:'80%'}}>{"Test"}</td>
                        <td id="unitd" style={{border:'2px solid black', borderCollapse:'collapse', textAlign:'center', fontWeight:"bold", fontSize:18}}>{"Points"}</td>
                    </tr>

                </tbody>
                <tbody>
                    <tr id="unitr">
                        <td id="unitd" style={{fontSize:16}}>20m run</td>
                        <td id="unitd">
                        <input
                            type='number'
                            name='point1'
                            min="0" max="10"
                            onChange={this.myChangeHandler}
                        />
                        </td>
                    </tr>

                </tbody>
                <tbody>
                    <tr id="unitr">
                        <td id="unitd" style={{fontSize:16}}>Pressups</td>
                        <td id="unitd">
                        <input
                            type='text'
                            name='point2'
                            onChange={this.myChangeHandler}
                        />
                        </td>
                    </tr>

                </tbody>
                <tbody>
                    <tr id="unitr">
                        <td id="unitd" style={{fontSize:16}}>Situps</td>
                        <td id="unitd">
                        <input
                            type='text'
                            name='point3'
                            onChange={this.myChangeHandler}
                        />
                        </td>
                    </tr>

                </tbody>
                <tbody>
                    <tr id="unitr">
                        <td id="unitd" style={{fontSize:16}}>Squats</td>
                        <td id="unitd">
                        <input
                            type='text'
                            name='point4'
                            onChange={this.myChangeHandler}
                        />
                        </td>
                    </tr>

                </tbody>
                <tbody>
                    <tr id="unitr">
                        <td id="unitd" style={{fontSize:16}}>Arm hang</td>
                        <td id="unitd">
                        <input
                            type='text'
                            name='point5'
                            onChange={this.myChangeHandler}
                        />
                        </td>
                    </tr>

                </tbody>
                <tbody>
                    <tr id="unitr">
                        <td id="unitd" style={{fontSize:16}}>% body fat</td>
                        <td id="unitd">
                        <input
                            type='text'
                            name='point6'
                            onChange={this.myChangeHandler}
                        />
                        </td>
                    </tr>

                </tbody>
                <tbody>
                    <tr id="unitr">
                        <td id="unitd" style={{fontSize:16, fontWeight:"bold"}}>TOTAL / 50</td>
                        <td id="unitd" style={{fontSize:16, fontWeight:"bold"}}>{parseInt(this.state.point1)+parseInt(this.state.point2)+parseInt(this.state.point3)+parseInt(this.state.point4)+parseInt(this.state.point5)+parseInt(this.state.point6)}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        )
    }
}
export default SurveyPointScoring