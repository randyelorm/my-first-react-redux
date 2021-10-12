// Redux Thunk is a middleware that lets you call action creators that return a function
//  instead of an action object. That function receives the store’s dispatch method, 
// which is then used to dispatch regular synchronous actions inside the function’s 
// body once the asynchronous operations have been completed.



export const addGrade = (a_grade) => {
   
       // return {
    //     type : "ADD_GRADE",
    //     payload: a_grade
    // }

        return(dispatch, state, {getFirestore})=> {
            getFirestore().collection("exams-grading").add(a_grade) // it's more convenient to let Cloud Firestore auto-generate an ID for you. You can do this by calling add():  
            .then(
                
                (docRef) => {
                console.log(docRef.id);
                // reading the id firebase generates for you.
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        }
     

    
  
}


export const getAllgrades = ()=> {

    return (dispatch, state, {getFirestore})=> {

        getFirestore().collection("exams-grading").onSnapshot(
            (snapshot)=> {
                let exams_grades = []
                snapshot.forEach(
                    (items_in_database)=> {
                        exams_grades.push({...items_in_database.data(), id:items_in_database.id})
                    // after id is generated for you when you add a new person, we have to push
                    // both the items in our firebase and their respective id's to our redux store.
                    // so items_in_database.data() = all information in firebase then
                    // items_in_database.id = their id's.
                    }
                )

                dispatch(
                    {
                     type: "GET_GRADES",
                    payload: exams_grades
                    }
                )
            }
        )

    }

}


export const deleteGrade = (grade_id)=> {
  
    // return {
    //     type: "DELETE_GRADE",
    //     payload: grade_id
    // }
    return (state, dispatch, {getFirestore})=> {
        getFirestore().collection("exams-grading").doc(grade_id).delete().then(() => {
            console.log(grade_id);
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }
    }
 


export const editGrade = (updated_form)=> {
   
    // return {
    //     type: "EDIT_GRADE",
    //     grade_id : grade_id,
    //     updated_form: updated_form 
    // }

    return (dispatch, state, {getFirestore})=> {
        

            getFirestore().collection("exams-grading").doc(updated_form.id).update(updated_form)
            .then(() => {
                console.log("Document successfully updated!");
            });
    }
}





