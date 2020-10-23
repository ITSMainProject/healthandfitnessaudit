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


class PDFmusculoSkeletal extends Component {
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
				<Text style={{textAlign: 'center'}}>{'Musculo Skeletal - Results'}</Text>
			</View>
			<View style={styles.sectionResults}>
				
				<Table
					th
					col={['80%', '20%']}
					children={[
						['Question','Result'],
                        [<Text style={{textAlign:'left', fontSize: 10, paddingLeft: 2, paddingRight: 2  }}> How would you rate the current condition of your musculoskeletal system?</Text>, survey.Question_1 + '/10'],
                        [<Text style={{textAlign:'left', fontSize: 10, paddingLeft: 2, paddingRight: 2  }}> How close are you to your <Text style={{fontWeight:'bold'}}>ideal weight</Text>? Scores based on kilos over your ideal
						weight.</Text>, survey.Question_2 + '/10'],
                        [<Text style={{textAlign:'left', fontSize: 10, paddingLeft: 2, paddingRight: 2  }}> How many full squats can you do in 60 seconds? Bottom must get at least half way
						between knees and your heels, use a heal raise if you need to.</Text>, survey.Question_3 + '/10'],
                        [<Text style={{textAlign:'left', fontSize: 10, paddingLeft: 2, paddingRight: 2  }}> sit-ups with feet held in 60 seconds</Text>, survey.Question_4 + '/10'],
                        [<Text style={{textAlign:'left', fontSize: 10, paddingLeft: 2, paddingRight: 2  }}> press-ups in 60 seconds, Men on toes, women on front of thighs with knees, bottom
						and shoulders in a straight line.</Text>, survey.Question_5 + '/10'],
                        [<Text style={{textAlign:'left', fontSize: 10, paddingLeft: 2, paddingRight: 2  }}> Sitting on the floor, with feed outstretched in front of you, see how far down past your
						toes you can reach with your fingers. Keep your knees straight.</Text>, survey.Question_6 + '/10'],
                        [<Text style={{textAlign:'left', fontSize: 10, paddingLeft: 2, paddingRight: 2  }}> With legs crossed and hands clasped behind your back, see if you can sit up straight.
						Just being able to sit up with hands clasped scores 7/10. Sitting up exceptionally straight with a
						hollow in your lower back scores 10/10. Falling backwards on one or both sides scores 0.</Text>, survey.Question_7 + '/10'],
                        [<Text style={{textAlign:'left', fontSize: 10, paddingLeft: 2, paddingRight: 2  }}> Stand with your back to the wall. Place your hands in the surrender position with the
						Back of your forearms, wrists and hands flat back on the wall. Score 10 if you can do it with
						ease. 7/10 is just getting the ‘flat position’. Score lower if you can’t do it at all.</Text>, survey.Question_8 + '/10'],
                        [<Text style={{textAlign:'left', fontSize: 10, paddingLeft: 2, paddingRight: 2  }}> Do you have a regular and systematic strength training program either at home or at
						the gym. Sessions per week.</Text>, survey.Question_9 + '/10'],
                        [<Text style={{textAlign:'left', fontSize: 10, paddingLeft: 2, paddingRight: 2  }}> Do you have a regular and systematic flexibility training program either at home or at
						the gym. It may include yoga, body balance, Pontius Pilates ... Sessions per week.</Text>, survey.Question_10 + '/10'],
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
export default PDFmusculoSkeletal;
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
