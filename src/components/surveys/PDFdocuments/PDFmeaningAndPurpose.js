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


class PDFmeaningAndPurpose extends Component {
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
				<Text style={{textAlign: 'center'}}>{'Meaning And Purpose - Results'}</Text>
			</View>
			<View style={styles.sectionResults}>
				
				<Table
					th
					col={['80%', '20%']}
					children={[
                        ['Question','Result'],
                        [<Text style={{textAlign:'left', paddingLeft: 2, paddingRight: 2 }}>Are you living the life you’d like to live?</Text>, survey.Question_1 + '/10'],
                        [<Text style={{textAlign:'left', paddingLeft: 2, paddingRight: 2 }}>Are you a power in your own life? Are you getting enough of what you want and
						need to live a fit, health, rich and fulfilling life?</Text>, survey.Question_2 + '/10'],
                        [<Text style={{textAlign:'left', paddingLeft: 2, paddingRight: 2 }}>Are you a power in the lives of other people?</Text>, survey.Question_3 + '/10'],
                        [<Text style={{textAlign:'left', paddingLeft: 2, paddingRight: 2 }}>Are you an optimistic person?</Text>, survey.Question_4 + '/10'],
                        [<Text style={{textAlign:'left', paddingLeft: 2, paddingRight: 2 }}>Do you have wisdom?</Text>, survey.Question_5 + '/10'],
                        [<Text style={{textAlign:'left', paddingLeft: 2, paddingRight: 2 }}>Are you a courageous person? Do you know what your heart’s desire is and are
						you working toward it?</Text>, survey.Question_6 + '/10'],
                        [<Text style={{textAlign:'left', paddingLeft: 2, paddingRight: 2 }}>Is there a lot of love in your life?</Text>, survey.Question_7 + '/10'],
                        [<Text style={{textAlign:'left', paddingLeft: 2, paddingRight: 2 }}>Are you a person of integrity? Do you usually do what you say (to yourself and
							others) you’re going to do?</Text>, survey.Question_8 + '/10'],
                        [<Text style={{textAlign:'left', paddingLeft: 2, paddingRight: 2 }}>Are you an enthusiastic person?</Text>, survey.Question_9 + '/10'],
                        [<Text style={{textAlign:'left', paddingLeft: 2, paddingRight: 2 }}>Are you thankful for what you’ve got?</Text>, survey.Question_10 + '/10'],
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
export default PDFmeaningAndPurpose;
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
