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


class PDFuniversalFitnessTest extends Component {
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
				<Text style={{textAlign: 'center'}}>{'Universal Fitness Test - Results'}</Text>
			</View>
			<View style={styles.sectionResults}>
				
				<Table
					th
					col={['80%', '20%']}
					children={[
						['Question','Result'],
                        [<Text style={{textAlign:'left',fontSize: 10,paddingLeft: 2, paddingRight: 2 }}> 20 metre run - number of 20m laps in 5 minutes. This is the classic test of aerobic fitness, superseding the 'beep test'.</Text>, survey.Question_1+ '/10'],
                        [<Text style={{textAlign:'left',fontSize: 10,paddingLeft: 2, paddingRight: 2 }}> Situps - consecutive number of sit-ups until exhaustion - feet held, hands clasping opposite shoulders, coming up so elbows touch the knees, upper back (not head) 'hitting' the ground.</Text>, survey.Question_2+ '/10'],
                        [<Text style={{textAlign:'left',fontSize: 10,paddingLeft: 2, paddingRight: 2 }}> Pressups - consectuive number of press ups until exhaustion - men on toes, women on knees.</Text>, survey.Question_3 + '/10'],
                        [<Text style={{textAlign:'left',fontSize: 10,paddingLeft: 2, paddingRight: 2}}> Squats - consecutive number of squats until exhaustion.</Text>, survey.Question_4 + '/10'],
                        [<Text style={{textAlign:'left',fontSize: 10,paddingLeft: 2, paddingRight: 2 }}> Arm hang - hanging from a bar until exhaustion.</Text>, survey.Question_5 + '/10'],
                        [<Text style={{textAlign:'left',fontSize: 10,paddingLeft: 2, paddingRight: 2 }}> Percent body fat</Text>, survey.Question_6 + '/10'],
                        [<Text style={{textAlign:'left',fontSize: 10,paddingLeft: 2, paddingRight: 2 }}> Flexibility - sit and reach - test of hamstring flexibility</Text>, survey.Question_7 + '/10'],
                        [<Text style={{textAlign:'left',fontSize: 10,paddingLeft: 2, paddingRight: 2 }}> Ability to sit up straight - test of buttock flexibility</Text>, survey.Question_8 + '/10'],
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
export default PDFuniversalFitnessTest;