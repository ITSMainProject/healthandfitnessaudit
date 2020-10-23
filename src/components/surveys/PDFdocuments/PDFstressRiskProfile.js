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


class PDFstressRiskProfile extends Component {
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
				<Text style={{textAlign: 'center'}}>{'Stress Risk Profile - Results'}</Text>
			</View>
			<View style={styles.sectionResults}>
				
				<Table
					th
					col={['80%', '20%']}
					children={[
						['Question','Result'],
                        [<Text style={{textAlign:'left',fontSize: 10, paddingLeft: 2, paddingRight: 2 }}>Rate your ability to manage the stress of your life. The more stressed you are the lower your score.</Text>, survey.Question_1 + '/10'],
                        [<Text style={{textAlign:'left',fontSize: 10, paddingLeft: 2, paddingRight: 2 }}>Do you get a good nights sleep? Do you get enough sleep, do you get to sleep quickly, do you sleep like a log and wake up refreshed in the morning?</Text>, survey.Question_2 + '/10'],
                        [<Text style={{textAlign:'left',fontSize: 10, paddingLeft: 2, paddingRight: 2 }}>What was the longest number of consecutive days holiday you had away from home the last 12 months?</Text>, survey.Question_3 + '/10'],
                        [<Text style={{textAlign:'left',fontSize: 10, paddingLeft: 2, paddingRight: 2 }}>Do you keep yourself fit and healthy to the best of your ability?</Text>, survey.Question_4 + '/10'],
                        [<Text style={{textAlign:'left',fontSize: 10, paddingLeft: 2, paddingRight: 2 }}>Is there balance in your life? Do you have good distractors that switch you off from being busy and miserable and which give you great pleasure?</Text>, survey.Question_5 + '/10'],
                        [<Text style={{textAlign:'left',fontSize: 10, paddingLeft: 2, paddingRight: 2 }}>Do you take time off at lunch time to get away from your desk and get some fresh air? Score high if you exercise with vigor at lunch time.</Text>, survey.Question_6 + '/10'],
                        [<Text style={{textAlign:'left',fontSize: 10, paddingLeft: 2, paddingRight: 2 }}>What is the average number of hours you work each week - if you have young children include work-work and domestic work?</Text>, survey.Question_7 + '/10'],
                        [<Text style={{textAlign:'left',fontSize: 10, paddingLeft: 2, paddingRight: 2 }}>Are you good at giving back to your self? Do you spend time thinking about your self? Do you give your self time and attention it is craving?</Text>, survey.Question_8 + '/10'],
                        [<Text style={{textAlign:'left',fontSize: 10, paddingLeft: 2, paddingRight: 2 }}>How many times a week do you meditate, for 10 minutes or more?</Text>, survey.Question_9 + '/10'],
                        [<Text style={{textAlign:'left',fontSize: 10, paddingLeft: 2, paddingRight: 2 }}>Are you happy with your family (and romantic) relationships?</Text>, survey.Question_10 + '/10'],
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
export default PDFstressRiskProfile;
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
