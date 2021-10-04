import React, {useState} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { deleteGrade  } from "./Actions"
import {connect} from "react-redux"
import Modal from 'react-bootstrap/Modal';
import EditForm from './EditForm';

const A_Single_Exam_Grade = ({each_grade, deleteTheGrade}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   const  handleDelete= (event) => {
    
    deleteTheGrade(each_grade.id)
    
     }
// each_grade is being read from our redux store which is being supplied data from our firestore database.
// this means the id is coming from our firestore when a new user is added.
// is what becomes each_grade.id now and not the one we generated
// so each_grade.id = id from firestore. 



     


    return (

        <div className = 'card_box'>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <EditForm each_grade= {each_grade} closeModal = {handleClose} />

        </Modal.Body>
        
      </Modal>
            
        
        <Card className = "card" style={{ width: '18rem' }}>
        <ListGroup variant="flush">
            <ListGroup.Item> <span className ="details">Name:</span> {each_grade.name} </ListGroup.Item>
            <ListGroup.Item><span className ="details">Level:</span> {each_grade.level}</ListGroup.Item>
            <ListGroup.Item><span className ="details">Subject:</span>  {each_grade.subject}</ListGroup.Item>
            <ListGroup.Item><span className ="details">Score:</span>  {each_grade.score}</ListGroup.Item>
            <ListGroup.Item><span className ="details">Grade:</span>  {each_grade.grade}</ListGroup.Item>
            <ListGroup.Item> 
                 <Button variant="primary" onClick = {handleShow}>Edit <i class="far fa-edit"></i> </Button>{' '} 
                 <Button variant="danger" onClick = {handleDelete}> Delete <i class="far fa-trash-alt"></i></Button>{' '} 
            
            </ListGroup.Item>
            
        </ListGroup>
        </Card>
       
           
        </div>
    );
}

const mapDispatchToProps = {
    deleteTheGrade:deleteGrade
}

export default connect(null, mapDispatchToProps)(A_Single_Exam_Grade);
