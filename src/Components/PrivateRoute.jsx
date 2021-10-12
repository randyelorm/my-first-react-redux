import React from 'react';
import {connect} from "react-redux"
import {Route, Redirect} from "react-router-dom"
 
const PrivateRoute = ({ component: Component ,auth, ...rest}) => {
    console.log(auth)

    if(!auth.isLoaded) return <h1>Loading Page</h1>
    if(auth.uid) {
        return (<Route component = {Component}/>) 
    }


    // This is a makeshift else for if the person is not authenticated
    return (
       <Route
       
       render = {
           ()=> {
            return <Redirect to = {{pathname: "/login"}} />   
           }
       }
       
       />
    );
}


const mapStateToProps = (state) => ({
    auth: state.firebase.auth
  
})


  


export default connect (mapStateToProps)(PrivateRoute);
