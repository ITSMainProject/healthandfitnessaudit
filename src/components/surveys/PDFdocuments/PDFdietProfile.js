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


class PDFdietProfile extends Component {
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
				<Text style={{textAlign: 'center'}}>{'Diet Profile - Results'}</Text>
			</View>
			<View style={styles.sectionResults}>
				
				<Table
					th
					col={['80%', '20%']}
					children={[
					['Question','Result'],
					[<Text style={{textAlign:'left', paddingLeft: 2, paddingRight: 2 }}> How close are you to being your ideal weight? Scores based on number of kilos of body fat over what you consider to be your ideal weight.</Text>, survey.Question_1 + '/10'],
					[<Text style={{textAlign:'left', paddingLeft: 2, paddingRight: 2 }}> Do you eat a decent breakfast or is it just flour and sugar? Dont score more than 6 it its just flour and sugar.</Text>, survey.Question_2 + '/10'],
					[<Text style={{textAlign:'left', paddingLeft: 2, paddingRight: 2 }}> For your weight, do you eat a high fat diet?</Text>, survey.Question_3 + '/10'],
					[<Text style={{textAlign:'left', paddingLeft: 2, paddingRight: 2 }}> Do you predominantly form the top of the Hourglass: - plenty of vegetables and fruit mixed with adequate protein and fat?</Text>, survey.Question_4 + '/10'],
					[<Text style={{textAlign:'left', paddingLeft: 2, paddingRight: 2 }}> For your weight, do you eat a high flour and sugar diet?</Text>, survey.Question_5 + '/10'],
					[<Text style={{textAlign:'left', paddingLeft: 2, paddingRight: 2 }}> How many glasses of plain, unadulterated water (or green tea) do you drink each day?</Text>, survey.Question_6 + '/10'],
					[<Text style={{textAlign:'left', paddingLeft: 2, paddingRight: 2 }}> When you look at your health, do you believe you're getting enough of the essential vitamins, minerals, fatty acids and glycoproteins?</Text>, survey.Question_7 + '/10'],
					[<Text style={{textAlign:'left', paddingLeft: 2, paddingRight: 2 }}> Do you eat too much?</Text>, survey.Question_8 + '/10'],
					[<Text style={{textAlign:'left', paddingLeft: 2, paddingRight: 2 }}> Are you ruled by your addictions and cravings to food which are not good for you?</Text>, survey.Question_9 + '/10'],
					[<Text style={{textAlign:'left', paddingLeft: 2, paddingRight: 2 }}> Does the back end of your system work like a charm? - score low if you have irritable bowel or diarrhoea, are constipated, and/or have piles.</Text>, survey.Question_10 + '/10'],
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
export default PDFdietProfile;
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
