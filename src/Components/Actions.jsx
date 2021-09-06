
export const addGrade = (a_grade) => {
     a_grade.id = Math.random().toString()
     
    return {
        type : "ADD_GRADE",
        payload: a_grade
    }

    
  
}


export const deleteGrade = (grade_id)=> {
  
    return {
        type: "DELETE_GRADE",
        payload: grade_id
    }
}


export const editGrade = (grade_id, updated_form)=> {
    console.log(grade_id)
    return {
        type: "EDIT_GRADE",
        grade_id : grade_id,
        updated_form: updated_form 
    }
}