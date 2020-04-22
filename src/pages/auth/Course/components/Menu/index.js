import React, { useContext } from 'react';

import { Container } from './styles';

import Texts from 'config/Texts';
import CourseURL from 'routes/URLs/CourseURL';
import ContextCourse from 'context/ContextCourse';

export function Menu({ ...props }) {
    const TEXTS = Texts.PAGE_AUTH_COURSE.MENU;
    const { id } = useContext(ContextCourse);
    const REDIRECT = CourseURL(id).REDIRECT;

    return (
        <Container
            {...props}
            items={[
                {
                    to: REDIRECT.BASE,
                    text: TEXTS.BUTTON_HOME,
                },
                {
                    to: REDIRECT.VIDEOS("").BASE,
                    text: TEXTS.BUTTON_VIDEOS,
                },
                {
                    to: REDIRECT.MATERIALS.BASE,
                    text: TEXTS.BUTTON_MATERIALS,
                },
            ]}
        />
    );
}

export default Menu;