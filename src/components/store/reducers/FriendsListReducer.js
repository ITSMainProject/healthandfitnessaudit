const initState = {
    friendsList: [
       {fname: 'Aaron', lname: 'Bergman', friendStatus: 'friend'},
       {fname: 'Joe', lname: 'Scott', friendStatus: 'pendingSent'},
       {fname: 'Bill', lname: 'Jones', friendStatus: 'pendingReceived'},
    ]
}

const FriendsListReducer = (state = initState, action) => {
    switch(action.type){
        case 'SEND_REQUEST': 
            console.log('Sent request', action.friend);
            return state;
        case 'SEND_REQUEST_FAILED': 
            console.log('Sent request failure', action.err);
            return state;
        case 'CANCEL_REQUEST_CONFIRM': 
            console.log('Canceled friend request successful', action.err);
            return state;
        case 'CANCEL_REQUEST_FAILED': 
            console.log('Canceled friend friend failure', action.err);
            return state;
        case 'ACCEPT_REQUEST_CONFIRM': 
            console.log('Accepted friend request successful', action.err);
            return state;
        case 'ACCEPT_REQUEST_FAILED': 
            console.log('Accepted friend friend failure', action.err);
            return state;
        default:
            return state;       
    }
}

export default FriendsListReducer