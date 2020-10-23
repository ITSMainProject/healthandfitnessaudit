/*************************************************
 * Class Name: SurveyUniversalScoring
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

class SurveyUniversalScoring extends Component {

    state = { col: '0', num: '0', col1: '0', col2: '0', col3: '0', col4: '0',
      col5: '0', col6: '0', col7: '0', col8: '0', col9: '0', col10: '0', col11: '0',
      col12: '0', temcol: '',
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
            <div style={customCursor} className="row" id="unirow">
            <table id="unitable" style={{border:'2px solid black', borderCollapse:'collapse'}}>
                <tbody>
                    <tr id="unitr" style={{border:'2px solid black', borderCollapse:'collapse'}}>
                        <td id="unitd" colSpan={2} style={{border:'2px solid black', borderCollapse:'collapse', textAlign:'center', fontWeight:"bold"}}>{"Level"}</td>
                        <td id="unitd" style={{border:'2px solid black', borderCollapse:'collapse', textAlign:'center', fontWeight:"bold"}}>{"Award"}</td>
                        <td id="unitd" colSpan={2} style={{border:'2px solid black', borderCollapse:'collapse', textAlign:'center', fontWeight:"bold"}}>{"20m run - laps"}</td>
                        <td id="unitd" style={{border:'2px solid black', borderCollapse:'collapse', textAlign:'center', fontWeight:"bold"}}>{"Pressups"}</td>
                        <td id="unitd" style={{border:'2px solid black', borderCollapse:'collapse', textAlign:'center', fontWeight:"bold"}}>{"Situps"}</td>
                        <td id="unitd" style={{border:'2px solid black', borderCollapse:'collapse', textAlign:'center', fontWeight:"bold"}}>{"Squats"}</td>
                        <td id="unitd" colSpan={2} style={{border:'2px solid black', borderCollapse:'collapse', textAlign:'center', fontWeight:"bold"}}>{"Arm hang (secs)"}</td>
                        <td id="unitd" colSpan={2} style={{border:'2px solid black', borderCollapse:'collapse', textAlign:'center', fontWeight:"bold"}}>{"% body fat"}</td>
                        <td id="unitd" style={{border:'2px solid black', borderCollapse:'collapse', textAlign:'center', fontWeight:"bold"}}>{"Award"}</td>
                    </tr>

                </tbody>
                <tbody>
                    <tr id="unitr"  style={{border:'1px solid black', borderCollapse:'collapse'}}>
                        <td id="unitd" ></td>
                        <td id="unitd" ></td>
                        <td id="unitd" ></td>
                        <td id="unitd" >{"Men"}</td>
                        <td id="unitd" >{"Women"}</td>
                        <td id="unitd" ></td>
                        <td id="unitd" ></td>
                        <td id="unitd" ></td>
                        <td id="unitd" >{"Men"}</td>
                        <td id="unitd" >{"Women"}</td>
                        <td id="unitd" >{"Men"}</td>
                        <td id="unitd" >{"Women"}</td>
                        <td id="unitd" ></td>
                    </tr>

                </tbody>
                <tbody>
                    <tr id="unitr" style={{border:'1px solid black', borderCollapse:'collapse'}}>
                        <td id="unitd" >{"10"}</td>
                        <td id="unitd" style={{backgroundColor:"#808080", width:"4%"}}></td>
                        <td id="unitd" >{"Platinum"}</td>
                        <td id="unitd" >{"55"}</td>
                        <td id="unitd" >{"52"}</td>
                        <td id="unitd" >{"70"}</td>
                        <td id="unitd" >{"70"}</td>
                        <td id="unitd" >{"70"}</td>
                        <td id="unitd" >{"100"}</td>
                        <td id="unitd" >{"80"}</td>
                        <td id="unitd" >{"<14"}</td>
                        <td id="unitd" >{"<24"}</td>
                        <td id="unitd" style={{padding:0}} className={ this.state.tick10 ? "awards" : "denies"}
                        onClick={() => this.setState({tick10: !this.state.tick10})}>
                        { this.state.tick10 ? <span class="material-icons">
                        check_circle_outline
                        </span> : null }
                        </td>
                    </tr>

                </tbody>
                <tbody>
                    <tr id="unitr" style={{border:'1px solid black', borderCollapse:'collapse'}}>
                        <td id="unitd">{"9"}</td>
                        <td id="unitd" style={{backgroundColor:"#FFF0F5"}}></td>
                        <td id="unitd">{"Diamond"}</td>
                        <td id="unitd">{"53"}</td>
                        <td id="unitd">{"49"}</td>
                        <td id="unitd">{"60"}</td>
                        <td id="unitd">{"60"}</td>
                        <td id="unitd">{"60"}</td>
                        <td id="unitd">{"80"}</td>
                        <td id="unitd">{"60"}</td>
                        <td id="unitd">{"<16"}</td>
                        <td id="unitd">{"<26"}</td>
                        <td id="unitd" style={{padding:0}} className={ this.state.tick9 ? "awards" : "denies"}
                        onClick={() => this.setState({tick9: !this.state.tick9})}>
                        { this.state.tick9 ? <span class="material-icons">
                        check_circle_outline
                        </span> : null }
                        </td>
                    </tr>

                </tbody>
                <tbody>
                    <tr id="unitr" style={{border:'1px solid black', borderCollapse:'collapse'}}>
                        <td id="unitd">{"8"}</td>
                        <td id="unitd" style={{backgroundColor:"#800000"}}></td>
                        <td id="unitd">{"Ruby"}</td>
                        <td id="unitd">{"50"}</td>
                        <td id="unitd">{"46"}</td>
                        <td id="unitd">{"50"}</td>
                        <td id="unitd">{"50"}</td>
                        <td id="unitd">{"50"}</td>
                        <td id="unitd">{"60"}</td>
                        <td id="unitd">{"50"}</td>
                        <td id="unitd">{"<18"}</td>
                        <td id="unitd">{"<28"}</td>
                        <td id="unitd" style={{padding:0}} className={ this.state.tick8 ? "awards" : "denies"}
                        onClick={() => this.setState({tick8: !this.state.tick8})}>
                        { this.state.tick8 ? <span class="material-icons">
                        check_circle_outline
                        </span> : null }
                        </td>
                    </tr>

                </tbody>
                <tbody>
                    <tr id="unitr" style={{border:'1px solid black', borderCollapse:'collapse'}}>
                        <td id="unitd">{"7"}</td>
                        <td id="unitd" style={{backgroundColor:"#66CDAA"}}></td>
                        <td id="unitd">{"Emerald"}</td>
                        <td id="unitd">{"45"}</td>
                        <td id="unitd">{"43"}</td>
                        <td id="unitd">{"40"}</td>
                        <td id="unitd">{"40"}</td>
                        <td id="unitd">{"40"}</td>
                        <td id="unitd">{"50"}</td>
                        <td id="unitd">{"40"}</td>
                        <td id="unitd">{"<20"}</td>
                        <td id="unitd">{"<30"}</td>
                        <td id="unitd" style={{padding:0}} className={ this.state.tick7 ? "awards" : "denies"}
                        onClick={() => this.setState({tick7: !this.state.tick7})}>
                        { this.state.tick7 ? <span class="material-icons">
                        check_circle_outline
                        </span> : null }
                        </td>
                    </tr>

                </tbody>
                <tbody>
                    <tr id="unitr" style={{border:'1px solid black', borderCollapse:'collapse'}}>
                        <td id="unitd">{"6"}</td>
                        <td id="unitd" style={{backgroundColor:"#FFD700"}}></td>
                        <td id="unitd">{"Gold"}</td>
                        <td id="unitd">{"40"}</td>
                        <td id="unitd">{"38"}</td>
                        <td id="unitd">{"30"}</td>
                        <td id="unitd">{"30"}</td>
                        <td id="unitd">{"30"}</td>
                        <td id="unitd">{"40"}</td>
                        <td id="unitd">{"35"}</td>
                        <td id="unitd">{"<22"}</td>
                        <td id="unitd">{"<32"}</td>
                        <td id="unitd" style={{padding:0}} className={ this.state.tick6 ? "awards" : "denies"}
                        onClick={() => this.setState({tick6: !this.state.tick6})}>
                        { this.state.tick6 ? <span class="material-icons">
                        check_circle_outline
                        </span> : null }
                        </td>
                    </tr>

                </tbody>
                <tbody>
                    <tr id="unitr" style={{border:'1px solid black', borderCollapse:'collapse'}}>
                        <td id="unitd">{"5"}</td>
                        <td id="unitd" style={{backgroundColor:"#C0C0C0"}}></td>
                        <td id="unitd">{"Silver"}</td>
                        <td id="unitd">{"38"}</td>
                        <td id="unitd">{"36"}</td>
                        <td id="unitd">{"25"}</td>
                        <td id="unitd">{"25"}</td>
                        <td id="unitd">{"25"}</td>
                        <td id="unitd">{"35"}</td>
                        <td id="unitd">{"30"}</td>
                        <td id="unitd">{"<24"}</td>
                        <td id="unitd">{"<34"}</td>
                        <td id="unitd" style={{padding:0}} className={ this.state.tick5 ? "awards" : "denies"}
                        onClick={() => this.setState({tick5: !this.state.tick5})}>
                        { this.state.tick5 ? <span class="material-icons">
                        check_circle_outline
                        </span> : null }
                        </td>
                    </tr>

                </tbody>
                <tbody>
                    <tr id="unitr" style={{border:'1px solid black', borderCollapse:'collapse'}}>
                        <td id="unitd">{"4"}</td>
                        <td id="unitd" style={{backgroundColor:"#B8860B"}}></td>
                        <td id="unitd">{"Bronze"}</td>
                        <td id="unitd">{"36"}</td>
                        <td id="unitd">{"34"}</td>
                        <td id="unitd">{"20"}</td>
                        <td id="unitd">{"20"}</td>
                        <td id="unitd">{"20"}</td>
                        <td id="unitd">{"30"}</td>
                        <td id="unitd">{"25"}</td>
                        <td id="unitd">{"<26"}</td>
                        <td id="unitd">{"<36"}</td>
                        <td id="unitd" style={{padding:0}} className={ this.state.tick4 ? "awards" : "denies"}
                        onClick={() => this.setState({tick4: !this.state.tick4})}>
                        { this.state.tick4 ? <span class="material-icons">
                        check_circle_outline
                        </span> : null }
                        </td>
                    </tr>

                </tbody>
                <tbody>
                    <tr id="unitr" style={{border:'1px solid black', borderCollapse:'collapse'}}>
                        <td id="unitd">{"3"}</td>
                        <td id="unitd" style={{backgroundColor:"#008000"}}></td>
                        <td id="unitd">{"Green"}</td>
                        <td id="unitd">{"32"}</td>
                        <td id="unitd">{"30"}</td>
                        <td id="unitd">{"15"}</td>
                        <td id="unitd">{"15"}</td>
                        <td id="unitd">{"15"}</td>
                        <td id="unitd">{"25"}</td>
                        <td id="unitd">{"20"}</td>
                        <td id="unitd">{"<28"}</td>
                        <td id="unitd">{"<38"}</td>
                        <td id="unitd" style={{padding:0}} className={ this.state.tick3 ? "awards" : "denies"}
                        onClick={() => this.setState({tick3: !this.state.tick3})}>
                        { this.state.tick3 ? <span class="material-icons">
                        check_circle_outline
                        </span> : null }
                        </td>
                    </tr>

                </tbody>
                <tbody>
                    <tr id="unitr" style={{border:'1px solid black', borderCollapse:'collapse'}}>
                        <td id="unitd">{"2"}</td>
                        <td id="unitd" style={{backgroundColor:"#FF8C00"}}></td>
                        <td id="unitd">{"Amber"}</td>
                        <td id="unitd">{"26"}</td>
                        <td id="unitd">{"24"}</td>
                        <td id="unitd">{"10"}</td>
                        <td id="unitd">{"10"}</td>
                        <td id="unitd">{"10"}</td>
                        <td id="unitd">{"20"}</td>
                        <td id="unitd">{"15"}</td>
                        <td id="unitd">{"<30"}</td>
                        <td id="unitd">{"<40"}</td>
                        <td id="unitd" style={{padding:0}} className={ this.state.tick2 ? "awards" : "denies"}
                        onClick={() => this.setState({tick2: !this.state.tick2})}>
                        { this.state.tick2 ? <span class="material-icons">
                        check_circle_outline
                        </span> : null }
                        </td>
                    </tr>

                </tbody>
                <tbody>
                    <tr id="unitr" style={{border:'1px solid black', borderCollapse:'collapse'}}>
                        <td id="unitd">{"1"}</td>
                        <td id="unitd" style={{backgroundColor:"#FF0000"}}></td>
                        <td id="unitd">{"Red"}</td>
                        <td id="unitd">{"22"}</td>
                        <td id="unitd">{"20"}</td>
                        <td id="unitd">{"<10"}</td>
                        <td id="unitd">{"<10"}</td>
                        <td id="unitd">{"<10"}</td>
                        <td id="unitd">{"10"}</td>
                        <td id="unitd">{"10"}</td>
                        <td id="unitd">{"<35"}</td>
                        <td id="unitd">{">45"}</td>
                        <td id="unitd" style={{padding:0}} className={ this.state.tick1 ? "awards" : "denies"}
                        onClick={() => this.setState({tick1: !this.state.tick1})}>
                        { this.state.tick1 ? <span class="material-icons">
                        check_circle_outline
                        </span> : null }
                        </td>
                    </tr>

                </tbody>
                <tbody>
                    <tr id="unitr" style={{border:'1px solid black', borderCollapse:'collapse'}}>
                        <td id="unitd">{"0"}</td>
                        <td id="unitd" style={{backgroundColor:"#000000"}}></td>
                        <td id="unitd">{"Black"}</td>
                        <td id="unitd">{"<22"}</td>
                        <td id="unitd">{"<20"}</td>
                        <td id="unitd">{"<5"}</td>
                        <td id="unitd">{"<5"}</td>
                        <td id="unitd">{"<5"}</td>
                        <td id="unitd">{"<10"}</td>
                        <td id="unitd">{"<10"}</td>
                        <td id="unitd">{">35"}</td>
                        <td id="unitd">{">45"}</td>
                        <td id="unitd" style={{padding:0}} className={ this.state.tick0 ? "awards" : "denies"}
                        onClick={() => this.setState({tick0: !this.state.tick0})}>
                        { this.state.tick0 ? <span class="material-icons">
                        check_circle_outline
                        </span> : null }
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        )
    }
}
export default SurveyUniversalScoring