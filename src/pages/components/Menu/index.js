import React, { useContext, useState, useEffect } from 'react';

import { Container, Header, Body, HeaderTitle, Line, OptionMenu, Icon, HeaderAvatar } from './styles';
import ContextApp from 'context/ContextApp';
import { STUDENT } from 'services/api/responseAPI';

import HomeURL from 'routes/URLs/HomeURL';
import ProfileURL from 'routes/URLs/ProfileURL';
import Texts from 'config/Texts';
import List from 'components/List';
import { UserIcon, CourseIcon, LogoutIcon } from 'components/Icons';

export function Menu({ ...props }) {
    const [image, setImage] = useState(null);
    const [name, setName] = useState(null);
    let { doLogout, currentyUser, currentyUserImage } = useContext(ContextApp);
    const TEXTS = Texts.MENU_PAGES_AUTH;

    useEffect(() => {
        if (currentyUser && currentyUser[STUDENT.FULL_NAME]) {
            setName(currentyUser[STUDENT.FULL_NAME]);
        }
    }, [currentyUser]);

    useEffect(() => {
        if (currentyUserImage) {
            setImage(currentyUserImage);
        }
    }, [currentyUserImage]);

    const options = [
        {
            text: TEXTS.BUTTON_HOME,
            exact: true,
            isNavLink: true,
            to: HomeURL().REDIRECT.BASE,
            icon : CourseIcon,
        },
        {
            text: TEXTS.BUTTON_PROFILE,
            exact: false,
            isNavLink: true,
            to: ProfileURL().REDIRECT.BASE,
            icon : UserIcon,
        },
        {
            text: TEXTS.BUTTON_LOGOUT,
            onClick: () => doLogout ? doLogout() : null,
            icon : LogoutIcon,
        },
    ];

    return (
        <Container {...props}>
            <Header>
                <Line>
                    <HeaderAvatar
                        size={80}
                        image={image}
                        title={name}
                    />
                </Line>
                <Line>
                    <HeaderTitle
                        to={ProfileURL().REDIRECT.BASE}
                    >
                        {name}
                    </HeaderTitle>
                </Line>
            </Header>
            <Body>
                <List
                    items={options}
                    renderItem={(item, key) => (
                        <OptionMenu
                            key={key}
                            exact={item.exact}
                            isNavLink={item.isNavLink}
                            to={item.to}
                            onClick={item.onClick}
                        >
                            {
                                item.icon && 
                                <Icon as={item.icon}/>
                            }
                            <span>
                                {item.text}
                            </span>
                        </OptionMenu>
                    )}
                />
            </Body>
        </Container>
    );
}
export default Menu;