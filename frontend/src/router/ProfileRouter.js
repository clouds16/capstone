import React from 'react';
import { BrowserRouter ,Router, Route} from 'react-router-dom';

import Profile from '../pages/userpages/Profile'
import Test from '../pages/test-empty'

function ProfileRouter() {
    return (
        
        <BrowserRouter  >
            <Route exact path="/profile:id" component={Profile} />
            <Route exact path="/profile/:id/trainer" component= {Test} />
            <Route exact path="/profile/:id/stats" component= ""/>
            <Route exact path="/profile/:id/settings" component= "" />
        </BrowserRouter>
    );
};

export default ProfileRouter;



