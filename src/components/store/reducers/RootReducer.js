import AuthReducer from '../reducers/AuthReducer'
import SurveyReducer from '../reducers/SurveyReducer'
import FriendsListReducer from '../reducers/FriendsListReducer'
import FriendSurveyPermissionsReducer from '../reducers/FriendSurveyPermissions'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore' 
import { firebaseReducer } from 'react-redux-firebase'

const RootReducer = combineReducers({
    auth: AuthReducer,
    survey: SurveyReducer,
    friendsList: FriendsListReducer,
    friendsProfile: FriendSurveyPermissionsReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default RootReducer