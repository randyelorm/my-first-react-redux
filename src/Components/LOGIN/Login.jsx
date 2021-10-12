import React from 'react';
import "./login.css"
import loginimg from "../../Images/login.gif"
import google_icon from "../../Images/google-logo.png"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom"
import {loginWithEmail, signInWithGoogle} from "../ACTIONS/authActions" 
import {connect} from "react-redux"


const Login = (props) => {


    if(!props.auth.isLoaded) return null
    if(props.auth.uid) props.history.push("/")

   const handleSubmit = (event)=> {
       event.preventDefault()
       let email = event.target.elements.email.value
       let password = event.target.elements.password.value
       props.loginWithEmail(email, password)
   }


    return (
        <div className = "Login-Container" onSubmit = {handleSubmit}>

<img src = {loginimg} className = "Login-img" alt="" />

       <Form className = "log-in-form" >
     
 <h2 className = "login-heading" > Online Students Grading. Please <span className ="Login">LOGIN</span> </h2> <br /> 
       <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label className = "label-text">Email address</Form.Label>
           <Form.Control type="email" placeholder="Enter E-mail" name = "email" className = "Login-form-input" />
          
       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label className = "label-text">Password</Form.Label>
           <Form.Control type="password" placeholder="Enter Password" name = "password" className = "Login-form-input"   />
       </Form.Group>
      

     <Button variant="primary" className = "login-btn" type="submit">
          LOGIN <i class="fas fa-sign-in-alt"></i>
   </Button>
     <br />
       <Button  className = "google-btn" onClick = {props.signInWithGoogle}>
       <img src={google_icon} className ="userForm-input"  className = "google-logo" alt="" /> Or Login With Google
       </Button>
       <br/>
       <br/>

   <h4>Dont Have an account?</h4>
     <Link to = "/signup">
     <Button variant="primary" className = "signup-btn"> SignUp <i class="fas fa-user-plus"></i > </Button>  
     </Link>
    </Form>


       
</div>
    );
}

const mapStateToProps=(state)=> {
    return {
        auth:state.firebase.auth
      }
}

const mapDispatchStateToProps = {
    loginWithEmail:loginWithEmail,
    signInWithGoogle: signInWithGoogle
}

export default  connect( mapStateToProps, mapDispatchStateToProps)(Login);
