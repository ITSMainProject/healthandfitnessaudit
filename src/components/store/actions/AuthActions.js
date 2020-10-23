/*************************************************
 * Class Name: AuthActions
 * Created Date: 18/09/2020 
 * Last Edited: 18/09/2020
 * -----------------------------------------------
 * Description:
 * In charge of sending requests to firebase for
 * authentication reasons:
 * create account / sign in / sign out
 *************************************************/

export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err});
        });
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' });
        });
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

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

        const surveyPermissionsState = {
            HealthClimate: true,
            FitnessProfile: true,
            UniversalFitnessTest: true,
            SpecificJointAssessment: true,
            Musculoskeletal: true,
            MetabolicHealthProfile: true,
            DietProfile: true,
            ChemicalIntakeProfile: true,
            StressRiskProfile: true,
            CareerSatisfactionProfile: true,
            MeaningAndPurpose: true,
            FamilyLifeProfile: true,
            FinanceProfile: true,
            PeopleProfile: true
        }

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((response) => {

            const surveyResultsList = [];
            surveyResultsList.push(surveyList);

            const surveyPermissions = [];
            surveyPermissions.push(surveyPermissionsState);

            return firestore.collection('users').doc(response.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0],
                age: newUser.age,
                gender: newUser.gender,
                userEmail: newUser.email,
                SurveyResults:  firestore.FieldValue.arrayUnion(...surveyResultsList),
                SurveyPermissions: firestore.FieldValue.arrayUnion(...surveyPermissions)
            })
        
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS'})
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err})
        }).then(() => {
            var user = firebase.auth().currentUser
            var userUid = user.uid
            var userEmail = newUser.email
            var firstName = newUser.firstName
            var lastName = newUser.lastName
            let documentRef =  firestore.collection('emailToUid').doc('emailToUid');

            return documentRef.update({
                users: firestore.FieldValue.arrayUnion({userEmail,userUid,firstName,lastName })
            }).then(red => {
                console.log('added user to group doc')
            })
        }).catch( err => {
            console.log('error adding user to group doc')
        })
    }
    }

export const resetPassword = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().sendPasswordResetEmail(
            credentials.email
        ).then(() => {
            dispatch({ type: 'PASSWORD_RESET_SUCCESS' });
        }).catch((err) => {
            dispatch({ type: 'PASSWORD_RESET_ERROR', err});
        });
    }
}