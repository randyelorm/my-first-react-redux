import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom"
import "./signup.css"
import signupimg from "../../Images/signupimg.svg"
import googleicon from "../../Images/google-logo.png"
import { connect } from 'react-redux';
import {SignUpWithEmail, signInWithGoogle} from "../ACTIONS/authActions" 


const Signupform = (props) => {

    if(!props.auth.isLoaded) return null
    if(props.auth.uid) props.history.push("/")

    const handleSubmit = (event)=> {
        event.preventDefault()
       let email = event.target.elements.email.value
       let password = event.target.elements.password.value
       props.SignUpWithEmail(email, password)
    }


    return (
        <div className = "SignUp-Container">
            <Form className = "log-in-form" onSubmit = {handleSubmit}>
          
     <h2 className = "signup-heading"> Online Students Grading. Please <span className ="Sign_Up">Sign UP</span> </h2> <br /> 
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className = "label-text">Email address</Form.Label>
                <Form.Control 
                type="email" 
                placeholder="Enter email" 
                name = "email" 
                className = "Sign-up-form-input" 
                required = "required" 
                
                />
               
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className = "label-text">Password</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Password" 
                name = "password" 
                className = "Sign-up-form-input" 
                required = "required"  
               
                />
            </Form.Group>
           
 
          <Button variant="primary" className = "" type="submit">
               Sign Up <i class="fas fa-user-plus"></i > 
        </Button>
   

            <br/>
            <br/>
            <Button  className = "google-btn" onClick = {props.signInWithGoogle}>
            <img className ="userForm-input" src = {googleicon}  className = "google-logo" alt="" /> Or Sign Up Google
            </Button>
            <br/>
            <br/>

        <h4>Already have an account?</h4>
        <Link to = "/login">
          <Button variant="primary" className = "login-btn"> Login  <i class="fas fa-sign-in-alt"></i></Button>   
          </Link>
         </Form>

            <img src = {signupimg } className = "SignUp-img" alt="" />
            
  </div>
    );
}

const mapStateToProps =(state)=> ({
    auth:state.firebase.auth
})

const mapDispatchToProps = {
    SignUpWithEmail: SignUpWithEmail,
    signInWithGoogle: signInWithGoogle
    
}



export default  connect (mapStateToProps, mapDispatchToProps) (Signupform);
