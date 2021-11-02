import React from 'react';
import ProfileRouter from '../../router/ProfileRouter'
import VerticalDash from '../../static-elements/vert-dashboard'
import Profile from './Profile';
import { BrowserRouter ,Router, Route} from 'react-router-dom';


const UserProfile = () => {
    return (
        <section className="w-screen h-screen bg-yellow-300  inline-flex">
            <VerticalDash />
            <ProfileRouter />
        </section>
    );
};

export default UserProfile;