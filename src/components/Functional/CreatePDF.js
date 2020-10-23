import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';
import PDFhealthClimate from '../surveys/PDFdocuments/PDFhealthClimate';
import PDFfitnessProfile from '../surveys/PDFdocuments/PDFfitnessProfile';
import PDFuniversalFitnessTest from '../surveys/PDFdocuments/PDFuniversalFitnessTest';
import PDFspecificJointAssessment from '../surveys/PDFdocuments/PDFspecificJointAssessment';
import PDFmusculoSkeletal from '../surveys/PDFdocuments/PDFmusculoSkeletal';
import PDFmetabolicHealthProfile from '../surveys/PDFdocuments/PDFmetabolicHealthProfile';
import PDFdietProfile from '../surveys/PDFdocuments/PDFdietProfile';
import PDFchemicalIntakeProfile from '../surveys/PDFdocuments/PDFchemicalIntakeProfile';
import PDFstressRiskProfile from '../surveys/PDFdocuments/PDFstressRiskProfile';
import PDFcareerSatisfactionProfile from '../surveys/PDFdocuments/PDFcareerSatisfactionProfile';
import PDFmeaningAndPurpose from '../surveys/PDFdocuments/PDFmeaningAndPurpose';
import PDFfamilyLife from '../surveys/PDFdocuments/PDFfamilyLife';
import PDFfinance from '../surveys/PDFdocuments/PDFfinance';
import PDFpeople from '../surveys/PDFdocuments/PDFpeople';
import React, {Component} from "react";
import {Text, View, StyleSheet } from '@react-pdf/renderer';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const styles = StyleSheet.create({
	table: {
		width: '100%',
		borderWidth: 2,
		display: 'flex',
		flexDirection: 'column',
		marginVertical: 12
	},
	tableRow:{
		display: 'flex',
		flexDirection: 'row',
	},
	cell: {
		borderWidth: 1,
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		textAlign: 'center',
		flexWrap: 'wrap'
	}
});
export const Table = ({children, col, th}) => (
	<View style={styles.table}>
		{children.map((row, ind) =>
			<View key={ind} style={[styles.tableRow, th && ind === 0 ? styles.em: {}]}>
				{row.map((cell, j) =>
					<View key={j} style={[styles.cell, {width:col[j], height: 40}]}>
						{
							typeof(cell) === 'string' || typeof(cell) === 'number' ? 
							<Text>{cell}</Text> : cell
						}
					</View>
				)}
			</View>
		)}
	</View>
)

const generatePdfDocument = async (props) => {

	const {survey} = props;
	var t = survey.title;
	
	if(t==='SpecificJointAssessment'){const blob = await pdf(( <PDFspecificJointAssessment survey={survey}/>)).toBlob(); saveAs(blob, 'SpecificJointAssessment'); (toast.success('Download successful'));}
	if(t==='HealthClimate'){const blob = await pdf(( <PDFhealthClimate survey={survey}/>)).toBlob(); saveAs(blob, 'Health Climate Survey'); (toast.success('Download successful'));}
    if(t==='FitnessProfile'){const blob = await pdf(( <PDFfitnessProfile survey={survey}/>)).toBlob(); saveAs(blob, 'Fitness Profile'); (toast.success('Download successful'));}
	if(t==='UniversalFitnessTest'){const blob = await pdf(( <PDFuniversalFitnessTest survey={survey}/>)).toBlob(); saveAs(blob, 'Universal Fitness Test'); (toast.success('Download successful'));}
	if(t==='Musculoskeletal'){const blob = await pdf(( <PDFmusculoSkeletal survey={survey}/>)).toBlob(); saveAs(blob, 'Musculoskeletal'); (toast.success('Download successful'));}
	if(t==='MetabolicHealthProfile'){const blob = await pdf(( <PDFmetabolicHealthProfile survey={survey}/>)).toBlob(); saveAs(blob, 'Metabolic Health Profile'); (toast.success('Download successful'));}
	if(t==='DietProfile'){const blob = await pdf(( <PDFdietProfile survey={survey}/>)).toBlob(); saveAs(blob, 'Diet Profile'); (toast.success('Download successful'));}
	if(t==='ChemicalIntakeProfile'){const blob = await pdf(( <PDFchemicalIntakeProfile survey={survey}/>)).toBlob(); saveAs(blob, 'Chemical Intake Profile'); (toast.success('Download successful'));}
	if(t==='StressRiskProfile'){const blob = await pdf(( <PDFstressRiskProfile survey={survey}/>)).toBlob(); saveAs(blob, 'Stress Risk Profile'); (toast.success('Download successful'));}
	if(t==='CareerSatisfactionProfile'){const blob = await pdf(( <PDFcareerSatisfactionProfile survey={survey}/>)).toBlob(); saveAs(blob, 'Career Satisfaction Profile'); (toast.success('Download successful'));}
	if(t==='MeaningAndPurpose'){const blob = await pdf(( <PDFmeaningAndPurpose survey={survey}/>)).toBlob(); saveAs(blob, 'Meaning And Purpose'); (toast.success('Download successful'));}
	if(t==='FamilyLifeProfile'){const blob = await pdf(( <PDFfamilyLife survey={survey}/>)).toBlob(); saveAs(blob, 'Family Life Profile'); (toast.success('Download successful'));}
	if(t==='FinanceProfile'){const blob = await pdf(( <PDFfinance survey={survey}/>)).toBlob(); saveAs(blob, 'Finance Profile'); (toast.success('Download successful'));}
	if(t==='PeopleProfile'){const blob = await pdf(( <PDFpeople survey={survey}/>)).toBlob(); saveAs(blob, 'People Profile'); (toast.success('Download successful'));}
}
export default generatePdfDocument
