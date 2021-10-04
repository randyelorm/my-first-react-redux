const initialState = {
 exams_grading: []
}



const ExamsReducer = (state = initialState, action) => {
   
    switch (action.type) {
        case "ADD_GRADE":
            // get more explanation here:
           
            return {...state, exams_grading: [...state.exams_grading, action.payload]}
// We don't want to mutate the state (change the value in the state).
// We return a new object that has to be up to date with the old one we are copying from.
// we then update the new object with the old one. 

        case "GET_GRADES":
        return {...state, exams_grading : action.payload}
           

        case "DELETE_GRADE":
         
        
           let notdeletedgrades = state.exams_grading.filter(
               (each_grade_in_array)=> {
                  return  each_grade_in_array.id !== action.payload
               })

               return {exams_grading: notdeletedgrades}

        case "EDIT_GRADE":
        //  console.log(action.grade_id )
        //  console.log(action.updated_form)
         
         let updatedgrades = state.exams_grading.map(
             (each_grade)=> {
               if(each_grade.id === action.grade_id ){
                   return {...each_grade, ...action.updated_form }

               } else {return each_grade}
             }
             
         )
         
         return {...state, exams_grading: updatedgrades}
       

        default: 
        return state
    }
   
}

export default ExamsReducer;



