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
        exams_grading: state.exams_grading
    }
}


export default connect(mapStateToProps)(ExamsList);

