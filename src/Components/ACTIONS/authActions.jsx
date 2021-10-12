

// SignIn With Email

export const SignUpWithEmail = (email, password)=> {

    return(dispatch, state, {getFirebase})=> {
        let firebase = getFirebase()
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
           
            var user = userCredential.user
            console.log(userCredential.user)
           
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
        });
    }
}



// SignUp/Login With Google

export const signInWithGoogle = ()=> {
    return(dispatch, state, {getFirebase}) => {

        let firebase = getFirebase()
        var provider = new firebase.auth.GoogleAuthProvider();
       

        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;
            var token = credential.accessToken;
            var user = result.user;
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            alert (errorMessage)
        });

    }
}




// Login 


export const loginWithEmail = (email, password) => {
    return (dispatch, state, {getFirebase})=> {

        let firebase = getFirebase()
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert (errorMessage)
        });

    }
}



// Logout 

export const SignOut = ()=> {
    return(dispatch, state, {getFirebase})=> {

        let firebase = getFirebase()

        firebase.auth().signOut().then(() => {
            console.log("success")
          }).catch((error) => {
           alert (error.message)
          });
    }
   
}