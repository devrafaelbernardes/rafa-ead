import React from 'react';
import { Switch } from 'react-router-dom';

import ProtectedRoute from 'routes/ProtectedRoute';
import RegisterCourseURL from 'routes/URLs/RegisterCourseURL';
import ErrorURL from 'routes/URLs/ErrorURL';

// PAGES AUTH
import Home from 'pages/default/RegisterCourse/pages/Home';
import Logon from 'pages/default/RegisterCourse/pages/Logon';
import Register from 'pages/default/RegisterCourse/pages/Register';

export function RouterRegisterCourse() {
    const ROUTER = RegisterCourseURL().ROUTER;
    const CONNECTED_LINK = Home;
    const ERROR_LINK = ErrorURL().REDIRECT.BASE;

    return (
        <Switch>
            <ProtectedRoute
                exact
                path={ROUTER.BASE}
                componentAuthenticated={Home}
                componentNotAuthenticated={Home}
            />
            <ProtectedRoute
                path={ROUTER.LOGON}
                componentNotAuthenticated={Logon}
                redirectAuthenticatedURL={CONNECTED_LINK}
            />
            <ProtectedRoute
                path={ROUTER.REGISTER}
                componentNotAuthenticated={Register}
                redirectAuthenticatedURL={CONNECTED_LINK}
            />

            { /* ANY */}
            <ProtectedRoute
                redirectAuthenticatedURL={ERROR_LINK}
                redirectNotAuthenticatedURL={ERROR_LINK}
            />
        </Switch>
    );
}

export default RouterRegisterCourse;