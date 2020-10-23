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


class PDFfitnessProfile extends Component {
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
				<Text style={{textAlign: 'center'}}>{'Fitness Profile - Results'}</Text>
			</View>
			<View style={styles.sectionResults}>
				
				<Table
					th
					col={['80%', '20%']}
					children={[
                        ['Question','Result'],
                        [<Text style={{textAlign:'left', fontSize: 10, paddingLeft: 2, paddingRight: 2 }}> Are you keeping yourself fit and healthy to the best of your ability?</Text>, survey.Question_1 + '/10'],
                        [<Text style={{textAlign:'left', fontSize: 10, paddingLeft: 2, paddingRight: 2 }}> The body is an ecosystem. What was your score on the Health Climate Survey?</Text>, survey.Question_2 + '/10'],
                        [<Text style={{textAlign:'left', fontSize: 10, paddingLeft: 2, paddingRight: 2 }}> Fatness. How close are you to being your ideal weight? Scores based on the
						number of kilos of body fat over what you consider to be your ideal weight.</Text>, survey.Question_3 + '/10'],
                        [<Text style={{textAlign:'left', fontSize: 10, paddingLeft: 2, paddingRight: 2 }}> How many full squats can you do in 90 seconds. Bottom must get midway between
						knees and ankles. Use a heel raise if you need to.</Text>, survey.Question_4 + '/10'],
                        [<Text style={{textAlign:'left', fontSize: 10, paddingLeft: 2, paddingRight: 2 }}> Upper body strength - press-ups. Number in 90 seconds. Men on toes, women on
						front of thighs</Text>, survey.Question_5 + '/10'],
                        [<Text style={{textAlign:'left', fontSize: 10, paddingLeft: 2, paddingRight: 2 }}> In a sitting position, with feet outstretched in front of you, see how far down past
						your toes you can reach with your fingers. Keep you knees straight.</Text>, survey.Question_6 + '/10'],
                        [<Text style={{textAlign:'left', fontSize: 10, paddingLeft: 2, paddingRight: 2}}> With legs crossed and hands clasped behind your back, see if you can sit up
						straight. Falling backwards on one or both sides scores 0. If you can only just sit up without
						falling over score 5.</Text>, survey.Question_7 + '/10'],
                        [<Text style={{textAlign:'left', fontSize: 10, paddingLeft: 2, paddingRight: 2 }}> Aerobic fitness - 5 minute, 20m lap run.</Text>, survey.Question_8 + '/10'],
                        [<Text style={{textAlign:'left', fontSize: 10, paddingLeft: 2, paddingRight: 2 }}> Aerobic Training sessions per week - of at least 30 minutes with heart rate over 120.</Text>, survey.Question_9 + '/10'],
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
export default PDFfitnessProfile;
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
