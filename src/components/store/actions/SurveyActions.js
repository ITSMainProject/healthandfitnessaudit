/*************************************************
 * Class Name: SurveyActions
 * Created Date: 15/09/2020 
 * Edited By: Aaron
 * Last Edited: 15/09/2020
 * -----------------------------------------------
 * Imports into:
 * every surveyList class
 * ----------------------------------------------
 * Description:
 * Makes asynchronous calls to delete / add data to firebase
 * before dispatching the data to our reducer
 *************************************************/

export const updatePublicOrPrivateSurveyStatus = (status) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => { 
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const userUid = getState().firebase.auth.uid;

        const permissionsUpdate = [];
        permissionsUpdate.push(status);

        firestore.collection('users').doc(userUid).update({
            SurveyPermissions:  permissionsUpdate
      }).then(() => {
            dispatch({type: 'SURVEY_PERMISSIONS_UPDATE', status});
       }).catch((err) => {
            dispatch({type: 'SURVEY_PERMISSIONS_UPDATE_ERROR', err});
        }) 
    }
}


export const createSurvey = (survey) => {   
    return (dispatch, getState, { getFirebase, getFirestore }) => { 
        const userID = getState().firebase.auth.uid;
        const firestore = getFirestore();
        const profile = getState().firebase.profile

        //grab the survey document allocated to the logged in user
        var docRef = firestore.collection("surveys").doc(userID).collection(survey.title).doc('results');
        docRef.get().then(function(doc) {     
            const surveyResults = [];
            if (doc.exists) { //if document already exists, apply survey data to array inside firestore document
                const surveyResultsReplacement = [];
                if(doc.data().results.length < 10){
                    surveyResults.push({...survey, createdDate: new Date(), authorFirstName: profile.firstName, authorLastName: profile.lastName})
                    firestore.collection('surveys').doc(userID).collection(survey.title).doc('results').update({
                        results:  firestore.FieldValue.arrayUnion(
                            ...surveyResults
                            )
                    }).then(() => {

                        //apply the latest result to the array inside the users profile document.
                        var docRef2 = firestore.collection("users").doc(userID);
                        docRef2.get().then(function(doc) { 

                            const surveyList = {
                                HealthClimate: 0,
                                FitnessProfile: 0,
                                UniversalFitnessTest: 0,
                                SpecificJointAssessment: 0,
                                Musculoskeletal: 0,
                                MetabolicHealthProfile: 0,
                                DietProfile: 0,
                                ChemicalIntakeProfile: 0,
                                StressRiskProfile: 0,
                                CareerSatisfactionProfile: 0,
                                MeaningAndPurpose: 0,
                                FamilyLifeProfile: 0,
                                FinanceProfile: 0,
                                PeopleProfile: 0
                            }
                            
                            surveyList.HealthClimate = doc.data().SurveyResults[0].HealthClimate;
                            surveyList.FitnessProfile = doc.data().SurveyResults[0].FitnessProfile;
                            surveyList.UniversalFitnessTest = doc.data().SurveyResults[0].UniversalFitnessTest;
                            surveyList.SpecificJointAssessment = doc.data().SurveyResults[0].SpecificJointAssessment;
                            surveyList.Musculoskeletal = doc.data().SurveyResults[0].Musculoskeletal;
                            surveyList.MetabolicHealthProfile = doc.data().SurveyResults[0].MetabolicHealthProfile;
                            surveyList.DietProfile = doc.data().SurveyResults[0].DietProfile;
                            surveyList.ChemicalIntakeProfile = doc.data().SurveyResults[0].ChemicalIntakeProfile;
                            surveyList.StressRiskProfile = doc.data().SurveyResults[0].StressRiskProfile;
                            surveyList.CareerSatisfactionProfile = doc.data().SurveyResults[0].CareerSatisfactionProfile;
                            surveyList.MeaningAndPurpose = doc.data().SurveyResults[0].MeaningAndPurpose;
                            surveyList.FamilyLifeProfile = doc.data().SurveyResults[0].FamilyLifeProfile;
                            surveyList.FinanceProfile = doc.data().SurveyResults[0].FinanceProfile;
                            surveyList.PeopleProfile = doc.data().SurveyResults[0].PeopleProfile;
                            
                            if(survey.title==='HealthClimate') { surveyList.HealthClimate = survey.totalScore }
                            if(survey.title==='FitnessProfile') { surveyList.FitnessProfile = survey.totalScore }
                            if(survey.title==='UniversalFitnessTest') { surveyList.UniversalFitnessTest = survey.totalScore }
                            if(survey.title==='SpecificJointAssessment') {surveyList.SpecificJointAssessment = survey.totalScore }
                            if(survey.title==='Musculoskeletal') { surveyList.Musculoskeletal = survey.totalScore }
                            if(survey.title==='MetabolicHealthProfile') { surveyList.MetabolicHealthProfile = survey.totalScore }
                            if(survey.title==='DietProfile') { surveyList.DietProfile = survey.totalScore }
                            if(survey.title==='ChemicalIntakeProfile') {  surveyList.ChemicalIntakeProfile = survey.totalScore }
                            if(survey.title==='StressRiskProfile') {  surveyList.StressRiskProfile = survey.totalScore }
                            if(survey.title==='CareerSatisfactionProfile') { surveyList.CareerSatisfactionProfile = survey.totalScore }
                            if(survey.title==='MeaningAndPurpose') { surveyList.MeaningAndPurpose = survey.totalScore }
                            if(survey.title==='FamilyLifeProfile') { surveyList.FamilyLifeProfile = survey.totalScore }
                            if(survey.title==='FinanceProfile') { surveyList.FinanceProfile = survey.totalScore }
                            if(survey.title==='PeopleProfile') { surveyList.PeopleProfile = survey.totalScore }

                            const surveyResultsList = [];
                            surveyResultsList.push(surveyList);

                            firestore.collection('users').doc(userID).update({
                                SurveyResults:  surveyResultsList
                            }).then(() => {
                                dispatch({ type: 'CREATE_SURVEY', survey });
                            }).catch((err) => {
                                dispatch({type: 'CREATE_SURVEY_ERROR', err});
                            })          
                        })
                    }).catch((err) => {
                        dispatch({type: 'CREATE_SURVEY_ERROR', err});
                    }) 
                }
                else{
                    for(var i = 1; i < doc.data().results.length; i++) {
                        surveyResultsReplacement.push(doc.data().results[i])
                    }
                    surveyResultsReplacement.push({...survey, createdDate: new Date(),authorFirstName: profile.firstName, authorLastName: profile.lastName})
                    firestore.collection('surveys').doc(userID).collection(survey.title).doc('results').update({
                        results:  surveyResultsReplacement
                    }).then(() => {
                        //apply the latest result to the array inside the users profile document.
                        var docRef2 = firestore.collection("users").doc(userID);
                        docRef2.get().then(function(doc) { 

                            const surveyList = {
                                HealthClimate: 0,
                                FitnessProfile: 0,
                                UniversalFitnessTest: 0,
                                SpecificJointAssessment: 0,
                                Musculoskeletal: 0,
                                MetabolicHealthProfile: 0,
                                DietProfile: 0,
                                ChemicalIntakeProfile: 0,
                                StressRiskProfile: 0,
                                CareerSatisfactionProfile: 0,
                                MeaningAndPurpose: 0,
                                FamilyLifeProfile: 0,
                                FinanceProfile: 0,
                                PeopleProfile: 0
                            }
                            
                            surveyList.HealthClimate = doc.data().SurveyResults[0].HealthClimate;
                            surveyList.FitnessProfile = doc.data().SurveyResults[0].FitnessProfile;
                            surveyList.UniversalFitnessTest = doc.data().SurveyResults[0].UniversalFitnessTest;
                            surveyList.SpecificJointAssessment = doc.data().SurveyResults[0].SpecificJointAssessment;
                            surveyList.Musculoskeletal = doc.data().SurveyResults[0].Musculoskeletal;
                            surveyList.MetabolicHealthProfile = doc.data().SurveyResults[0].MetabolicHealthProfile;
                            surveyList.DietProfile = doc.data().SurveyResults[0].DietProfile;
                            surveyList.ChemicalIntakeProfile = doc.data().SurveyResults[0].ChemicalIntakeProfile;
                            surveyList.StressRiskProfile = doc.data().SurveyResults[0].StressRiskProfile;
                            surveyList.CareerSatisfactionProfile = doc.data().SurveyResults[0].CareerSatisfactionProfile;
                            surveyList.MeaningAndPurpose = doc.data().SurveyResults[0].MeaningAndPurpose;
                            surveyList.FamilyLifeProfile = doc.data().SurveyResults[0].FamilyLifeProfile;
                            surveyList.FinanceProfile = doc.data().SurveyResults[0].FinanceProfile;
                            surveyList.PeopleProfile = doc.data().SurveyResults[0].PeopleProfile;
                            
                            if(survey.title==='HealthClimate') { surveyList.HealthClimate = survey.totalScore }
                            if(survey.title==='FitnessProfile') { surveyList.FitnessProfile = survey.totalScore }
                            if(survey.title==='UniversalFitnessTest') { surveyList.UniversalFitnessTest = survey.totalScore }
                            if(survey.title==='SpecificJointAssessment') {surveyList.SpecificJointAssessment = survey.totalScore }
                            if(survey.title==='Musculoskeletal') { surveyList.Musculoskeletal = survey.totalScore }
                            if(survey.title==='MetabolicHealthProfile') { surveyList.MetabolicHealthProfile = survey.totalScore }
                            if(survey.title==='DietProfile') { surveyList.DietProfile = survey.totalScore }
                            if(survey.title==='ChemicalIntakeProfile') {  surveyList.ChemicalIntakeProfile = survey.totalScore }
                            if(survey.title==='StressRiskProfile') {  surveyList.StressRiskProfile = survey.totalScore }
                            if(survey.title==='CareerSatisfactionProfile') { surveyList.CareerSatisfactionProfile = survey.totalScore }
                            if(survey.title==='MeaningAndPurpose') { surveyList.MeaningAndPurpose = survey.totalScore }
                            if(survey.title==='FamilyLifeProfile') { surveyList.FamilyLifeProfile = survey.totalScore }
                            if(survey.title==='FinanceProfile') { surveyList.FinanceProfile = survey.totalScore }
                            if(survey.title==='PeopleProfile') { surveyList.PeopleProfile = survey.totalScore }

                            const surveyResultsList = [];
                            surveyResultsList.push(surveyList);

                            firestore.collection('users').doc(userID).update({
                                SurveyResults:  surveyResultsList
                            }).then(() => {
                                dispatch({ type: 'CREATE_SURVEY', survey });
                            }).catch((err) => {
                                dispatch({type: 'CREATE_SURVEY_ERROR', err});
                            })                   
                        })                    
                    }).catch((err) => {
                        dispatch({type: 'CREATE_SURVEY_ERROR', err});
                    }) 
                }
            } 
            else { //if document doesnt exist, create new document and apply survey data to firestore
                surveyResults.push({...survey, createdDate: new Date(),authorFirstName: profile.firstName, authorLastName: profile.lastName})

                firestore.collection('surveys').doc(userID).collection(survey.title).doc('results').set({
                    results:  firestore.FieldValue.arrayUnion(...surveyResults)
                }).then(() => {
                    //apply the latest result to the array inside the users profile document.
                    var docRef2 = firestore.collection("users").doc(userID);
                    docRef2.get().then(function(doc) { 

                        const surveyList = {
                            HealthClimate: 0,
                            FitnessProfile: 0,
                            UniversalFitnessTest: 0,
                            SpecificJointAssessment: 0,
                            Musculoskeletal: 0,
                            MetabolicHealthProfile: 0,
                            DietProfile: 0,
                            ChemicalIntakeProfile: 0,
                            StressRiskProfile: 0,
                            CareerSatisfactionProfile: 0,
                            MeaningAndPurpose: 0,
                            FamilyLifeProfile: 0,
                            FinanceProfile: 0,
                            PeopleProfile: 0
                        }
                        
                        surveyList.HealthClimate = doc.data().SurveyResults[0].HealthClimate;
                        surveyList.FitnessProfile = doc.data().SurveyResults[0].FitnessProfile;
                        surveyList.UniversalFitnessTest = doc.data().SurveyResults[0].UniversalFitnessTest;
                        surveyList.SpecificJointAssessment = doc.data().SurveyResults[0].SpecificJointAssessment;
                        surveyList.Musculoskeletal = doc.data().SurveyResults[0].Musculoskeletal;
                        surveyList.MetabolicHealthProfile = doc.data().SurveyResults[0].MetabolicHealthProfile;
                        surveyList.DietProfile = doc.data().SurveyResults[0].DietProfile;
                        surveyList.ChemicalIntakeProfile = doc.data().SurveyResults[0].ChemicalIntakeProfile;
                        surveyList.StressRiskProfile = doc.data().SurveyResults[0].StressRiskProfile;
                        surveyList.CareerSatisfactionProfile = doc.data().SurveyResults[0].CareerSatisfactionProfile;
                        surveyList.MeaningAndPurpose = doc.data().SurveyResults[0].MeaningAndPurpose;
                        surveyList.FamilyLifeProfile = doc.data().SurveyResults[0].FamilyLifeProfile;
                        surveyList.FinanceProfile = doc.data().SurveyResults[0].FinanceProfile;
                        surveyList.PeopleProfile = doc.data().SurveyResults[0].PeopleProfile;
                        
                        if(survey.title==='HealthClimate') { surveyList.HealthClimate = survey.totalScore }
                        if(survey.title==='FitnessProfile') { surveyList.FitnessProfile = survey.totalScore }
                        if(survey.title==='UniversalFitnessTest') { surveyList.UniversalFitnessTest = survey.totalScore }
                        if(survey.title==='SpecificJointAssessment') {surveyList.SpecificJointAssessment = survey.totalScore }
                        if(survey.title==='Musculoskeletal') { surveyList.Musculoskeletal = survey.totalScore }
                        if(survey.title==='MetabolicHealthProfile') { surveyList.MetabolicHealthProfile = survey.totalScore }
                        if(survey.title==='DietProfile') { surveyList.DietProfile = survey.totalScore }
                        if(survey.title==='ChemicalIntakeProfile') {  surveyList.ChemicalIntakeProfile = survey.totalScore }
                        if(survey.title==='StressRiskProfile') {  surveyList.StressRiskProfile = survey.totalScore }
                        if(survey.title==='CareerSatisfactionProfile') { surveyList.CareerSatisfactionProfile = survey.totalScore }
                        if(survey.title==='MeaningAndPurpose') { surveyList.MeaningAndPurpose = survey.totalScore }
                        if(survey.title==='FamilyLifeProfile') { surveyList.FamilyLifeProfile = survey.totalScore }
                        if(survey.title==='FinanceProfile') { surveyList.FinanceProfile = survey.totalScore }
                        if(survey.title==='PeopleProfile') { surveyList.PeopleProfile = survey.totalScore }

                        const surveyResultsList = [];
                        surveyResultsList.push(surveyList);

                        firestore.collection('users').doc(userID).update({
                            SurveyResults:  surveyResultsList
                        }).then(() => {
                            dispatch({ type: 'CREATE_SURVEY', survey });
                        }).catch((err) => {
                            dispatch({type: 'CREATE_SURVEY_ERROR', err});
                        })                   
                    })  
                }).catch((err) => {
                    dispatch({type: 'CREATE_SURVEY_ERROR', err});
                })  
            }  
        })    
    }
};