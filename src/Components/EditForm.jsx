import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import "./styles.css"
import {connect} from "react-redux"
import { addGrade } from "./Actions"
import  { Component } from "react";
import  { useState } from "react";
import {editGrade} from "./Actions"




class EditForm extends Component {
  
    constructor (props) {
        super (props)

        this.state = {
            name: this.props.each_grade.name,
            level: this.props.each_grade.level,
            subject: this.props.each_grade.subject,
            score: this.props.each_grade.score,
            grade: this.props.each_grade.grade,
            id: this.props.each_grade.id,
            disabled: true
            
        }
    }


     handleChange = (event)=> {
     this.setState({
      [event.target.name]: event.target.value,
      disabled: false
     })
   }

      handleSubmit = (event)=> {
       event.preventDefault() 
       this.props.EditNewGrade(this.state.id, this.state)

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


  <Form className = "" onSubmit = {this.handleSubmit}>
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
       <Button type="submit" className="mt-4" disabled = {this.state.disabled} onClick = {this.props.closeModal}>
         Update Changes
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
    EditNewGrade: editGrade
}

export default connect(null, mapDispatchToProps) (EditForm);