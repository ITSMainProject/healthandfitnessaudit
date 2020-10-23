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
		marginBottom: 5,
		marginTop: 5,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 5,
		paddingTop: 5,
	},
	sectionResults: {
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 10,
		marginTop: 2,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingTop: 2,
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


class PDFhealthClimate extends Component {
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
				<Text style={styles.date}>Page 1/3</Text>
				<Text style={{textAlign: 'center'}}>{'Health Climate - Results'}</Text>
			</View>
			<View style={styles.sectionResults}>			
				<Table
					th
					col={['80%', '20%']}
					children={[
                        ['Question','Result'],
                        [<Text style={{textAlign:'left' }}> Headaches (including migraines)</Text>, survey.Question_1 + '/10'],
                        [<Text style={{textAlign:'left' }}> Lack of energy and vitality</Text>, survey.Question_2 + '/10'],
                        [<Text style={{textAlign:'left' }}> Candida - jock itch, thrush, tinea, furry tongue</Text>, survey.Question_3 + '/10'],
                        [<Text style={{textAlign:'left' }}> Poor sleep. (Score 10 if on medication)</Text>, survey.Question_4 + '/10'],
                        [<Text style={{textAlign:'left' }}> Snoring and/or sleep apnoea (use gas mask, score 10)</Text>, survey.Question_5 + '/10'],
                        [<Text style={{textAlign:'left' }}> Musculo-skeletal dysfunction: joint and muscle pain</Text>, survey.Question_6 + '/10'],
                        [<Text style={{textAlign:'left' }}> Frequent colds, flu and sinus</Text>, survey.Question_7 + '/10'],
                        [<Text style={{textAlign:'left' }}> Unsettled stomach, reflux. (If on medication score 10)</Text>, survey.Question_8 + '/10'],
                        [<Text style={{textAlign:'left' }}> Overweight -1 point for every 2kg overweight</Text>, survey.Question_9 + '/10'],
						[<Text style={{textAlign:'left' }}> Irritable bowel, constipation, diarrhoea, piles ... </Text>, survey.Question_10 + '/10'],
						[<Text style={{textAlign:'left' }}> Shortness of breath from asthma</Text>, survey.Question_11 + '/10'],
                        ]} />
			</View>	
        </Page>

		<Page size="A4" style={styles.page}>
			<View style={styles.sectionTop}>
				<Image style={styles.imageLogo} src="../img/PDFLOGO.PNG" />
			</View>
			<View style={styles.section}>
				<Text style={styles.date}>{moment(survey.createdDate.toDate()).format('LLLL')}</Text>
				<Text style={styles.date}>Submitted by: {survey.authorFirstName} {survey.authorLastName}</Text>
				<Text style={styles.date}>Page 2/3</Text>			
			</View>
			<View style={styles.sectionResults}>		
				<Table
					th
					col={['80%', '20%']}
					children={[               
                        [<Text style={{textAlign:'left' }}> Low level of fitness*</Text>, survey.Question_12 + '/10'],
                        [<Text style={{textAlign:'left' }}> Chest pain, palpitations</Text>, survey.Question_13 + '/10'],
                        [<Text style={{textAlign:'left' }}> Rashes, zits, skin outbreaks, psoriasis, itchy skin</Text>, survey.Question_14 + '/10'],
                        [<Text style={{textAlign:'left' }}> Mouth ulcers, cold sore...</Text>, survey.Question_15 + '/10'],
                        [<Text style={{textAlign:'left' }}> Elevated blood pressure (score 10 if on medication)</Text>, survey.Question_16 + '/10'],
                        [<Text style={{textAlign:'left' }}> Elevated blood cholesterol (Score 10 if on medication)</Text>, survey.Question_17 + '/10'],
                        [<Text style={{textAlign:'left' }}> Elevated blood glucose (Score 10 if on medication)</Text>, survey.Question_18 + '/10'],
                        [<Text style={{textAlign:'left' }}> Shakes, nervous tics and mannerisms</Text>, survey.Question_19 + '/10'],
						[<Text style={{textAlign:'left' }}> Grinding teeth</Text>, survey.Question_20 + '/10'],
						[<Text style={{textAlign:'left' }}> Drinking too much alcohol (2 points per drink/day)</Text>, survey.Question_21 + '/10'],
                        [<Text style={{textAlign:'left' }}> Smoking too many cigarettes (1 point per cigarette per day)</Text>, survey.Question_22 + '/10'],                   
                        ]} />
			</View>		
        </Page>

		<Page size="A4" style={styles.page}>
			<View style={styles.sectionTop}>
				<Image style={styles.imageLogo} src="../img/PDFLOGO.PNG" />
			</View>
			<View style={styles.section}>
				<Text style={styles.date}>{moment(survey.createdDate.toDate()).format('LLLL')}</Text>	
				<Text style={styles.date}>Submitted by: {survey.authorFirstName} {survey.authorLastName}</Text>
				<Text style={styles.date}>Page 3/3</Text>		
			</View>
			<View style={styles.sectionResults}>		
				<Table
					th
					col={['80%', '20%']}
					children={[     
                        [<Text style={{textAlign:'left' }}> Drinking too much caffeine ( 1 point per cup per day)</Text>, survey.Question_23 + '/10'],
                        [<Text style={{textAlign:'left' }}> Anxious about life, insecure, apprehensive about the future</Text>, survey.Question_24 + '/10'],
                        [<Text style={{textAlign:'left' }}> Are you depressed? (Score 10 if on medication)</Text>, survey.Question_25 + '/10'],
                        [<Text style={{textAlign:'left' }}> Are you in the wrong job?</Text>, survey.Question_26 + '/10'],
                        [<Text style={{textAlign:'left' }}> Do you feel under-appreciated at work?</Text>, survey.Question_27 + '/10'],
                        [<Text style={{textAlign:'left' }}> Do you have a poor work/life balance?</Text>, survey.Question_28 + '/10'],
                        [<Text style={{textAlign:'left' }}> Are you unhappy with your family life?</Text>, survey.Question_29 + '/10'],
                        [<Text style={{textAlign:'left' }}> Are you unhappy with your financial status?</Text>, survey.Question_30 + '/10'],
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
export default PDFhealthClimate;
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
