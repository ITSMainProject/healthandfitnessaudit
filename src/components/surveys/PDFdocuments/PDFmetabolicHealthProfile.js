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


class PDFmetabolicHealthProfile extends Component {
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
				<Text style={{textAlign: 'center'}}>{'Metabolic Health Profile - Results'}</Text>
			</View>
			<View style={styles.sectionResults}>
				
				<Table
					th
					col={['80%', '20%']}
					children={[
                        ['Question','Result'],
                        [<Text style={{textAlign:'left', paddingLeft: 2, paddingRight: 2 }}>What was your score on the Health, Fitness and Wellbeing profile</Text>, survey.Question_1 + '/10'],
                        [<Text style={{textAlign:'left', paddingLeft: 2, paddingRight: 2 }}>Are you about your ideal weight? Scores based on number of kilos of body fat over what you consider to be your ideal weight.</Text>, survey.Question_2 + '/10'],
                        [<Text style={{textAlign:'left', paddingLeft: 2, paddingRight: 2}}>Blood Glucose level - mmol/l ....... Preferable fasted. Score 0 if on medication.</Text>, survey.Question_3 + '/10'],
                        [<Text style={{textAlign:'left', paddingLeft: 2, paddingRight: 2 }}>Cholesterol level (Unfasted) - mmol/l .........</Text>, survey.Question_4 + '/10'],
                        [<Text style={{textAlign:'left', paddingLeft: 2, paddingRight: 2 }}>Blood pressure - systolic ......./ (The higher figure.) Normal is 120 for men and 110 - 120 for women. Score 0 if on medication.</Text>, survey.Question_5 + '/10'],
                        [<Text style={{textAlign:'left', paddingLeft: 2, paddingRight: 2 }}>Blood pressure - diastolic ...../ (The lower figure.) Normal is 80 for men and 70 - 80 for women. Score 0 if on medication.</Text>, survey.Question_6 + '/10'],
                        [<Text style={{textAlign:'left', paddingLeft: 2, paddingRight: 2 }}>Do you smoke? If ‘yes’ score zero. If ‘no’, score 10.</Text>, survey.Question_7 + '/10'],
                        [<Text style={{textAlign:'left', paddingLeft: 2, paddingRight: 2 }}>Aerobic fitness 5 minute, 20m lap run. Laps .....</Text>, survey.Question_8 + '/30'],
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
export default PDFmetabolicHealthProfile;
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
