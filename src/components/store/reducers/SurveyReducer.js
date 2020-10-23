import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const initState = {
    surveys: [
       {id: '1', title: 'Specific Joint Assessment Results', score: '100/120', dateSubmitted: '23/12/2020'},
       {id: '2', title: 'Specific Joint Assessment Results', score: '60/120', dateSubmitted: '26/12/2020'},
       {id: '3', title: 'Specific Joint Assessment Results', score: '20/120', dateSubmitted: '26/12/2020'},  
       {id: '4', title: 'Specific Joint Assessment Results', score: '70/120', dateSubmitted: '29/12/2020'} 
    ]
}

const SurveyReducer = (state = initState, action) => {
    //check action type, delete or add

    switch(action.type) {
        case 'CREATE_SURVEY':
            console.log('created survey', action.survey);
            toast.success('Survey saved successfully')
            return state;
        case 'CREATE_SURVEY_ERROR':
            console.log('create survey error', action.err);
            toast.error('Unable to save sruvey ' + action.message);
            return state;
        case 'SURVEY_PERMISSIONS_UPDATE':
            //console.log('create survey error', action);
            toast.success('Successfully updated permissions');
            return state;
        case 'SURVEY_PERMISSIONS_UPDATE_ERROR':
            // console.log('create survey error', action.err);
            toast.error('Unable to update permissions ' + action.message);
            return state;
        default:
            return state;
    }
}

export default SurveyReducer