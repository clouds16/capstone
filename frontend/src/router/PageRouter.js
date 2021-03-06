import React from 'react';
import { BrowserRouter ,Router, Route} from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Profile from '../pages/userpages/Profile'
import SelectProgram from '../pages/userpages/SelectProgram';
import SelectSchedule from '../pages/userpages/SelectSchedule';
import User from '../pages/userpages/User'


function PageRouter() {
    return (
        <BrowserRouter  >
            <Route exact path="/" component={Homepage} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile/:id" component={User} />
            <Route exact path="/profile/:id/program" component={SelectProgram} />
            <Route exact path="/profile/:id/schedule" component={SelectSchedule} />

        </BrowserRouter>
    );
};

export default PageRouter;



