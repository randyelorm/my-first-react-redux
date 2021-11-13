
import React from 'react';
import { Route, BrowserRouter } from "react-router-dom"
import Homepage from './Components/HomePage';
import Signupform from './Components/SIGNUP/SignUpForm';
import Login from './Components/LOGIN/Login';
import PrivateRoute from './Components/PrivateRoute';
import ScrollToTop from './ScrollToTop';

const Router = () => {
    return (
        <div>

            <BrowserRouter>
                <ScrollToTop>
                    <PrivateRoute exact path="/" component={Homepage} />
                    <Route path="/signup" component={Signupform} />
                    <Route path="/login" component={Login} />
                </ScrollToTop>
            </BrowserRouter>


        </div>
    );
}

export default Router;
