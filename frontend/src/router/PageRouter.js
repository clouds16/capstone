import React from 'react';
import { BrowserRouter ,Router, Route} from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Signup from '../pages/Signup';
import SelectProgram from '../pages/userpages/SelectProgram';
import SelectSchedule from '../pages/userpages/SelectSchedule';


function PageRouter() {
    return (
        <BrowserRouter  >
            <Route exact path="/" component={Homepage} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile/:id/program" component={SelectProgram} />
            <Route exact path="/profile/:id/schedule" component={SelectSchedule} />

        </BrowserRouter>
    );
};

export default PageRouter;



