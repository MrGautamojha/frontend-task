import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import SignUp from './user/SignUp';
import SignIn from './user/SignIn';
import Dashboard from './dashboard/Dashboard';

export default function AdminRouter(props) {
 return(
    <Router>
        <div>
            <Route path='/SignUp' exact strict component={SignUp}  history={props.history}/>
            <Route path='/SignIn' exact strict component={SignIn}  history={props.history}/>
            <Route path='/Dashboard' exact strict component={Dashboard}  history={props.history}/>
        </div>
    </Router>
 )
}