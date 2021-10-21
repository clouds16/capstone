import React from 'react';
import { BrowserRouter ,Router, Route} from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Signup from '../pages/Signup';


function PageRouter() {
    return (
        <BrowserRouter >
            <Route exact path="/" component={Homepage} />
            <Route exact path="/signup" component={Signup} />
        </BrowserRouter>
    );
};

export default PageRouter;