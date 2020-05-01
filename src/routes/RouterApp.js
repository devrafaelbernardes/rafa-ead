import React from 'react';
import { Switch } from 'react-router-dom';

import ProtectedRoute from 'routes/ProtectedRoute';
import HomeURL from 'routes/URLs/HomeURL';
import LogonURL from 'routes/URLs/LogonURL';
import RegisterURL from 'routes/URLs/RegisterURL';
import RegisterCourseURL from 'routes/URLs/RegisterCourseURL';
import ProfileURL from 'routes/URLs/ProfileURL';
import ForgotPasswordURL from './URLs/ForgotPasswordURL';
import ResetPasswordURL from './URLs/ResetPasswordURL';
import ValidateEmailURL from 'routes/URLs/ValidateEmailURL';
import CourseURL from './URLs/CourseURL';

// ERROR PAGES
import PageNotFound from 'pages/errors/PageNotFound';

// PAGES ANY
import RegisterCourse from 'pages/any/RegisterCourse';
import ValidateEmail from 'pages/any/ValidateEmail';

// PAGES AUTH
import HomeAuth from 'pages/auth/Home';
import Profile from 'pages/auth/Profile';
import Course from 'pages/auth/Course';

// PAGES DEFAULT
import HomeDefault from 'pages/default/Home';
import Logon from 'pages/default/Logon';
import Register from 'pages/default/Register';
import ForgotPassword from 'pages/default/ForgotPassword';
import ResetPassword from 'pages/default/ResetPassword';

export function RouterApp() {
    const CONNECTED_LINK = HomeURL().REDIRECT.BASE;
    const DESCONNECTED_LINK = HomeURL().REDIRECT.BASE;

    return (
        <Switch>
            { /* DEFAULT */}
            <ProtectedRoute
                path={LogonURL().ROUTER.BASE}
                componentNotAuthenticated={Logon}
                redirectAuthenticatedURL={CONNECTED_LINK}
            />
            <ProtectedRoute
                path={RegisterURL().ROUTER.BASE}
                componentNotAuthenticated={Register}
                redirectAuthenticatedURL={CONNECTED_LINK}
            />
            <ProtectedRoute
                path={ForgotPasswordURL().ROUTER.BASE}
                componentNotAuthenticated={ForgotPassword}
                redirectAuthenticatedURL={CONNECTED_LINK}
            />
            <ProtectedRoute
                path={ResetPasswordURL().ROUTER.BASE}
                componentNotAuthenticated={ResetPassword}
                redirectAuthenticatedURL={CONNECTED_LINK}
            />

            { /* AUTH */}
            <ProtectedRoute
                exact
                path={HomeURL().ROUTER.BASE}
                componentAuthenticated={HomeAuth}
                componentNotAuthenticated={HomeDefault}
            />
            <ProtectedRoute
                path={ProfileURL().ROUTER.BASE}
                componentAuthenticated={Profile}
                redirectNotAuthenticatedURL={DESCONNECTED_LINK}
            />
            <ProtectedRoute
                path={CourseURL().ROUTER.BASE}
                componentAuthenticated={Course}
                redirectNotAuthenticatedURL={DESCONNECTED_LINK}
            />

            { /* ANY */}
            <ProtectedRoute
                path={RegisterCourseURL().ROUTER.BASE}
                componentAuthenticated={RegisterCourse}
                componentNotAuthenticated={RegisterCourse}
            />
            <ProtectedRoute
                path={ValidateEmailURL().ROUTER.BASE}
                componentAuthenticated={ValidateEmail}
                componentNotAuthenticated={ValidateEmail}
            />

            <ProtectedRoute
                componentAuthenticated={PageNotFound}
                componentNotAuthenticated={PageNotFound}
            />
        </Switch>
    );
}

export default RouterApp;