/*************************************************
 * Class Name: FriendsListActions
 * Created Date: 18/09/2020 
 * Last Edited: 18/10/2020
 * -----------------------------------------------
 * Description:
 *************************************************/
export const sendFriendRequest = (myfriend) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {       
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const userUid = getState().firebase.auth.uid;

        //state friends database
        const friend = {
        user: userUid, //your user UID    
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.userEmail, //your email address
        status: 'received', //received status
        friendStatus: 'pending', //pending status
        personalMessage: myfriend.personalMessage //personal message (remove when users are friends)
        }

        const friendsDatabase = [];
        friendsDatabase.push(friend);
        
        firestore.collection('users').doc(myfriend.user).update({
              friends:  firestore.FieldValue.arrayUnion(...friendsDatabase)
        }).then(() => {

        //state own database
         const friend = {
                user: myfriend.user, //friend user UID
                email: myfriend.email, //friend email address
                firstName: myfriend.firstName,
                lastName: myfriend.lastName,
                status: 'sent', //sent status
                friendStatus: 'pending', //pending status
                personalMessage: ''
        }

        const ownDatabase = [];
        ownDatabase.push(friend);

        firestore.collection('users').doc(userUid).update({
            friends:  firestore.FieldValue.arrayUnion(...ownDatabase)
        })  
        }).then(() => {
            dispatch({type: 'SEND_REQUEST', friend });
        }).catch((err) => {
            dispatch({type: 'SEND_REQUEST_FAILED', err });
        })  
    }
}

export const acceptFriendRequest = (myfriend) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        try{
            const firestore = getFirestore();
            const profile = getState().firebase.profile;
            const userUid = getState().firebase.auth.uid;
            const friend = {}
            const updatedFriend = { email: '',firstName: '',lastName: '',friendStatus: '',personalMessage: '',status: '', user: '' }

            /* Loop through your friend list and change the values of the user you want to make a friend*/
            const tempOwnFriendList = [];
            for(var i = 0; i < profile.friends.length; i++) {
                if(profile.friends[i].email != myfriend.email){
                    tempOwnFriendList.push(profile.friends[i])
                }
                if(profile.friends[i].email == myfriend.email){

                    updatedFriend.email = profile.friends[i].email;
                    updatedFriend.friendStatus = 'friend';
                    updatedFriend.personalMessage = 'NA';
                    updatedFriend.status = 'NA';
                    updatedFriend.user = profile.friends[i].user;
                    updatedFriend.firstName = profile.friends[i].firstName;
                    updatedFriend.lastName = profile.friends[i].lastName;

                    tempOwnFriendList.push(updatedFriend)
                }
            }
        
            firestore.collection('users').doc(userUid).update({
                friends: tempOwnFriendList
            }).then(() => {

            /* Loop through the other users friend list and remove yourself from there list */
            var docRef = firestore.collection("users").doc(myfriend.user);
            
            docRef.get().then(function(doc) {     
                const tempOtherUserFriendList = [];
                if (doc.exists) {
                    for(var i = 0; i < doc.data().friends.length; i++){
                        if(doc.data().friends[i].email != profile.userEmail){ 
                            tempOtherUserFriendList.push(doc.data().friends[i]) 
                        }
                        if(doc.data().friends[i].email == profile.userEmail){
                    
                            updatedFriend.email = doc.data().friends[i].email;
                            updatedFriend.friendStatus = 'friend';
                            updatedFriend.personalMessage = 'NA';
                            updatedFriend.status = 'NA';
                            updatedFriend.user = doc.data().friends[i].user;
                            updatedFriend.firstName = doc.data().friends[i].firstName;
                            updatedFriend.lastName = doc.data().friends[i].lastName;
            
                            tempOtherUserFriendList.push(updatedFriend)
                        }
                    }
                } else { console.log("No such document!");}

                firestore.collection('users').doc(myfriend.user).update({
                    friends: tempOtherUserFriendList
                })
            })
        
            }).then(() => {
                dispatch({type: 'ACCEPT_REQUEST_CONFIRM', friend});
            }).catch((err) => {
                dispatch({type: 'ACCEPT_REQUEST_FAILED', err });
            }) 
        }
        catch(err) {}
    }
}

export const cancelFriendRequest = (myfriend) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        try{
            const firestore = getFirestore();
            const profile = getState().firebase.profile;
            const userUid = getState().firebase.auth.uid;
            const friend = {}

            /* Loop through your friend list and remove the user you want to cancel request from*/
            const tempOwnFriendList = [];
            for(var i = 0; i < profile.friends.length; i++) {
                if(profile.friends[i].email != myfriend.email){tempOwnFriendList.push(profile.friends[i])}}
        
            firestore.collection('users').doc(userUid).update({
                friends: tempOwnFriendList
            }).then(() => {

            /* Loop through the other users friend list and remove yourself from there list */
            var docRef = firestore.collection("users").doc(myfriend.user);
            
            docRef.get().then(function(doc) {     
                const tempOtherUserFriendList = [];
                if (doc.exists) {
                    for(var i = 0; i < doc.data().friends.length; i++){
                        if(doc.data().friends[i].email != profile.userEmail){ tempOtherUserFriendList.push(doc.data().friends[i]) }
                    }
                } else { console.log("No such document!");}

                firestore.collection('users').doc(myfriend.user).update({
                    friends: tempOtherUserFriendList
                })
            })
        
            }).then(() => {
                dispatch({type: 'CANCEL_REQUEST_CONFIRM', friend});
            }).catch((err) => {
                dispatch({type: 'CANCEL_REQUEST_FAILED', err });
            }) 
        }
        catch(err){}
    }
}