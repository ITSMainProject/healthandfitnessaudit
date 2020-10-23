import React ,{ Component }  from "react";
import { Page, Text, View,Image, Document, StyleSheet } from '@react-pdf/renderer';
import moment from 'moment'
import {Table} from '../../Functional/CreatePDF'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

// Create styles
const styles = StyleSheet.create({
	page: {	
		backgroundColor: '#ffffff'
	},
	sectionTop: {
		//flexGrow: 1
	},
	section: {
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 10,
		marginTop: 5,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingTop: 5,
	},
	sectionResults: {
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 10,
		marginTop: 5,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingTop: 5,
		fontSize: 12
	},
	imageLogo: {
		height: 100,
	},
	date: {
		paddingBottom: '10px',
		fontSize: 10,
	}
});


class PDFspecificJointAssessment extends Component {
render(){
    const { survey } = this.props
    //console.log('DEBUG: survey title ' + survey.title)
    return(
	<Document>
		<Page size="A4" style={styles.page}>
			<View style={styles.sectionTop}>
				<Image style={styles.imageLogo} src="../img/PDFLOGO.PNG" />
			</View>
			<View style={styles.section}>
				<Text style={styles.date}>{moment(survey.createdDate.toDate()).format('LLLL')}</Text>
				<Text style={styles.date}>Submitted by: {survey.authorFirstName} {survey.authorLastName}</Text>
				<Text style={{textAlign: 'center'}}>{'Specific Joint Assessment - Results'}</Text>
			</View>
			<View style={styles.sectionResults}>
				
				<Table
					th
					col={['80%', '20%']}
					children={[
					['Question','Result'],
					[<Text style={{textAlign:'left' }}><Text style={{fontWeight:'bold', fontSize:'14'}}>{' '} Back. </Text> Rate the current condition of your back</Text>, survey.Question_1 + '/10'],
					[<Text style={{textAlign:'left' }}><Text style={{fontWeight:'bold', fontSize:'14'}}>{' '} Neck. </Text> Rate the current condition of your neck</Text>, survey.Question_2 + '/10'],
					[<Text style={{textAlign:'left' }}><Text style={{fontWeight:'bold', fontSize:'14'}}>{' '} Right shoulder. </Text> Rate the current condition of your right shoulder</Text>, survey.Question_3 + '/10'],
					[<Text style={{textAlign:'left' }}><Text style={{fontWeight:'bold', fontSize:'14'}}>{' '} Left shoulder. </Text> Rate the current condition of your left shoulder</Text>, survey.Question_4 + '/10'],
					[<Text style={{textAlign:'left' }}><Text style={{fontWeight:'bold', fontSize:'14'}}>{' '} Right wrist. </Text> Rate the current condition of your right wrist and hand</Text>, survey.Question_5 + '/10'],
					[<Text style={{textAlign:'left' }}><Text style={{fontWeight:'bold', fontSize:'14'}}>{' '} Left wrist. </Text> Rate the current condition of your left wrist and hand</Text>, survey.Question_6 + '/10'],
					[<Text style={{textAlign:'left' }}><Text style={{fontWeight:'bold', fontSize:'14'}}>{' '} Right hip. </Text> Rate the current condition of your right hip</Text>, survey.Question_7 + '/10'],
					[<Text style={{textAlign:'left' }}><Text style={{fontWeight:'bold', fontSize:'14'}}>{' '} Left hip. </Text> Rate the current condition of your left hip</Text>, survey.Question_8 + '/10'],
					[<Text style={{textAlign:'left' }}><Text style={{fontWeight:'bold', fontSize:'14'}}>{' '} Right knee. </Text> Rate the current condition of your right knee</Text>, survey.Question_9 + '/10'],
					[<Text style={{textAlign:'left' }}><Text style={{fontWeight:'bold', fontSize:'14'}}>{' '} Left knee. </Text> Rate the current condition of your left knee</Text>, survey.Question_10 + '/10'],
					[<Text style={{textAlign:'left' }}><Text style={{fontWeight:'bold', fontSize:'14'}}>{' '} Right foot. </Text> Rate the current condition of your right foot. Do you suffer Achilles tendonitis, plantar fasciitis, malformed toes etc</Text>, survey.Question_11 + '/10'],
					[<Text style={{textAlign:'left' }}><Text style={{fontWeight:'bold', fontSize:'14'}}>{' '} Left foot. </Text> Rate the current condition of your left foot. Do you suffer Achilles tendonitis, plantar fasciitis, malformed toes etc</Text>, survey.Question_12 + '/10']
					]} />
			</View>

			<View style={styles.sectionResults}>
				<Text style={{textAlign: 'right'}}> { 'Total score = ' + survey.totalScore + '/' + survey.maximumScore }</Text>
			</View>
        </Page>
    
    </Document>
    )
}
}
export default PDFspecificJointAssessment;
/*

				<Table
    th
    col={['20%', '60%', '20%']}
    children={[
      ['TH1', 'TH2', 'TH3'],
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9']
    ]} /> */

/*
 starValue: 'test',
    totalScore: 'test2',
    Question_1: '',
    Question_2: '',
    Question_3: '',
    Question_4: '',
    Question_5: '',
    Question_6: '',
    Question_7: '',
    Question_8: '',
    Question_9: '',
    Question_10: '',
    Question_11: '',
	Question_12: ''
	*/
