//  import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import "./styles.css"
import {connect} from "react-redux"
import { addGrade } from "./Actions"
import  { Component } from "react";
import  { useState } from "react";




class ExamsForm extends Component {
  
    constructor (props) {
        super (props)

        this.state = {
             name: "",
            level: "",
            subject: "",
            score: "",
            grade: "",
            
        }
    }


     handleChange = (event)=> {
     this.setState({
      [event.target.name]: event.target.value
     })
   }

      handleSubmit = (event)=> {
       event.preventDefault() 
       this.props.addNewGrade(this.state)
       this.setState({
        name: "",
        level: "",
        subject: "",
        score: "",
        grade: ""
       })
   }




    render() {
        return (
            <div>
            <br/>
    <h2 className = "text-center">STUDENTS GRADING SYSTEM WEB APP</h2>

  <Form className = "form" onSubmit = {this.handleSubmit}>
   <Row className="align-items-center">
     <Col xs="auto">
       <Form.Label htmlFor="inlineFormInput" >
        <span className = "details">Name </span> 
       </Form.Label>
       <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Enter Name"
        name = "name"
        value = {this.state.name}
        onChange = {this.handleChange}
      />
     </Col>

     <Col xs="auto">
       <Form.Label htmlFor="inlineFormInput" >
       <span className = "details">Level</span> 
      </Form.Label>
       <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Enter Level"
        type = "number"
        name = "level"
        value = {this.state.level}
        onChange = {this.handleChange}
      />
    </Col>

     <Col xs="auto">
       <Form.Label htmlFor="inlineFormInput" >
       <span className = "details">Subject</span> 
       </Form.Label>
       <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Enter Subject"
        name = "subject"
        value = {this.state.subject}
        onChange = {this.handleChange}
      />
    </Col>

     <Col xs="auto">
       <Form.Label htmlFor="inlineFormInput" >
       <span className = "details">Score</span> 
       </Form.Label>
       <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Enter Score"
        type = "number"
        name = "score"
        value = {this.state.score}
        onChange = {this.handleChange}
      />
    </Col>

     <Col xs="auto">
       <Form.Label htmlFor="inlineFormInput" >
       <span className = "details">Grade</span> 
       </Form.Label>
       <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Enter Grade"
        name = "grade"
        value = {this.state.grade}
        onChange = {this.handleChange}
      />
    </Col>
   
  
     <Col xs="auto">
       <Button type="submit" className="mt-4">
         Submit
       </Button>
     </Col>
   </Row>
 </Form> 

 <hr className = "hr"/>

            </div>
        );
    }
}

const mapDispatchToProps = {
    addNewGrade: addGrade
}

export default connect(null, mapDispatchToProps) (ExamsForm);















//  const ExamsForm = ({addTheGrade}) => {

//     const [formState, setformState]= useState({
//            name: "",
//            level: "",
//            subject: "",
//            score: "",
//            grade: ""
//     })


//     const handleChange = (event)=> {
//       setformState({
//        [event.target.name]: event.target.value
//       })
//     }

//     const handleSubmit = (event)=> {
//         event.preventDefault()
//         addGrade(formState)
        
       
//         setformState({
//          name: "",
//          level: "",
//          subject: "",
//          score: "",
//          grade: ""
//         })
//     }


//      return (
//          <>
//          <div>
//      <br/>
//      <h2 className = "text-center">ENTER STUDENTS DETAILS</h2>

//   <Form className = "form" onSubmit = {handleSubmit}>
//    <Row className="align-items-center">
//      <Col xs="auto">
//        <Form.Label htmlFor="inlineFormInput" >
//         <span className = "details">Name</span> 
//        </Form.Label>
//        <Form.Control
//          className="mb-2"
//          id="inlineFormInput"
//          placeholder="Enter Name"
//          name = "name"
//          value = {formState.name}
//          onChange = {handleChange}
//        />
//      </Col>

//      <Col xs="auto">
//        <Form.Label htmlFor="inlineFormInput" >
//        <span className = "details">Level</span> 
//        </Form.Label>
//        <Form.Control
//          className="mb-2"
//          id="inlineFormInput"
//          placeholder="Enter Level"
//          type = "number"
//          name = "level"
//          value = {formState.level}
//          onChange = {handleChange}
//        />
//      </Col>

//      <Col xs="auto">
//        <Form.Label htmlFor="inlineFormInput" >
//        <span className = "details">Subject</span> 
//        </Form.Label>
//        <Form.Control
//          className="mb-2"
//          id="inlineFormInput"
//          placeholder="Enter Subject"
//          name = "subject"
//          value = {formState.subject}
//          onChange = {handleChange}
//        />
//      </Col>

//      <Col xs="auto">
//        <Form.Label htmlFor="inlineFormInput" >
//        <span className = "details">Score</span> 
//        </Form.Label>
//        <Form.Control
//          className="mb-2"
//          id="inlineFormInput"
//          placeholder="Enter Score"
//          type = "number"
//          name = "score"
//          value = {formState.score}
//          onChange = {handleChange}
//        />
//      </Col>

//      <Col xs="auto">
//        <Form.Label htmlFor="inlineFormInput" >
//        <span className = "details">Grade</span> 
//        </Form.Label>
//        <Form.Control
//          className="mb-2"
//          id="inlineFormInput"
//          placeholder="Enter Grade"
//          name = "grade"
//          value = {formState.grade}
//          onChange = {handleChange}
//        />
//      </Col>
   
  
//      <Col xs="auto">
//        <Button type="submit" className="mt-4">
//          Submit
//        </Button>
//      </Col>
//    </Row>
//  </Form>
//          </div>
//          </>
//      );
//  }


//  const mapDispatchToProps = {

//      addTheGrade : addGrade
//  }


// export default connect ( null, mapDispatchToProps ) (ExamsForm);





