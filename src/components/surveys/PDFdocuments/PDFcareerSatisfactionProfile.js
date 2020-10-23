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


class PDFcareerSatisfactionProfile extends Component {
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
				<Text style={{textAlign: 'center'}}>{'Career Satisfaction Profile - Results'}</Text>
			</View>
			<View style={styles.sectionResults}>
				
				<Table
					th
					col={['80%', '20%']}
					children={[
					['Question','Result'],
					[<Text style={{textAlign:'left', fontSize: 10, paddingLeft: 2, paddingRight: 2 }}> How close are you to doing the job you’d really love to be doing? This is the job you’d love to do so much you’d do it for nothing, but which you did so well you’d be paid handsomely.</Text>, survey.Question_1 + '/10'],
					[<Text style={{textAlign:'left', fontSize: 10, paddingLeft: 2, paddingRight: 2 }}> Are you in the right job for now? Do you enjoy your work?</Text>, survey.Question_2 + '/10'],
					[<Text style={{textAlign:'left', fontSize: 10, paddingLeft: 2, paddingRight: 2 }}> How stressful do you find your job. Is it giving you life or sucking life out of you?</Text>, survey.Question_3 + '/10'],
					[<Text style={{textAlign:'left', fontSize: 10, paddingLeft: 2, paddingRight: 2 }}> Are you focused on your career options or are you leaving them to chance?</Text>, survey.Question_4 + '/10'],
					[<Text style={{textAlign:'left', fontSize: 10, paddingLeft: 2, paddingRight: 2 }}> Do you get good feedback from your manager?</Text>, survey.Question_5 + '/10'],
					[<Text style={{textAlign:'left', fontSize: 10, paddingLeft: 2, paddingRight: 2}}> Do you receive an appropriate financial reward for the work you do?</Text>, survey.Question_6 + '/10'],
					[<Text style={{textAlign:'left', fontSize: 10, paddingLeft: 2, paddingRight: 2 }}> Do you feel that you and your work are valued and appreciated?</Text>, survey.Question_7 + '/10'],
					[<Text style={{textAlign:'left', fontSize: 10, paddingLeft: 2, paddingRight: 2 }}> Do you work for an organisation that cares about people, including yourself?</Text>, survey.Question_8 + '/10'],
					[<Text style={{textAlign:'left', fontSize: 10, paddingLeft: 2, paddingRight: 2 }}> Do you enjoy the company of the people with whom you work?</Text>, survey.Question_9 + '/10'],
					[<Text style={{textAlign:'left', fontSize: 10, paddingLeft: 2, paddingRight: 2 }}> What’s the level of morale like in your work group?</Text>, survey.Question_10 + '/10'],
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
export default PDFcareerSatisfactionProfile;
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
