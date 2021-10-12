import React from 'react';
import {connect} from "react-redux"
import A_Single_Exam_Grade from './A_Single_Exam_Grade';

const ExamsList = ({exams_grading}) => {
 
   const ExamsList = exams_grading.map(
        (each_grade)=>{
         return (
             <div >
            <A_Single_Exam_Grade each_grade = {each_grade} />
             </div> 
         )
        }
    )


    return (
        <div className = "all_grades">
          {ExamsList}  
        </div>
    );
}

const mapStateToProps=(state)=> {
    return {
        exams_grading: state.ExamsLocalReducer.exams_grading
    }
}


export default connect(mapStateToProps)(ExamsList);

// mapStateToProps reads from our firestore.
// So in this case, we are no longer reading from our react-redux-store.
// so the id that is generated no longer comes from us but from the one 
// firebase adds when we add a new user. 
